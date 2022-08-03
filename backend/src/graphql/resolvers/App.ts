import { Context } from "../prismaContext"
import Logger from "../../lib/logger"

const appMutations = {
  Mutation: {
    login: async (_root, args, context: Context) => {
      Logger.info("[mutation] login")
      return null
    },
    signup: async (_root, args, context: Context) => {
      Logger.info("[mutation] signup ")
      return null
    },
  },
}

export default [appMutations]
