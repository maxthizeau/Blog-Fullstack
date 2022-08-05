import { gql } from "apollo-server-express"

export const appTypedefs = gql`
  type AuthPayload {
    token: String
    user: User
  }

  input SignupInput {
    email: String!
    password: String!
    rePassword: String!
    name: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  extend type Mutation {
    signup(signupInput: SignupInput!): AuthPayload
    login(loginInput: LoginInput!): AuthPayload
  }
`
