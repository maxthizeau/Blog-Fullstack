import { mergeResolvers } from "@graphql-tools/merge"
import userResolvers from "./resolvers/User"
import appResolvers from "./resolvers/App"
import postResolvers from "./resolvers/Post"
import categoryResolvers from "./resolvers/Category"

const resolverMap = [...appResolvers, ...userResolvers, ...postResolvers, ...categoryResolvers]

export default mergeResolvers(resolverMap)
