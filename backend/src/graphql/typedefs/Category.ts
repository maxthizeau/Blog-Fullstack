import { gql } from "apollo-server-express"

export const categoryTypedefs = gql`
  type Category {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    posts: [Post]
  }

  input CreateCategoryInput {
    name: String!
  }

  input UpdateCategoryInput {
    name: String
  }

  extend type Query {
    singleCategory(id: Int!): Category
    allCategories: [Category]
  }

  extend type Mutation {
    createCategory(data: CreateCategoryInput!): Category!
    updateCategory(id: Int!, data: UpdateCategoryInput!): Category!
    deleteCategory(id: Int!): Category!
  }
`
