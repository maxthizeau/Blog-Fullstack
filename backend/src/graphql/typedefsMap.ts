import { gql } from "apollo-server-express"
import { userTypedefs } from "./typedefs/User"
import { appTypedefs } from "./typedefs/App"
import { postTypedefs } from "./typedefs/Post"
import { categoryTypedefs } from "./typedefs/Category"

const rootTypeDefs = gql`
  type Query {
    root: String!
  }
  type Mutation {
    root: String!
  }
`

const typeDefs = [rootTypeDefs, appTypedefs, userTypedefs, postTypedefs, categoryTypedefs]

export default typeDefs
