/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
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
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
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
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
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
export const createReport = /* GraphQL */ `
  mutation CreateReport(
    $input: CreateReportInput!
    $condition: ModelReportConditionInput
  ) {
    createReport(input: $input, condition: $condition) {
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
export const updateReport = /* GraphQL */ `
  mutation UpdateReport(
    $input: UpdateReportInput!
    $condition: ModelReportConditionInput
  ) {
    updateReport(input: $input, condition: $condition) {
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
export const deleteReport = /* GraphQL */ `
  mutation DeleteReport(
    $input: DeleteReportInput!
    $condition: ModelReportConditionInput
  ) {
    deleteReport(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
