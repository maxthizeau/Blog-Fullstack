import { gql } from "apollo-server-express"

export const userTypedefs = gql`
  type User {
    id: Int!
    createdAt: DateTime!
    email: String!
    password: String!
    name: String
    role: Role!
    # posts     :[Post]
  }

  enum Role {
    USER
    EDITOR
    ADMIN
  }

  extend type Query {
    currentUser: User
    getUser(id: Int!): User
  }
`
