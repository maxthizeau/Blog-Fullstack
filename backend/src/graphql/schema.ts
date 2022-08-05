import resolvers from "src/graphql/resolversMap"
import typeDefs from "src/graphql/typedefsMap"
import { makeExecutableSchema } from "@graphql-tools/schema"
import { typeDefs as scalarTypeDefs, resolvers as scalarResolvers } from "graphql-scalars"
import { applyMiddleware } from "graphql-middleware"
import { shield } from "graphql-shield"
import { permissions } from "./access/shield"
import { validators } from "./access/validators"

const executableSchema = makeExecutableSchema({
  typeDefs: [...scalarTypeDefs, ...typeDefs],
  resolvers: { ...scalarResolvers, ...resolvers },
})

export const schema = applyMiddleware(executableSchema, validators, shield(permissions, { allowExternalErrors: true }))

// export const schema = executableSchema
