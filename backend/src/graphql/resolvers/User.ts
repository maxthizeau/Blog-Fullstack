import { Context } from "src/graphql/prismaContext"
import { User, QuerySingleUserArgs } from "../../generated/graphql"
import { loggerGraphQLQuery } from "../../utils/utils"

const userQueries = {
  Query: {
    singleUser: async (_parent, args: QuerySingleUserArgs, context: Context) => {
      loggerGraphQLQuery("Query", "singleUser", context.user)
      return await context.prisma.user.findUnique({ where: { id: args.id } })
    },
    currentUser: async (_parent, args, context: Context) => {
      loggerGraphQLQuery("Query", "currentUser", context.user)
      return await context.prisma.user.findUnique({ where: { id: context.user?.id } })
    },
  },
  User: {
    posts: async (parent: User, _args, context: Context) => {
      loggerGraphQLQuery("User", "posts", context.user)
      return await context.prisma.post.findMany({ where: { authorId: parent.id } })
    },
  },
}

const userMutations = {
  Mutation: {},
}

export default [userQueries, userMutations]
