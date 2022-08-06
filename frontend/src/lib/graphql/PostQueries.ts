import { gql } from "@apollo/client"

export const SINGLE_POST_QUERY = gql`
  query SinglePost($singlePostId: Int!) {
    singlePost(id: $singlePostId) {
      id
      createdAt
      updatedAt
      published
      title
      content
      author {
        id
        email
        createdAt
        name
        role
      }
      categories {
        id
        name
      }
    }
  }
`

export const ALL_POST_QUERY = gql`
  query AllPosts($categoryId: Int, $orderBy: OrderByInput) {
    allPosts(categoryId: $categoryId, orderBy: $orderBy) {
      id
      createdAt
      updatedAt
      published
      title
      content
      author {
        id
        email
        createdAt
        name
        role
      }
      categories {
        id
        name
      }
    }
  }
`
