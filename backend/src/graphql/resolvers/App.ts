import { Context } from "../prismaContext"
import Logger from "../../utils/logger"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { MutationLoginArgs, MutationSignupArgs } from "src/generated/graphql"
import { AuthenticationError } from "apollo-server-express"
import { loggerGraphQLQuery } from "src/utils/utils"
require("dotenv").config()

const SECRET_TOKEN = process.env.SECRET_TOKEN

const appMutations = {
  Mutation: {
    login: async (_root, args: MutationLoginArgs, context: Context) => {
      loggerGraphQLQuery("mutation", "login", context.user)

      const { email, password } = args.loginInput
      const user = await context.prisma.user.findUnique({ where: { email } })
      const validAuth = await bcrypt.compare(password, user?.password ?? "")

      if (!user || !validAuth) {
        throw new AuthenticationError("Email doesn't exist or wrong password.")
      }
      console.log(user)

      const token = jwt.sign({ user: user }, SECRET_TOKEN as string)

      return { user, token }
    },
    signup: async (_root, args: MutationSignupArgs, context: Context) => {
      loggerGraphQLQuery("mutation", "signup", context.user)

      const { password, name, email } = args.signupInput
      const hashedPass = await bcrypt.hash(password, 10)

      // Insert in database and get user
      const user = await context.prisma.user.create({
        data: {
          email,
          password: hashedPass,
          name,
        },
      })

      // Get Auth Token
      const token = jwt.sign({ user: user }, SECRET_TOKEN as string)

      return {
        token,
        user,
      }
    },
  },
}

export default [appMutations]
