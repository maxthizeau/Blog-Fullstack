import { mergeResolvers } from "@graphql-tools/merge"
import userResolvers from "./resolvers/User"
import appResolvers from "./resolvers/App"

const resolverMap = [...appResolvers, ...userResolvers]

export default mergeResolvers(resolverMap)
