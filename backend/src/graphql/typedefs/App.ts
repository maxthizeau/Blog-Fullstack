import { gql } from "apollo-server-express"

export const appTypedefs = gql`
  type AuthPayload {
    token: String
    user: User
  }

  extend type Mutation {
    signup(email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
  }
`
