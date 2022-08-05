import { Role } from "src/generated/graphql"
import { allow, or, rule } from "graphql-shield"
import { Context } from "../prismaContext"

const isAuthenticated = rule()(async (parent, args, context: Context, info) => {
  return context.user !== null && context.user !== undefined
})

const isAdmin = rule({ cache: "contextual" })(async (parent, args, context: Context, info) => {
  return context.user?.role === Role.Admin
})

const isEditor = rule({ cache: "contextual" })(async (parent, args, context: Context, info) => {
  return context.user?.role === Role.Editor
})

const isOwner = rule()(async (parent, args, context: Context, info) => {
  const post = await context.prisma.post.findFirst({ where: { id: args.id, authorId: context.user?.id } })
  return post !== null
})

const isSelf = rule()(async (parent, args, context: Context, info) => {
  return context.user != null && args.id === context.user?.id
})

export const permissions = {
  Query: {
    currentUser: isAuthenticated,
    "*": allow,
  },

  Mutation: {
    createPost: isAuthenticated,
    updatePost: or(isAdmin, isEditor, isOwner),
    deletePost: or(isAdmin, isEditor, isOwner),
    createCategory: or(isAdmin, isEditor),
    updateCategory: or(isAdmin, isEditor),
    deleteCategory: or(isAdmin, isEditor),
    "*": allow,
  },
}
