import jwt from "jsonwebtoken"
require("dotenv").config()

function getTokenPayload(token) {
  return jwt.verify(token, process.env.SECRET_TOKEN as string)
}

function getUserAuth(token) {
  // First, we check the authorization header (prioritize auth header, then cookie)
  try {
    const { user }: any = getTokenPayload(token)

    return user
  } catch (e: any) {
    throw new Error(`Not authenticated - ${e.message}`)
  }
}

export { getUserAuth }
