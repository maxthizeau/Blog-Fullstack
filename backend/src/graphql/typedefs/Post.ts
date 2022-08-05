import { gql } from "apollo-server-express"

export const postTypedefs = gql`
  type Post {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    published: Boolean!
    title: String!
    content: String!
    author: User!
    categories: [Category]
  }

  enum OrderByEnum {
    ID
    CREATE_DATE
    UPDATE_DATE
  }

  enum SortModeEnum {
    ASC
    DESC
  }

  input OrderByInput {
    orderBy: OrderByEnum
    sort: SortModeEnum
  }

  input CreatePostInput {
    title: String!
    content: String!
    categories: [Int!]!
    published: Boolean
  }

  input UpdatePostInput {
    title: String
    content: String
    authorId: Int
    categories: [Int!]
    published: Boolean
  }

  extend type Query {
    singlePost(id: Int!): Post
    allPosts(categoryId: Int, orderBy: OrderByInput): [Post!]
  }

  extend type Mutation {
    createPost(data: CreatePostInput!): Post!
    updatePost(id: Int!, data: UpdatePostInput!): Post!
    deletePost(id: Int!): Post!
  }
`
