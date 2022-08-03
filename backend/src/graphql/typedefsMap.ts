import { gql } from "apollo-server-express"
import { userTypedefs } from "./typedefs/User"
import { appTypedefs } from "./typedefs/App"

const rootTypeDefs = gql`
  type Query {
    root: String!
  }
  type Mutation {
    root: String!
  }
`

const typeDefs = [rootTypeDefs, appTypedefs, userTypedefs]

export default typeDefs
