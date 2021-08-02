/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      sub
      email
      image
      bio
      social {
        instagram
        twitter
        facebook
      }
      isAdmin
      isActive
      createdAt
      updatedAt
      owner
      recipes {
        items {
          id
          recipeName
          cuisine
          prepTime
          serving
          description
          images
          video
          ingredients {
            name
            count
          }
          instructions
          calories
          owner
          userID
          categoryID
          typename
          isArchived
          createdAt
          updatedAt
          user {
            id
            sub
            email
            image
            bio
            social {
              instagram
              twitter
              facebook
            }
            isAdmin
            isActive
            createdAt
            updatedAt
            owner
            recipes {
              items {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              nextToken
            }
            messages {
              items {
                id
                recipeID
                userID
                message
                isRead
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          category {
            id
            name
            createdAt
            updatedAt
            recipes {
              items {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              nextToken
            }
            owner
          }
          comments {
            items {
              id
              recipeID
              userID
              content
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
          likes {
            items {
              id
              recipeID
              userID
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
        }
        nextToken
      }
      messages {
        items {
          id
          recipeID
          userID
          message
          isRead
          createdAt
          updatedAt
          user {
            id
            sub
            email
            image
            bio
            social {
              instagram
              twitter
              facebook
            }
            isAdmin
            isActive
            createdAt
            updatedAt
            owner
            recipes {
              items {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              nextToken
            }
            messages {
              items {
                id
                recipeID
                userID
                message
                isRead
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          recipe {
            id
            recipeName
            cuisine
            prepTime
            serving
            description
            images
            video
            ingredients {
              name
              count
            }
            instructions
            calories
            owner
            userID
            categoryID
            typename
            isArchived
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            category {
              id
              name
              createdAt
              updatedAt
              recipes {
                nextToken
              }
              owner
            }
            comments {
              items {
                id
                recipeID
                userID
                content
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          recipeID
          userID
          createdAt
          updatedAt
          user {
            id
            sub
            email
            image
            bio
            social {
              instagram
              twitter
              facebook
            }
            isAdmin
            isActive
            createdAt
            updatedAt
            owner
            recipes {
              items {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              nextToken
            }
            messages {
              items {
                id
                recipeID
                userID
                message
                isRead
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          recipe {
            id
            recipeName
            cuisine
            prepTime
            serving
            description
            images
            video
            ingredients {
              name
              count
            }
            instructions
            calories
            owner
            userID
            categoryID
            typename
            isArchived
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            category {
              id
              name
              createdAt
              updatedAt
              recipes {
                nextToken
              }
              owner
            }
            comments {
              items {
                id
                recipeID
                userID
                content
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          owner
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sub
        email
        image
        bio
        social {
          instagram
          twitter
          facebook
        }
        isAdmin
        isActive
        createdAt
        updatedAt
        owner
        recipes {
          items {
            id
            recipeName
            cuisine
            prepTime
            serving
            description
            images
            video
            ingredients {
              name
              count
            }
            instructions
            calories
            owner
            userID
            categoryID
            typename
            isArchived
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            category {
              id
              name
              createdAt
              updatedAt
              recipes {
                nextToken
              }
              owner
            }
            comments {
              items {
                id
                recipeID
                userID
                content
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        messages {
          items {
            id
            recipeID
            userID
            message
            isRead
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            recipeID
            userID
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const usersByActive = /* GraphQL */ `
  query UsersByActive(
    $isActive: Int
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByActive(
      isActive: $isActive
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        email
        image
        bio
        social {
          instagram
          twitter
          facebook
        }
        isAdmin
        isActive
        createdAt
        updatedAt
        owner
        recipes {
          items {
            id
            recipeName
            cuisine
            prepTime
            serving
            description
            images
            video
            ingredients {
              name
              count
            }
            instructions
            calories
            owner
            userID
            categoryID
            typename
            isArchived
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            category {
              id
              name
              createdAt
              updatedAt
              recipes {
                nextToken
              }
              owner
            }
            comments {
              items {
                id
                recipeID
                userID
                content
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        messages {
          items {
            id
            recipeID
            userID
            message
            isRead
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            recipeID
            userID
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const usersByAdmin = /* GraphQL */ `
  query UsersByAdmin(
    $isAdmin: Int
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByAdmin(
      isAdmin: $isAdmin
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        email
        image
        bio
        social {
          instagram
          twitter
          facebook
        }
        isAdmin
        isActive
        createdAt
        updatedAt
        owner
        recipes {
          items {
            id
            recipeName
            cuisine
            prepTime
            serving
            description
            images
            video
            ingredients {
              name
              count
            }
            instructions
            calories
            owner
            userID
            categoryID
            typename
            isArchived
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            category {
              id
              name
              createdAt
              updatedAt
              recipes {
                nextToken
              }
              owner
            }
            comments {
              items {
                id
                recipeID
                userID
                content
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        messages {
          items {
            id
            recipeID
            userID
            message
            isRead
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            recipeID
            userID
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      recipeName
      cuisine
      prepTime
      serving
      description
      images
      video
      ingredients {
        name
        count
      }
      instructions
      calories
      owner
      userID
      categoryID
      typename
      isArchived
      createdAt
      updatedAt
      user {
        id
        sub
        email
        image
        bio
        social {
          instagram
          twitter
          facebook
        }
        isAdmin
        isActive
        createdAt
        updatedAt
        owner
        recipes {
          items {
            id
            recipeName
            cuisine
            prepTime
            serving
            description
            images
            video
            ingredients {
              name
              count
            }
            instructions
            calories
            owner
            userID
            categoryID
            typename
            isArchived
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            category {
              id
              name
              createdAt
              updatedAt
              recipes {
                nextToken
              }
              owner
            }
            comments {
              items {
                id
                recipeID
                userID
                content
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        messages {
          items {
            id
            recipeID
            userID
            message
            isRead
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            recipeID
            userID
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      category {
        id
        name
        createdAt
        updatedAt
        recipes {
          items {
            id
            recipeName
            cuisine
            prepTime
            serving
            description
            images
            video
            ingredients {
              name
              count
            }
            instructions
            calories
            owner
            userID
            categoryID
            typename
            isArchived
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            category {
              id
              name
              createdAt
              updatedAt
              recipes {
                nextToken
              }
              owner
            }
            comments {
              items {
                id
                recipeID
                userID
                content
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        owner
      }
      comments {
        items {
          id
          recipeID
          userID
          content
          createdAt
          updatedAt
          user {
            id
            sub
            email
            image
            bio
            social {
              instagram
              twitter
              facebook
            }
            isAdmin
            isActive
            createdAt
            updatedAt
            owner
            recipes {
              items {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              nextToken
            }
            messages {
              items {
                id
                recipeID
                userID
                message
                isRead
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          recipe {
            id
            recipeName
            cuisine
            prepTime
            serving
            description
            images
            video
            ingredients {
              name
              count
            }
            instructions
            calories
            owner
            userID
            categoryID
            typename
            isArchived
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            category {
              id
              name
              createdAt
              updatedAt
              recipes {
                nextToken
              }
              owner
            }
            comments {
              items {
                id
                recipeID
                userID
                content
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          recipeID
          userID
          createdAt
          updatedAt
          user {
            id
            sub
            email
            image
            bio
            social {
              instagram
              twitter
              facebook
            }
            isAdmin
            isActive
            createdAt
            updatedAt
            owner
            recipes {
              items {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              nextToken
            }
            messages {
              items {
                id
                recipeID
                userID
                message
                isRead
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          recipe {
            id
            recipeName
            cuisine
            prepTime
            serving
            description
            images
            video
            ingredients {
              name
              count
            }
            instructions
            calories
            owner
            userID
            categoryID
            typename
            isArchived
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            category {
              id
              name
              createdAt
              updatedAt
              recipes {
                nextToken
              }
              owner
            }
            comments {
              items {
                id
                recipeID
                userID
                content
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          owner
        }
        nextToken
      }
    }
  }
`;
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        recipeName
        cuisine
        prepTime
        serving
        description
        images
        video
        ingredients {
          name
          count
        }
        instructions
        calories
        owner
        userID
        categoryID
        typename
        isArchived
        createdAt
        updatedAt
        user {
          id
          sub
          email
          image
          bio
          social {
            instagram
            twitter
            facebook
          }
          isAdmin
          isActive
          createdAt
          updatedAt
          owner
          recipes {
            items {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            nextToken
          }
          messages {
            items {
              id
              recipeID
              userID
              message
              isRead
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
          likes {
            items {
              id
              recipeID
              userID
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
        }
        category {
          id
          name
          createdAt
          updatedAt
          recipes {
            items {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            nextToken
          }
          owner
        }
        comments {
          items {
            id
            recipeID
            userID
            content
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            recipeID
            userID
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const recipesByUser = /* GraphQL */ `
  query RecipesByUser(
    $userID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    recipesByUser(
      userID: $userID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        recipeName
        cuisine
        prepTime
        serving
        description
        images
        video
        ingredients {
          name
          count
        }
        instructions
        calories
        owner
        userID
        categoryID
        typename
        isArchived
        createdAt
        updatedAt
        user {
          id
          sub
          email
          image
          bio
          social {
            instagram
            twitter
            facebook
          }
          isAdmin
          isActive
          createdAt
          updatedAt
          owner
          recipes {
            items {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            nextToken
          }
          messages {
            items {
              id
              recipeID
              userID
              message
              isRead
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
          likes {
            items {
              id
              recipeID
              userID
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
        }
        category {
          id
          name
          createdAt
          updatedAt
          recipes {
            items {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            nextToken
          }
          owner
        }
        comments {
          items {
            id
            recipeID
            userID
            content
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            recipeID
            userID
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const recipesByCategory = /* GraphQL */ `
  query RecipesByCategory(
    $categoryID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    recipesByCategory(
      categoryID: $categoryID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        recipeName
        cuisine
        prepTime
        serving
        description
        images
        video
        ingredients {
          name
          count
        }
        instructions
        calories
        owner
        userID
        categoryID
        typename
        isArchived
        createdAt
        updatedAt
        user {
          id
          sub
          email
          image
          bio
          social {
            instagram
            twitter
            facebook
          }
          isAdmin
          isActive
          createdAt
          updatedAt
          owner
          recipes {
            items {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            nextToken
          }
          messages {
            items {
              id
              recipeID
              userID
              message
              isRead
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
          likes {
            items {
              id
              recipeID
              userID
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
        }
        category {
          id
          name
          createdAt
          updatedAt
          recipes {
            items {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            nextToken
          }
          owner
        }
        comments {
          items {
            id
            recipeID
            userID
            content
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            recipeID
            userID
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const recipesByDate = /* GraphQL */ `
  query RecipesByDate(
    $typename: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    recipesByDate(
      typename: $typename
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        recipeName
        cuisine
        prepTime
        serving
        description
        images
        video
        ingredients {
          name
          count
        }
        instructions
        calories
        owner
        userID
        categoryID
        typename
        isArchived
        createdAt
        updatedAt
        user {
          id
          sub
          email
          image
          bio
          social {
            instagram
            twitter
            facebook
          }
          isAdmin
          isActive
          createdAt
          updatedAt
          owner
          recipes {
            items {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            nextToken
          }
          messages {
            items {
              id
              recipeID
              userID
              message
              isRead
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
          likes {
            items {
              id
              recipeID
              userID
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
        }
        category {
          id
          name
          createdAt
          updatedAt
          recipes {
            items {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            nextToken
          }
          owner
        }
        comments {
          items {
            id
            recipeID
            userID
            content
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            recipeID
            userID
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getReport = /* GraphQL */ `
  query GetReport($id: ID!) {
    getReport(id: $id) {
      id
      userID
      reportedUsers {
        userID
        createdAt
      }
      count
      typename
      createdAt
      updatedAt
      recipe {
        id
        recipeName
        cuisine
        prepTime
        serving
        description
        images
        video
        ingredients {
          name
          count
        }
        instructions
        calories
        owner
        userID
        categoryID
        typename
        isArchived
        createdAt
        updatedAt
        user {
          id
          sub
          email
          image
          bio
          social {
            instagram
            twitter
            facebook
          }
          isAdmin
          isActive
          createdAt
          updatedAt
          owner
          recipes {
            items {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            nextToken
          }
          messages {
            items {
              id
              recipeID
              userID
              message
              isRead
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
          likes {
            items {
              id
              recipeID
              userID
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
        }
        category {
          id
          name
          createdAt
          updatedAt
          recipes {
            items {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            nextToken
          }
          owner
        }
        comments {
          items {
            id
            recipeID
            userID
            content
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            recipeID
            userID
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const listReports = /* GraphQL */ `
  query ListReports(
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        reportedUsers {
          userID
          createdAt
        }
        count
        typename
        createdAt
        updatedAt
        recipe {
          id
          recipeName
          cuisine
          prepTime
          serving
          description
          images
          video
          ingredients {
            name
            count
          }
          instructions
          calories
          owner
          userID
          categoryID
          typename
          isArchived
          createdAt
          updatedAt
          user {
            id
            sub
            email
            image
            bio
            social {
              instagram
              twitter
              facebook
            }
            isAdmin
            isActive
            createdAt
            updatedAt
            owner
            recipes {
              items {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              nextToken
            }
            messages {
              items {
                id
                recipeID
                userID
                message
                isRead
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          category {
            id
            name
            createdAt
            updatedAt
            recipes {
              items {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              nextToken
            }
            owner
          }
          comments {
            items {
              id
              recipeID
              userID
              content
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
          likes {
            items {
              id
              recipeID
              userID
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
        }
        owner
      }
      nextToken
    }
  }
`;
export const reportsByCount = /* GraphQL */ `
  query ReportsByCount(
    $typename: String
    $count: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reportsByCount(
      typename: $typename
      count: $count
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        reportedUsers {
          userID
          createdAt
        }
        count
        typename
        createdAt
        updatedAt
        recipe {
          id
          recipeName
          cuisine
          prepTime
          serving
          description
          images
          video
          ingredients {
            name
            count
          }
          instructions
          calories
          owner
          userID
          categoryID
          typename
          isArchived
          createdAt
          updatedAt
          user {
            id
            sub
            email
            image
            bio
            social {
              instagram
              twitter
              facebook
            }
            isAdmin
            isActive
            createdAt
            updatedAt
            owner
            recipes {
              items {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              nextToken
            }
            messages {
              items {
                id
                recipeID
                userID
                message
                isRead
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          category {
            id
            name
            createdAt
            updatedAt
            recipes {
              items {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              nextToken
            }
            owner
          }
          comments {
            items {
              id
              recipeID
              userID
              content
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
          likes {
            items {
              id
              recipeID
              userID
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
        }
        owner
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      recipeID
      userID
      message
      isRead
      createdAt
      updatedAt
      user {
        id
        sub
        email
        image
        bio
        social {
          instagram
          twitter
          facebook
        }
        isAdmin
        isActive
        createdAt
        updatedAt
        owner
        recipes {
          items {
            id
            recipeName
            cuisine
            prepTime
            serving
            description
            images
            video
            ingredients {
              name
              count
            }
            instructions
            calories
            owner
            userID
            categoryID
            typename
            isArchived
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            category {
              id
              name
              createdAt
              updatedAt
              recipes {
                nextToken
              }
              owner
            }
            comments {
              items {
                id
                recipeID
                userID
                content
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        messages {
          items {
            id
            recipeID
            userID
            message
            isRead
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            recipeID
            userID
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      recipe {
        id
        recipeName
        cuisine
        prepTime
        serving
        description
        images
        video
        ingredients {
          name
          count
        }
        instructions
        calories
        owner
        userID
        categoryID
        typename
        isArchived
        createdAt
        updatedAt
        user {
          id
          sub
          email
          image
          bio
          social {
            instagram
            twitter
            facebook
          }
          isAdmin
          isActive
          createdAt
          updatedAt
          owner
          recipes {
            items {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            nextToken
          }
          messages {
            items {
              id
              recipeID
              userID
              message
              isRead
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
          likes {
            items {
              id
              recipeID
              userID
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
        }
        category {
          id
          name
          createdAt
          updatedAt
          recipes {
            items {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            nextToken
          }
          owner
        }
        comments {
          items {
            id
            recipeID
            userID
            content
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            recipeID
            userID
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        recipeID
        userID
        message
        isRead
        createdAt
        updatedAt
        user {
          id
          sub
          email
          image
          bio
          social {
            instagram
            twitter
            facebook
          }
          isAdmin
          isActive
          createdAt
          updatedAt
          owner
          recipes {
            items {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            nextToken
          }
          messages {
            items {
              id
              recipeID
              userID
              message
              isRead
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
          likes {
            items {
              id
              recipeID
              userID
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
        }
        recipe {
          id
          recipeName
          cuisine
          prepTime
          serving
          description
          images
          video
          ingredients {
            name
            count
          }
          instructions
          calories
          owner
          userID
          categoryID
          typename
          isArchived
          createdAt
          updatedAt
          user {
            id
            sub
            email
            image
            bio
            social {
              instagram
              twitter
              facebook
            }
            isAdmin
            isActive
            createdAt
            updatedAt
            owner
            recipes {
              items {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              nextToken
            }
            messages {
              items {
                id
                recipeID
                userID
                message
                isRead
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          category {
            id
            name
            createdAt
            updatedAt
            recipes {
              items {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              nextToken
            }
            owner
          }
          comments {
            items {
              id
              recipeID
              userID
              content
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
          likes {
            items {
              id
              recipeID
              userID
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
        }
        owner
      }
      nextToken
    }
  }
`;
export const messagesByDate = /* GraphQL */ `
  query MessagesByDate(
    $recipeID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByDate(
      recipeID: $recipeID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        recipeID
        userID
        message
        isRead
        createdAt
        updatedAt
        user {
          id
          sub
          email
          image
          bio
          social {
            instagram
            twitter
            facebook
          }
          isAdmin
          isActive
          createdAt
          updatedAt
          owner
          recipes {
            items {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            nextToken
          }
          messages {
            items {
              id
              recipeID
              userID
              message
              isRead
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
          likes {
            items {
              id
              recipeID
              userID
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
        }
        recipe {
          id
          recipeName
          cuisine
          prepTime
          serving
          description
          images
          video
          ingredients {
            name
            count
          }
          instructions
          calories
          owner
          userID
          categoryID
          typename
          isArchived
          createdAt
          updatedAt
          user {
            id
            sub
            email
            image
            bio
            social {
              instagram
              twitter
              facebook
            }
            isAdmin
            isActive
            createdAt
            updatedAt
            owner
            recipes {
              items {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              nextToken
            }
            messages {
              items {
                id
                recipeID
                userID
                message
                isRead
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          category {
            id
            name
            createdAt
            updatedAt
            recipes {
              items {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              nextToken
            }
            owner
          }
          comments {
            items {
              id
              recipeID
              userID
              content
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
          likes {
            items {
              id
              recipeID
              userID
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
        }
        owner
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      createdAt
      updatedAt
      recipes {
        items {
          id
          recipeName
          cuisine
          prepTime
          serving
          description
          images
          video
          ingredients {
            name
            count
          }
          instructions
          calories
          owner
          userID
          categoryID
          typename
          isArchived
          createdAt
          updatedAt
          user {
            id
            sub
            email
            image
            bio
            social {
              instagram
              twitter
              facebook
            }
            isAdmin
            isActive
            createdAt
            updatedAt
            owner
            recipes {
              items {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              nextToken
            }
            messages {
              items {
                id
                recipeID
                userID
                message
                isRead
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          category {
            id
            name
            createdAt
            updatedAt
            recipes {
              items {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              nextToken
            }
            owner
          }
          comments {
            items {
              id
              recipeID
              userID
              content
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
          likes {
            items {
              id
              recipeID
              userID
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
        }
        nextToken
      }
      owner
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        recipes {
          items {
            id
            recipeName
            cuisine
            prepTime
            serving
            description
            images
            video
            ingredients {
              name
              count
            }
            instructions
            calories
            owner
            userID
            categoryID
            typename
            isArchived
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            category {
              id
              name
              createdAt
              updatedAt
              recipes {
                nextToken
              }
              owner
            }
            comments {
              items {
                id
                recipeID
                userID
                content
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      recipeID
      userID
      content
      createdAt
      updatedAt
      user {
        id
        sub
        email
        image
        bio
        social {
          instagram
          twitter
          facebook
        }
        isAdmin
        isActive
        createdAt
        updatedAt
        owner
        recipes {
          items {
            id
            recipeName
            cuisine
            prepTime
            serving
            description
            images
            video
            ingredients {
              name
              count
            }
            instructions
            calories
            owner
            userID
            categoryID
            typename
            isArchived
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            category {
              id
              name
              createdAt
              updatedAt
              recipes {
                nextToken
              }
              owner
            }
            comments {
              items {
                id
                recipeID
                userID
                content
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        messages {
          items {
            id
            recipeID
            userID
            message
            isRead
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            recipeID
            userID
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      recipe {
        id
        recipeName
        cuisine
        prepTime
        serving
        description
        images
        video
        ingredients {
          name
          count
        }
        instructions
        calories
        owner
        userID
        categoryID
        typename
        isArchived
        createdAt
        updatedAt
        user {
          id
          sub
          email
          image
          bio
          social {
            instagram
            twitter
            facebook
          }
          isAdmin
          isActive
          createdAt
          updatedAt
          owner
          recipes {
            items {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            nextToken
          }
          messages {
            items {
              id
              recipeID
              userID
              message
              isRead
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
          likes {
            items {
              id
              recipeID
              userID
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
        }
        category {
          id
          name
          createdAt
          updatedAt
          recipes {
            items {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            nextToken
          }
          owner
        }
        comments {
          items {
            id
            recipeID
            userID
            content
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            recipeID
            userID
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        recipeID
        userID
        content
        createdAt
        updatedAt
        user {
          id
          sub
          email
          image
          bio
          social {
            instagram
            twitter
            facebook
          }
          isAdmin
          isActive
          createdAt
          updatedAt
          owner
          recipes {
            items {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            nextToken
          }
          messages {
            items {
              id
              recipeID
              userID
              message
              isRead
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
          likes {
            items {
              id
              recipeID
              userID
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
        }
        recipe {
          id
          recipeName
          cuisine
          prepTime
          serving
          description
          images
          video
          ingredients {
            name
            count
          }
          instructions
          calories
          owner
          userID
          categoryID
          typename
          isArchived
          createdAt
          updatedAt
          user {
            id
            sub
            email
            image
            bio
            social {
              instagram
              twitter
              facebook
            }
            isAdmin
            isActive
            createdAt
            updatedAt
            owner
            recipes {
              items {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              nextToken
            }
            messages {
              items {
                id
                recipeID
                userID
                message
                isRead
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          category {
            id
            name
            createdAt
            updatedAt
            recipes {
              items {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              nextToken
            }
            owner
          }
          comments {
            items {
              id
              recipeID
              userID
              content
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
          likes {
            items {
              id
              recipeID
              userID
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
        }
        owner
      }
      nextToken
    }
  }
`;
export const commentsByDate = /* GraphQL */ `
  query CommentsByDate(
    $recipeID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByDate(
      recipeID: $recipeID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        recipeID
        userID
        content
        createdAt
        updatedAt
        user {
          id
          sub
          email
          image
          bio
          social {
            instagram
            twitter
            facebook
          }
          isAdmin
          isActive
          createdAt
          updatedAt
          owner
          recipes {
            items {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            nextToken
          }
          messages {
            items {
              id
              recipeID
              userID
              message
              isRead
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
          likes {
            items {
              id
              recipeID
              userID
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
        }
        recipe {
          id
          recipeName
          cuisine
          prepTime
          serving
          description
          images
          video
          ingredients {
            name
            count
          }
          instructions
          calories
          owner
          userID
          categoryID
          typename
          isArchived
          createdAt
          updatedAt
          user {
            id
            sub
            email
            image
            bio
            social {
              instagram
              twitter
              facebook
            }
            isAdmin
            isActive
            createdAt
            updatedAt
            owner
            recipes {
              items {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              nextToken
            }
            messages {
              items {
                id
                recipeID
                userID
                message
                isRead
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          category {
            id
            name
            createdAt
            updatedAt
            recipes {
              items {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              nextToken
            }
            owner
          }
          comments {
            items {
              id
              recipeID
              userID
              content
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
          likes {
            items {
              id
              recipeID
              userID
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
        }
        owner
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      recipeID
      userID
      createdAt
      updatedAt
      user {
        id
        sub
        email
        image
        bio
        social {
          instagram
          twitter
          facebook
        }
        isAdmin
        isActive
        createdAt
        updatedAt
        owner
        recipes {
          items {
            id
            recipeName
            cuisine
            prepTime
            serving
            description
            images
            video
            ingredients {
              name
              count
            }
            instructions
            calories
            owner
            userID
            categoryID
            typename
            isArchived
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            category {
              id
              name
              createdAt
              updatedAt
              recipes {
                nextToken
              }
              owner
            }
            comments {
              items {
                id
                recipeID
                userID
                content
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        messages {
          items {
            id
            recipeID
            userID
            message
            isRead
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            recipeID
            userID
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      recipe {
        id
        recipeName
        cuisine
        prepTime
        serving
        description
        images
        video
        ingredients {
          name
          count
        }
        instructions
        calories
        owner
        userID
        categoryID
        typename
        isArchived
        createdAt
        updatedAt
        user {
          id
          sub
          email
          image
          bio
          social {
            instagram
            twitter
            facebook
          }
          isAdmin
          isActive
          createdAt
          updatedAt
          owner
          recipes {
            items {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            nextToken
          }
          messages {
            items {
              id
              recipeID
              userID
              message
              isRead
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
          likes {
            items {
              id
              recipeID
              userID
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
        }
        category {
          id
          name
          createdAt
          updatedAt
          recipes {
            items {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            nextToken
          }
          owner
        }
        comments {
          items {
            id
            recipeID
            userID
            content
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            recipeID
            userID
            createdAt
            updatedAt
            user {
              id
              sub
              email
              image
              bio
              social {
                instagram
                twitter
                facebook
              }
              isAdmin
              isActive
              createdAt
              updatedAt
              owner
              recipes {
                nextToken
              }
              messages {
                nextToken
              }
              likes {
                nextToken
              }
            }
            recipe {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        recipeID
        userID
        createdAt
        updatedAt
        user {
          id
          sub
          email
          image
          bio
          social {
            instagram
            twitter
            facebook
          }
          isAdmin
          isActive
          createdAt
          updatedAt
          owner
          recipes {
            items {
              id
              recipeName
              cuisine
              prepTime
              serving
              description
              images
              video
              ingredients {
                name
                count
              }
              instructions
              calories
              owner
              userID
              categoryID
              typename
              isArchived
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              category {
                id
                name
                createdAt
                updatedAt
                owner
              }
              comments {
                nextToken
              }
              likes {
                nextToken
              }
            }
            nextToken
          }
          messages {
            items {
              id
              recipeID
              userID
              message
              isRead
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
          likes {
            items {
              id
              recipeID
              userID
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
        }
        recipe {
          id
          recipeName
          cuisine
          prepTime
          serving
          description
          images
          video
          ingredients {
            name
            count
          }
          instructions
          calories
          owner
          userID
          categoryID
          typename
          isArchived
          createdAt
          updatedAt
          user {
            id
            sub
            email
            image
            bio
            social {
              instagram
              twitter
              facebook
            }
            isAdmin
            isActive
            createdAt
            updatedAt
            owner
            recipes {
              items {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              nextToken
            }
            messages {
              items {
                id
                recipeID
                userID
                message
                isRead
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            likes {
              items {
                id
                recipeID
                userID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          category {
            id
            name
            createdAt
            updatedAt
            recipes {
              items {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              nextToken
            }
            owner
          }
          comments {
            items {
              id
              recipeID
              userID
              content
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
          likes {
            items {
              id
              recipeID
              userID
              createdAt
              updatedAt
              user {
                id
                sub
                email
                image
                bio
                isAdmin
                isActive
                createdAt
                updatedAt
                owner
              }
              recipe {
                id
                recipeName
                cuisine
                prepTime
                serving
                description
                images
                video
                instructions
                calories
                owner
                userID
                categoryID
                typename
                isArchived
                createdAt
                updatedAt
              }
              owner
            }
            nextToken
          }
        }
        owner
      }
      nextToken
    }
  }
`;
