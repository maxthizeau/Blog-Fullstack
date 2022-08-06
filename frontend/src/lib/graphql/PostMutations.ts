import { gql } from "@apollo/client"
export const CREATE_POST_MUTATION = gql`
  mutation CreatePost($data: CreatePostInput!) {
    createPost(data: $data) {
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

export const UPDATE_POST_MUTATION = gql`
  mutation UpdatePost($id: Int!, $data: UpdatePostInput!) {
    updatePost(id: $id, data: $data) {
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

export const DELETE_POST_MUTATION = gql`
  mutation DeletePost($id: Int!) {
    deletePost(id: $id) {
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
