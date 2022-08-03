import { Prisma } from ".prisma/client"
import { Context } from "@src/graphql/prismaContext"

export const rules = {
  isAdmin(context) {
    if (!this.isLoggedIn(context)) return false

    if (context.user.role === "ADMIN") return true
    else return false
  },
  isLoggedIn(context) {
    if (!context.user) {
      return false
    }
    return true
  },
}
