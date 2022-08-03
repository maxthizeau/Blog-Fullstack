import { Context } from "@src/graphql/prismaContext"

const userQueries = {
  Query: {
    getUser: async (_parent, args, context: Context) => {
      console.log("[query] getUser")
    },
    currentUser: async (_parent, _args, context: Context) => {
      console.log("[query] currentUser")
    },
  },
  User: {},
}

const userMutations = {
  Mutation: {},
}

export default [userQueries, userMutations]
