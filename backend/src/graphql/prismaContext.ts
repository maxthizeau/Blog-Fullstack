import { PrismaClient } from "@prisma/client"
import { User } from "src/generated/graphql"
import Logger from "src/utils/logger"
import { getUserAuth } from "src/utils/auth"

export interface Context {
  req: any
  prisma: PrismaClient
  user: User | undefined
}

const prisma = new PrismaClient()

export const context = ({ req }: any): Context => {
  // Verify jwt token
  const parts = req.headers.authorization ? req.headers.authorization.split(" ") : [""]
  // Filter the token (remove Bearer)
  const token = parts.length === 2 && parts[0].toLowerCase() === "bearer" ? parts[1] : parts.length === 1 ? parts[0] : undefined
  // Retrieve user from token
  const user = token ? getUserAuth(token) : undefined

  return { ...req, prisma, user: user }
}
