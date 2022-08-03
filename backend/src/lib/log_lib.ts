import jwt from "jsonwebtoken"

const APP_SECRET = "THISISSECRETTOKEN"

function getTokenPayload(token) {
  return jwt.verify(token, APP_SECRET)
}

function getUserId(req) {
  // First, we check the authorization header (prioritize auth header, then cookie)
  try {
    const tokenAuth = req?.headers?.authorization ?? null

    const { user }: any = getTokenPayload(tokenAuth)

    return user
  } catch (e: any) {
    throw new Error(`Not authenticated - ${e.message}`)
  }
}

export { getUserId, APP_SECRET }
