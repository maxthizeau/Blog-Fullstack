import { PrismaClient } from "@prisma/client"
import { getUserId } from "@src/lib/log_lib"
import cookie from "cookie"

export interface Context {
  req: any
  prisma: PrismaClient
  user: any
}

const prisma = new PrismaClient()

export const context = ({ req }: any): Context => {
  // First, we check the authorization header (prioritize auth header, then cookie)
  const tokenAuth = req?.headers?.authorization ?? null

  return { ...req, prisma, user: tokenAuth ? getUserId(req) : null }
}
