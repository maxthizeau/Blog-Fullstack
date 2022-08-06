import { gql } from "@apollo/client"

export const CREATE_CATEGORY_MUTATION = gql`
  mutation CreateCategory($data: CreateCategoryInput!) {
    createCategory(data: $data) {
      id
      createdAt
      updatedAt
      name
      posts {
        id
        createdAt
        updatedAt
        published
        title
        content
        author {
          id
          createdAt
          email
          name
          role
        }
      }
    }
  }
`

export const UPDATE_CATEGORY_MUTATION = gql`
  mutation UpdateCategory($updateCategoryId: Int!, $data: UpdateCategoryInput!) {
    updateCategory(id: $updateCategoryId, data: $data) {
      id
      createdAt
      updatedAt
      name
      posts {
        id
        createdAt
        updatedAt
        published
        title
        content
        author {
          id
          createdAt
          email
          name
          role
        }
      }
    }
  }
`

export const DELETE_CATEGORY_MUTATION = gql`
  mutation DeleteCategory($deleteCategoryId: Int!) {
    deleteCategory(id: $deleteCategoryId) {
      id
      createdAt
      updatedAt
      name
      posts {
        id
        createdAt
        updatedAt
        published
        title
        content
        author {
          id
          createdAt
          email
          name
          role
        }
      }
    }
  }
`
