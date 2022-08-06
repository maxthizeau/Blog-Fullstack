import { gql } from "@apollo/client"

export const CURRENT_USER_QUERY = gql`
  query CurrentUser {
    currentUser {
      id
      email
      name
      role
      createdAt
    }
  }
`

export const SINGLE_USER_QUERY = gql`
  query SingleUser($singleUserId: Int!) {
    singleUser(id: $singleUserId) {
      id
      createdAt
      email
      password
      name
      role
      posts {
        id
        createdAt
        updatedAt
        published
        title
        content
        categories {
          id
          name
        }
      }
    }
  }
`
