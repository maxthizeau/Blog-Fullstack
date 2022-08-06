import { gql } from "@apollo/client"

export const SINGLE_CATEGORY_QUERY = gql`
  query SingleCategory($singleCategoryId: Int!) {
    singleCategory(id: $singleCategoryId) {
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
export const ALL_CATEGORIES_QUERY = gql`
  query AllCategories {
    allCategories {
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
