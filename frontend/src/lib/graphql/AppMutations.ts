import { gql } from "@apollo/client"

export const LOGIN_MUTATION = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      token
      user {
        email
        name
        role
        createdAt
      }
    }
  }
`

export const SIGNUP_MUTATION = gql`
  mutation Signup($signupInput: SignupInput!) {
    signup(signupInput: $signupInput) {
      token
      user {
        id
        email
        name
        role
        createdAt
      }
    }
  }
`
