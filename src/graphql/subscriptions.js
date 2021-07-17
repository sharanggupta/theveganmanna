/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe($owner: String) {
    onCreateRecipe(owner: $owner) {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe($owner: String) {
    onUpdateRecipe(owner: $owner) {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe($owner: String) {
    onDeleteRecipe(owner: $owner) {
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
export const onCreateReport = /* GraphQL */ `
  subscription OnCreateReport($owner: String) {
    onCreateReport(owner: $owner) {
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
export const onUpdateReport = /* GraphQL */ `
  subscription OnUpdateReport($owner: String) {
    onUpdateReport(owner: $owner) {
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
export const onDeleteReport = /* GraphQL */ `
  subscription OnDeleteReport($owner: String) {
    onDeleteReport(owner: $owner) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($owner: String) {
    onCreateMessage(owner: $owner) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($owner: String) {
    onUpdateMessage(owner: $owner) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($owner: String) {
    onDeleteMessage(owner: $owner) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($owner: String) {
    onCreateCategory(owner: $owner) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($owner: String) {
    onUpdateCategory(owner: $owner) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($owner: String) {
    onDeleteCategory(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($owner: String) {
    onCreateLike(owner: $owner) {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($owner: String) {
    onUpdateLike(owner: $owner) {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($owner: String) {
    onDeleteLike(owner: $owner) {
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
