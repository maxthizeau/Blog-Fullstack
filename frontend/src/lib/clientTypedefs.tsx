import { gql } from "@apollo/client"
export const clientTypedefs = gql`
  extend type Query {
    isTemporaryUser: Boolean
    temporaryBuyRequest: [Int]
  }
`
