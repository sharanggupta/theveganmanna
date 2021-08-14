import { message } from "antd";
import { Auth, API, graphqlOperation } from "aws-amplify";
import {
  User,
  Recipe,
  Category,
  Donation,
  Comment,
  Like,
  Report,
  Message,
} from "interfaces";
import {
  createDonation,
  createMessage,
  createReport,
  createUser,
  deleteDonation,
  deleteMessage,
  deleteReport,
  deleteUser,
  updateDonation,
  updateRecipe,
  updateReport,
  updateUser,
} from "graphql/mutations";
import { createRecipe, deleteRecipe } from "graphql/mutations";
import { createComment, deleteComment } from "graphql/mutations";
import {
  getUser,
  listCategorys,
  listRecipes,
  getRecipe,
  recipesByDate,
  getReport,
  reportsByCount,
  usersByActive,
  usersByAdmin,
  listUsers,
  donationsByDate,
  getDonation,
} from "graphql/queries";
import { recipesByUser } from "graphql/queries";
import config from "aws-exports";
import jwt_decode from "jwt-decode";

// #region [Response]
export interface BaseResponse {
  status_code: number;
  error_msg: string;
  body: any;
}
// #endregion

// #region [BaseRequest]
interface BaseRequestProps {
  url: string;
  method: any;
  params?: Object;
  data?: Object;
}

const catchError = (err: any) => {
  // const isAuth = window.location.pathname.startsWith("/auth");
  const isLogin = window.location.pathname.startsWith("/auth/login");

  if (err.response) {
    if (err.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("refresh");
      message.warn({ content: "You're unauthorized, please sign in" });
      if (!isLogin) window.location.replace("/auth/login");
    } else if (err.response.status === 403) {
      message.warn({ content: "Unauthorized action." });
    }
  } else if (err.message === "Network Error") {
    message.info({ content: "Error occured, please try again" });
  } else {
    if (err === "No current user") return;

    if (err.message) message.error({ content: err.message });
    else {
      if (typeof err === "string") {
        message.error({ content: err });
      }
    }
    console.log(err);
  }
};
// #endregion

// #region [Auth]
export const login = async (data: { username: string; password: string }) => {
  const { username, password } = data;
  try {
    await Auth.signIn(username, password);
    return true;
  } catch (err) {
    catchError(err);
    return false;
  }
};

export const createUserApi = async (data: { username: string }) => {
  const idToken: any = localStorage.getItem("idToken");
  const currentUser: any = jwt_decode(idToken);
  const { username } = data;

  try {
    const currentAuth = await Auth.currentAuthenticatedUser();

    const user = {
      id: username,
      sub: currentUser.sub,
      email: currentUser.email,
      isActive: 1,
      isAdmin: 0,
    };

    await API.graphql(graphqlOperation(createUser, { input: user }));

    await Auth.updateUserAttributes(currentAuth, {
      "custom:username": username,
    });
    return true;
  } catch (err) {
    catchError(err);
    return false;
  }
};

export const deleteUsers = async () => {
  try {
    const res: any = await API.graphql(
      graphqlOperation(usersByAdmin, { isAdmin: 0 })
    );
    const users = res?.data?.usersByAdmin.items;

    if (!users || users.length === 0) return;

    const userMutations: any = users.map((user: User, i: number) => {
      // delete user recipes
      const recipeMutations: any = user.recipes?.items.map(
        (recipe: Recipe, index: number) => {
          const commentMutations: any = recipe.comments?.items.map(
            (comment: Comment, idx: number) => {
              return `mutationcomment${idx}: deleteComment(input: {id: "${comment.id}"}) { id }`;
            }
          );

          if (commentMutations.length > 0) {
            API.graphql(
              graphqlOperation(`
              mutation deleteRecipeComments {
                ${commentMutations}
              }
            `)
            );
          }

          const likeMutations: any = recipe.likes?.items.map(
            (like: Like, idx: number) => {
              return `mutationlike${idx}: deleteLike(input: {id: "${like.id}"}) { id }`;
            }
          );

          if (likeMutations.length > 0) {
            API.graphql(
              graphqlOperation(`
              mutation deleteRecipeLikes {
                ${likeMutations}
              }
            `)
            );
          }

          return `mutationrecipe${index}: deleteRecipe(input: {id: "${recipe.id}"}) { id }`;
        }
      );

      if (recipeMutations.length > 0) {
        API.graphql(
          graphqlOperation(`
          mutation deleteUserRecipes {
            ${recipeMutations}
          }
        `)
        );
      }

      // delete user messages
      const messageMutations: any = user.messages?.items.map(
        (message: Message, index: number) => {
          return `mutationmessage${index}: deleteMessage(input: {id: "${message.id}"}) { id }`;
        }
      );

      if (messageMutations.length > 0) {
        API.graphql(
          graphqlOperation(`
          mutation deleteUserMessages {
            ${messageMutations}
          }
        `)
        );
      }

      // delete recipe reports
      const reportMutations: any = user.recipes?.items.map(
        (recipe: Recipe, index: number) => {
          return `mutationreport${index}: deleteReport(input: {id: "${recipe.id}"}) { id }`;
        }
      );

      if (reportMutations.length > 0) {
        API.graphql(
          graphqlOperation(`
          mutation deleteRecipeReports {
            ${reportMutations}
          }
        `)
        );
      }

      return `mutationuser${i}: deleteUser(input: {id: "${user.id}"}) { id }`;
    });

    await API.post("cognitoApi", "/", {
      body: {
        usernames: users.map((user: User) => user.sub),
        userPoolId: config.aws_user_pools_id,
      },
    });

    await API.graphql(
      graphqlOperation(`
      mutation deleteAllUsers {
        ${userMutations}
      }
    `)
    );
    return true;
  } catch (err) {
    catchError(err);
    return false;
  }
};

export const deleteUserApi = async ({
  userID,
  username,
}: {
  userID: string;
  username: string;
}) => {
  try {
    await API.put("cognitoApi", "/", {
      body: {
        username,
        userPoolId: config.aws_user_pools_id,
      },
    });

    const user = await getUserApi(userID);

    if (!user) return false;

    // delete user recipes
    const recipeMutations: any = user.recipes?.items.map(
      (recipe: Recipe, index: number) => {
        const commentMutations: any = recipe.comments?.items.map(
          (comment: Comment, idx: number) => {
            return `mutationcomment${idx}: deleteComment(input: {id: "${comment.id}"}) { id }`;
          }
        );

        if (commentMutations.length > 0) {
          API.graphql(
            graphqlOperation(`
            mutation deleteRecipeComments {
              ${commentMutations}
            }
          `)
          );
        }

        const likeMutations: any = recipe.likes?.items.map(
          (like: Like, idx: number) => {
            return `mutationlike${idx}: deleteLike(input: {id: "${like.id}"}) { id }`;
          }
        );

        if (likeMutations.length > 0) {
          API.graphql(
            graphqlOperation(`
            mutation deleteRecipeLikes {
              ${likeMutations}
            }
          `)
          );
        }

        return `mutationrecipe${index}: deleteRecipe(input: {id: "${recipe.id}"}) { id }`;
      }
    );

    if (recipeMutations.length > 0) {
      API.graphql(
        graphqlOperation(`
        mutation deleteUserRecipes {
          ${recipeMutations}
        }
      `)
      );
    }

    // delete user messages
    const messageMutations: any = user.messages?.items.map(
      (message: Message, index: number) => {
        return `mutationmessage${index}: deleteMessage(input: {id: "${message.id}"}) { id }`;
      }
    );

    if (messageMutations.length > 0) {
      API.graphql(
        graphqlOperation(`
        mutation deleteUserMessages {
          ${messageMutations}
        }
      `)
      );
    }

    // delete recipe reports
    const reportMutations: any = user.recipes?.items.map(
      (recipe: Recipe, index: number) => {
        return `mutationreport${index}: deleteReport(input: {id: "${recipe.id}"}) { id }`;
      }
    );

    if (reportMutations.length > 0) {
      API.graphql(
        graphqlOperation(`
        mutation deleteRecipeReports {
          ${reportMutations}
        }
      `)
      );
    }

    await API.graphql(graphqlOperation(deleteUser, { input: { id: userID } }));

    return true;
  } catch (err) {
    catchError(err);
    return false;
  }
};

export const updateUserStatus = async (data: {
  userID: string;
  isActive: number;
}) => {
  const { userID, isActive } = data;

  try {
    const user = {
      id: userID,
      isActive,
    };
    await API.graphql(graphqlOperation(updateUser, { input: user }));
    return true;
  } catch (err) {
    catchError(err);
    return false;
  }
};

export const sendMessage = async (data: {
  userID: string;
  recipeID: string;
  message: string;
}) => {
  try {
    await API.graphql(
      graphqlOperation(createMessage, { input: { ...data, isRead: 0 } })
    );
    return true;
  } catch (err) {
    catchError(err);
    return false;
  }
};

export const deleteMessageApi = async (id: string) => {
  try {
    await API.graphql(graphqlOperation(deleteMessage, { input: { id } }));
    return true;
  } catch (err) {
    catchError(err);
    return false;
  }
};

type getUsersProps = {
  id?: string;
  nextToken: string | null;
  username: string;
  showBanned: boolean;
};

export const getUsers = async (prop: getUsersProps) => {
  try {
    const { nextToken, username, showBanned } = prop;

    const filterObj: any = {};
    if (username) filterObj["id"] = { contains: username.trim() };
    else filterObj["id"] = { contains: "" };

    const res: any = await API.graphql(
      graphqlOperation(usersByActive, {
        isActive: showBanned ? 0 : 1,
        filter: filterObj,
        limit: 10,
        // sortDirection: "DESC", // not supported if not defined
        nextToken,
      })
    );
    const users = res?.data?.usersByActive;
    return users;
  } catch (err) {
    catchError(err);
    return false;
  }
};

export const register = async (data: {
  email: string;
  username: string;
  password: string;
}) => {
  const { email, username, password } = data;
  try {
    const getUserResponse: any = await API.graphql(
      graphqlOperation(getUser, { id: username })
    );

    if (getUserResponse?.data?.getUser) {
      catchError({ message: "Username is already taken" });
      return false;
    }

    const signUpResponse = await Auth.signUp({
      username: email,
      password,
      attributes: {
        "custom:username": username,
      },
    });

    const user = {
      id: username,
      sub: signUpResponse.userSub,
      email,
      isActive: 1,
      isAdmin: 0,
    };

    await API.graphql(graphqlOperation(createUser, { input: user }));

    return true;
  } catch (err) {
    catchError(err);
    return false;
  }
};

export const me = async () => {
  try {
    const session = await Auth.currentSession();
    const accessToken = session.getAccessToken().getJwtToken();
    const refreshToken = session.getRefreshToken().getToken();
    const idToken = session.getIdToken().getJwtToken();

    localStorage.setItem("idToken", idToken);
    localStorage.setItem("token", accessToken);
    localStorage.setItem("refresh", refreshToken);

    const currentUser: any = jwt_decode(idToken);
    const cognitoUsername = currentUser["cognito:username"];
    const id = currentUser["custom:username"] || cognitoUsername;

    const getUserResponse: any = await API.graphql(
      graphqlOperation(getUser, { id })
    );

    const externalProvider =
      currentUser.identities && currentUser.identities.length > 0;

    const user: User = getUserResponse?.data?.getUser;

    if (user) return { ...user, externalProvider };
    else
      return {
        id: "not_found",
        sub: "",
        email: "",
      };
  } catch (err) {
    console.log("current user error:", err);
    return false;
  }
};

export const logout = async () => {
  try {
    await Auth.signOut();
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    localStorage.removeItem("idToken");
    return true;
  } catch (err) {
    catchError(err);
    return false;
  }
};
// #endregion

// #region [Response]
type getRecipesProps = {
  id?: string;
  nextToken: string | null;
};

export const getRecipes = async ({ nextToken }: getRecipesProps) => {
  try {
    const res: any = await API.graphql(
      graphqlOperation(recipesByDate, {
        filter: { isArchived: { eq: 0 } },
        typename: "Recipe",
        limit: 6,
        sortDirection: "DESC",
        nextToken,
      })
    );
    const recipes = res?.data?.recipesByDate;
    return recipes;
  } catch (err) {
    catchError(err);
    return false;
  }
};

export const getUserRecipes = async ({ id, nextToken }: getRecipesProps) => {
  try {
    const res: any = await API.graphql(
      graphqlOperation(recipesByUser, {
        userID: id,
        limit: 6,
        nextToken,
        sortDirection: "DESC",
      })
    );
    const recipes = res?.data?.recipesByUser;
    return recipes;
  } catch (err) {
    catchError(err);
    return false;
  }
};

export const getRecentRecipes = async () => {
  try {
    const res: any = await API.graphql(
      graphqlOperation(recipesByDate, {
        filter: { isArchived: { eq: 0 } },
        typename: "Recipe",
        limit: 3,
        sortDirection: "DESC",
      })
    );
    const recipes = res?.data?.recipesByDate.items;
    return recipes;
  } catch (err) {
    catchError(err);
    return false;
  }
};

export const getUserPopularRecipes = async (id: string) => {
  try {
    const res: any = await API.graphql(
      graphqlOperation(recipesByUser, {
        userID: id,
        limit: 6,
      })
    );
    const recipes: any = res?.data?.recipesByUser.items;
    const x = recipes.map((recipe: Recipe) => recipe.likes?.items);
    return recipes.sort(
      (a: any, b: any) => b.likes.items.length - a.likes.items.length
    );
  } catch (err) {
    console.log("recipes by user  err:", err);
    catchError(err);
    return false;
  }
};

type SearchProp = {
  recipeName: string;
  cuisine?: string;
  prepTime?: number;
  categoryID?: string;
};

export const searchRecipes = async (prop: SearchProp) => {
  const { recipeName, cuisine, prepTime, categoryID } = prop;

  try {
    const filterObj: any = {};
    if (recipeName) {
      filterObj["id"] = {
        contains: recipeName.toLowerCase().replace(" ", "-"),
      };
    } else {
      filterObj["id"] = { contains: "" };
    }

    if (cuisine) filterObj["cuisine"] = { contains: cuisine };
    if (prepTime) filterObj["prepTime"] = { eq: prepTime };
    if (categoryID) filterObj["categoryID"] = { contains: categoryID };

    const res: any = await API.graphql(
      graphqlOperation(listRecipes, {
        filter: filterObj,
      })
    );
    const recipes = res?.data?.listRecipes.items;
    return recipes;
  } catch (err) {
    catchError(err);
    return false;
  }
};

export const changeRecipeStatus = async (data: {
  recipeID: string;
  isArchived: number;
}) => {
  const { recipeID, isArchived } = data;

  try {
    const recipe = {
      id: recipeID,
      isArchived,
    };
    await API.graphql(graphqlOperation(updateRecipe, { input: recipe }));
    return true;
  } catch (err) {
    catchError(err);
    return false;
  }
};

export const getRecipeApi = async (id: string) => {
  try {
    const res: any = await API.graphql(graphqlOperation(getRecipe, { id }));
    const recipe: Recipe = res?.data?.getRecipe;
    return recipe;
  } catch (err) {
    catchError(err);
    return false;
  }
};

export const createRecipeApi = async (input: Recipe) => {
  try {
    await API.graphql(graphqlOperation(createRecipe, { input }));
    return true;
  } catch (err) {
    console.log("create recipe error:", err);
    catchError(err);
    return false;
  }
};

export const updateRecipeApi = async (input: Recipe) => {
  try {
    await API.graphql(graphqlOperation(updateRecipe, { input }));
    return true;
  } catch (err) {
    catchError(err);
    return false;
  }
};

export const deleteRecipeApi = async (id: string) => {
  try {
    await API.graphql(graphqlOperation(deleteRecipe, { input: { id } }));
    return true;
  } catch (err) {
    catchError(err);
    return false;
  }
};

export const reportRecipeApi = async (data: {
  userID: string;
  ownerID: string;
  recipeID: string;
}) => {
  try {
    const { recipeID, userID, ownerID } = data;
    const res: any = await API.graphql(
      graphqlOperation(getReport, { id: recipeID })
    );
    const report: Report = res?.data?.getReport;
    const createdAt = new Date().toISOString();

    if (report) {
      const input: Report = {
        id: recipeID,
        userID: ownerID,
        reportedUsers: [...report.reportedUsers, { userID, createdAt }],
        count: report.count + 1,
      };

      await API.graphql(graphqlOperation(updateReport, { input }));
    } else {
      const input: Report = {
        id: recipeID,
        userID: ownerID,
        reportedUsers: [{ userID, createdAt }],
        count: 1,
        typename: "Report",
      };

      await API.graphql(graphqlOperation(createReport, { input }));
    }
    return true;
  } catch (err) {
    catchError(err);
    return false;
  }
};

type getReportsProps = {
  id?: string;
  nextToken: string | null;
  filterProp?: {
    recipeName: string;
    username: string;
  };
};

export const getReports = async (prop: getReportsProps) => {
  try {
    const { nextToken, filterProp } = prop;
    const recipeName = filterProp?.recipeName;
    const username = filterProp?.username;

    const filterObj: any = {};
    if (recipeName) {
      filterObj["id"] = {
        contains: recipeName.toLowerCase().replace(" ", "-"),
      };
    } else {
      filterObj["id"] = { contains: "" };
    }

    if (username) filterObj["userID"] = { contains: username };

    const res: any = await API.graphql(
      graphqlOperation(reportsByCount, {
        filter: filterObj,
        typename: "Report",
        limit: 10,
        sortDirection: "DESC",
        nextToken,
      })
    );
    const reports = res?.data?.reportsByCount;
    return reports;
  } catch (err) {
    catchError(err);
    return false;
  }
};

export const deleteReportApi = async (id: string) => {
  try {
    await API.graphql(graphqlOperation(deleteReport, { input: { id } }));
    return true;
  } catch (err) {
    catchError(err);
    return false;
  }
};

// #endregion

// #region [Response]
export const getCategories = async () => {
  try {
    const res: any = await API.graphql(graphqlOperation(listCategorys));
    const categories: Category[] = res?.data?.listCategorys.items;
    return categories;
  } catch (err) {
    catchError(err);
    return false;
  }
};

export const getPopularCategories = async () => {
  try {
    const res: any = await API.graphql(graphqlOperation(listCategorys));
    const categories: Category[] = res?.data?.listCategorys.items;
    return categories.sort((a: Category, b: Category) => {
      const recipesA = a.recipes?.items;
      const recipesB = b.recipes?.items;

      const totalA =
        recipesA?.reduce((accumulator: number, currentValue: Recipe) => {
          const likes = currentValue.likes?.items || [];
          return accumulator + likes.length;
        }, 0) || 0;

      const totalB =
        recipesB?.reduce((accumulator: number, currentValue: Recipe) => {
          const likes = currentValue.likes?.items || [];
          return accumulator + likes.length;
        }, 0) || 0;

      return totalB - totalA;
    });
  } catch (err) {
    catchError(err);
    return false;
  }
};

// #endregion

// #region [Response]
export const getUserApi = async (id: string) => {
  try {
    const res: any = await API.graphql(graphqlOperation(getUser, { id }));
    const user: User = res?.data?.getUser;
    return user;
  } catch (err) {
    catchError(err);
    return false;
  }
};
// #endregion

// #region [Response]
export const createCommentApi = async (input: Comment) => {
  try {
    await API.graphql(graphqlOperation(createComment, { input }));
    return true;
  } catch (err) {
    catchError(err);
    return false;
  }
};

export const deleteCommentApi = async (id: string) => {
  try {
    await API.graphql(graphqlOperation(deleteComment, { input: { id } }));
    return true;
  } catch (err) {
    catchError(err);
    return false;
  }
};

// #endregion

// #region [Response]
type getDonationsProps = {
  nextToken: string | null;
};

export const getDonations = async (prop: getDonationsProps) => {
  try {
    const { nextToken } = prop;

    const res: any = await API.graphql(
      graphqlOperation(donationsByDate, {
        typename: "Donation",
        limit: 10,
        sortDirection: "DESC",
        nextToken,
      })
    );
    const donations = res?.data?.donationsByDate;
    return donations;
  } catch (err) {
    catchError(err);
    return false;
  }
};

export const listDonationsApi = async () => {
  try {
    const res: any = await API.graphql(
      graphqlOperation(donationsByDate, {
        typename: "Donation",
        sortDirection: "DESC",
      })
    );
    const donations = res?.data?.donationsByDate.items;
    return donations;
  } catch (err) {
    catchError(err);
    return false;
  }
};

export const deleteDonationApi = async (id: string) => {
  try {
    await API.graphql(graphqlOperation(deleteDonation, { input: { id } }));
    return true;
  } catch (err) {
    catchError(err);
    return false;
  }
};

export const createDonationApi = async (input: Donation) => {
  try {
    await API.graphql(graphqlOperation(createDonation, { input }));
    return true;
  } catch (err) {
    console.log("create donation error:", err);
    catchError(err);
    return false;
  }
};

export const updateDonationApi = async (input: Donation) => {
  try {
    await API.graphql(graphqlOperation(updateDonation, { input }));
    return true;
  } catch (err) {
    catchError(err);
    return false;
  }
};

export const getDonationApi = async (id: string) => {
  try {
    const res: any = await API.graphql(graphqlOperation(getDonation, { id }));
    const donation: Donation = res?.data?.getDonation;
    return donation;
  } catch (err) {
    catchError(err);
    return false;
  }
};

// #endregion
