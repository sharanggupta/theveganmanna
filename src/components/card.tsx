import React, { useState, useEffect } from "react";
import { useRequest } from "ahooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { Image, Button, Modal, message, Spin } from "antd";
import {
  ReadOutlined,
  ClockCircleOutlined,
  UserOutlined,
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Recipe, Ingredient, Comment, Like, User } from "interfaces";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { createLike, deleteLike } from "graphql/mutations";
import { useUser } from "contexts";
import { deleteRecipeApi, me, reportRecipeApi } from "api";

type Props = {
  recipe: Recipe;
  full?: boolean;
  refresh?: () => void;
};

const card: React.FC<Props> = ({ recipe, full, refresh }) => {
  const [like, setLike] = useState<any>(null);
  const [signedUrls, setSignedUrls] = useState<string[]>([]);
  const [videoUrl, setVideoUrl] = useState<any>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isReportModalVisible, setIsReportModalVisible] = useState(false);
  const [user, dispatchUser] = useUser();

  const deleteAction = useRequest(deleteRecipeApi, {
    manual: true,
    onSuccess: () => {
      deleteCommentsAndLikes();
      message.success("Recipe deleted");
      router.push("/account/recipes");
    },
    onError: () => {
      message.error("Recipe not deleted");
    },
  });

  const reportAction = useRequest(reportRecipeApi, {
    manual: true,
    onSuccess: () => {
      message.success("Recipe reported, Thank your for your contribution");
    },
    onError: () => {
      message.error("Recipe not reported");
    },
  });

  const router = useRouter();

  const updateUser = async () => {
    dispatchUser({ type: "UPDATE", user: (await me()) as User });
  };

  const likeAction = async () => {
    setLike({ action: "loading" });

    const input = {
      userID: user.id,
      recipeID: recipe.id,
    };

    const element: any = document.getElementById(recipe.id);
    const value = parseInt(element.innerText);

    if (!value) {
      element.innerText = "1";
    } else {
      // ++value
      element.innerText = value + 1;
    }

    const res: any = await API.graphql(graphqlOperation(createLike, { input }));
    const createLikeResponse = res.data.createLike;

    setLike(createLikeResponse);

    message.success("Added to your Liked Recipes");

    updateUser();
  };

  const unlikeAction = async () => {
    const likeObj =
      recipe.likes?.items.find((like: Like) => like.userID === user.id) || like;

    if (!likeObj) return;

    setLike(null);

    const element: any = document.getElementById(recipe.id);
    const value = parseInt(element.innerText);

    if (value === 1) {
      element.innerText = "";
    } else {
      // --value
      element.innerText = value - 1;
    }

    const input = {
      id: likeObj.id,
    };

    await API.graphql(graphqlOperation(deleteLike, { input }));
    message.success("Removed from your Liked Recipes");

    updateUser();

    if (refresh) refresh();
  };

  const deleteCommentsAndLikes = async () => {
    const comments = recipe.comments?.items;
    const likes = recipe.likes?.items;

    if (comments?.length === 0) return;

    const commentMutations: any = comments?.map(
      (comment: Comment, i: number) => {
        return `mutation${i}: deleteComment(input: {id: "${comment.id}"}) { id }`;
      }
    );

    await API.graphql(
      graphqlOperation(`
      mutation deleteRecipeComments {
        ${commentMutations}
      }
    `)
    );

    if (likes?.length === 0) return;

    const likeMutations: any = likes?.map((like: Like, i: number) => {
      return `mutation${i}: deleteLike(input: {id: "${like.id}"}) { id }`;
    });

    await API.graphql(
      graphqlOperation(`
      mutation deleteRecipeLikes {
        ${likeMutations}
      }
    `)
    );
  };

  async function asyncForEach(array: any, callback: any) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  const fetchData = async () => {
    if (recipe?.video) {
      const url: any = await Storage.get(recipe.video);
      setVideoUrl(url);
    }

    const urls: string[] = [];
    await asyncForEach(recipe?.images, async (imgKey: string) => {
      const url: any = await Storage.get(imgKey);
      urls.push(url);
    });
    setSignedUrls(urls);

    const isLiked = user.likes?.items.find(
      (like: Like) => like.recipeID === recipe.id
    );

    const likeObj = recipe.likes?.items.find(
      (like: Like) => isLiked && like.userID === user.id
    );

    if (!!likeObj) {
      setLike(likeObj);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={`ft-recipe ${!full && "animated"}`}>
      <div className="ft-recipe__calories">
        <p>{parseFloat(recipe.calories).toFixed(2)}</p>
        <p>CALORIES</p>
      </div>
      <div className="ft-recipe__header" style={{ height: full ? 400 : 281 }}>
        {signedUrls && signedUrls.length > 0 ? (
          <Image.PreviewGroup>
            <Image
              src={signedUrls[0]}
              placeholder={
                <Image
                  preview={false}
                  src="/leaf_placeholder.png"
                  alt="Placeholder"
                />
              }
            />
            <div style={{ display: "none" }}>
              {signedUrls.slice(1).map((url: string) => (
                <Image src={url} alt="Recipe" />
              ))}
            </div>
          </Image.PreviewGroup>
        ) : videoUrl ? (
          <div style={{ height: "100%", textAlign: "center" }}>
            <video
              controls
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            >
              <source src={videoUrl} type="video/mp4" />
              <source src={videoUrl} type="video/webm" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        ) : (
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Spin size="large" />
          </div>
        )}
      </div>
      <div className="ft-recipe__content">
        <header className="content__header">
          <div className="row-wrapper">
            <h2 className="recipe-title">{recipe.recipeName}</h2>
            <div className="like">
              {recipe.likes?.items && (
                <p
                  id={recipe.id}
                  style={{
                    fontSize: "1.2rem",
                    marginBottom: 0,
                    marginRight: 5,
                    cursor: "default",
                  }}
                >
                  {recipe.likes?.items.length > 0 && recipe.likes?.items.length}
                </p>
              )}

              {user && user.sub !== "" ? (
                like ? (
                  <img
                    onClick={() => unlikeAction()}
                    style={{ width: 30, cursor: "pointer" }}
                    src="/liked.svg"
                  />
                ) : (
                  <img
                    onClick={() => likeAction()}
                    style={{ width: 30, cursor: "pointer" }}
                    src="/like.svg"
                  />
                )
              ) : (
                <img
                  onClick={() =>
                    message.error("Login or register to save recipe")
                  }
                  style={{ width: 30, cursor: "pointer" }}
                  src="/like.svg"
                />
              )}
            </div>
          </div>
          <ul className="recipe-details">
            <li className="recipe-details-item time">
              <ClockCircleOutlined />
              <span className="value">{recipe.prepTime}</span>
              <span className="title">Minutes</span>
            </li>
            <li className="recipe-details-item ingredients">
              <ReadOutlined />
              <span className="value">{recipe.ingredients.length}</span>
              <span className="title">Ingredients</span>
            </li>
            <li className="recipe-details-item servings">
              <UserOutlined />
              <span className="value">{recipe.serving}</span>
              <span className="title">Serving</span>
            </li>
          </ul>

          <p className="description">
            {recipe.description.length > 50
              ? recipe.description.substring(0, 50) + "..."
              : recipe.description}
          </p>
        </header>
        {!full && (
          <footer className="content__footer">
            {recipe.isArchived === 0 ? (
              <Link href={`/recipes/${recipe.id}`}>View Recipe</Link>
            ) : (
              <Link href={`/account/recipes/edit/${recipe.id}`}>
                <span>
                  <a>Update Recipe</a>
                  <span className="text-danger">
                    (recipe is archived, due to non-vegan ingredients)
                  </span>
                </span>
              </Link>
            )}
          </footer>
        )}
        {full && (
          <>
            <h2>Ingredients</h2>
            <ul className="ingredients">
              {recipe.ingredients.map((i: Ingredient) => (
                <li>
                  {i.count} {i.name}
                </li>
              ))}
            </ul>

            <h2>Instructions</h2>
            <div className="instructions">
              {recipe.instructions.map((instruction: string, i: number) => (
                <div className="instructions__step">
                  <span className="instructions__step__number">{i + 1}</span>
                  <span>{instruction}</span>
                </div>
              ))}
            </div>

            {user.id === recipe.userID && (
              <div className="actions">
                <Button
                  onClick={() =>
                    router.push(`/account/recipes/edit/${recipe.id}`)
                  }
                  icon={<EditOutlined />}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => setIsModalVisible(true)}
                  type="dashed"
                  icon={<DeleteOutlined />}
                >
                  Delete
                </Button>
              </div>
            )}

            <Button
              style={{ marginTop: 20, width: 140 }}
              onClick={() => {
                if (user.id === "guest") {
                  message.error("Login to report recipe");
                  return;
                }

                setIsReportModalVisible(true);
              }}
              icon={<ExclamationCircleOutlined />}
              type="primary"
              className="ant-btn__danger"
            >
              Report Recipe
            </Button>

            <Modal
              title="Delete Recipe"
              centered
              visible={isModalVisible}
              onOk={() => setIsModalVisible(false)}
              onCancel={() => setIsModalVisible(false)}
              footer={[
                <Button key="back" onClick={() => setIsModalVisible(false)}>
                  Cancel
                </Button>,
                <Button
                  key="submit"
                  type="primary"
                  className="ant-btn__danger"
                  loading={deleteAction.loading}
                  onClick={() => {
                    deleteAction.run(recipe.id);
                    setIsModalVisible(false);
                  }}
                >
                  OK
                </Button>,
              ]}
            >
              <p>
                Are you sure you want to delete{" "}
                {`"${recipe.recipeName}" recipe`}
              </p>
            </Modal>

            <Modal
              title="Report Recipe"
              centered
              visible={isReportModalVisible}
              onOk={() => setIsReportModalVisible(false)}
              onCancel={() => setIsReportModalVisible(false)}
              footer={[
                <Button
                  key="back"
                  onClick={() => setIsReportModalVisible(false)}
                >
                  Cancel
                </Button>,
                <Button
                  key="submit"
                  type="primary"
                  className="ant-btn__danger"
                  loading={reportAction.loading}
                  onClick={() => {
                    reportAction.run({
                      userID: user.id,
                      recipeID: recipe.id,
                      ownerID: recipe.userID,
                    });
                    setIsReportModalVisible(false);
                  }}
                >
                  OK
                </Button>,
              ]}
            >
              <p>
                Are you sure you want to report{" "}
                {`"${recipe.recipeName}" recipe`}
              </p>
            </Modal>
          </>
        )}
      </div>
    </div>
  );
};

export default card;
