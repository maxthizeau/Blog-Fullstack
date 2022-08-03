import resolvers from "src/graphql/resolversMap"
import typeDefs from "src/graphql/typedefsMap"
import { makeExecutableSchema } from "@graphql-tools/schema"

import { typeDefs as scalarTypeDefs, resolvers as scalarResolvers } from "graphql-scalars"

export const schema = makeExecutableSchema({
  typeDefs: [...scalarTypeDefs, ...typeDefs],
  resolvers: { ...scalarResolvers, ...resolvers },
})
