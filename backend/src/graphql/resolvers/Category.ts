import { MutationCreateCategoryArgs, MutationDeleteCategoryArgs, MutationUpdateCategoryArgs } from "src/generated/graphql"
import { Context } from "src/graphql/prismaContext"
import { loggerGraphQLQuery } from "src/utils/utils"
import { Prisma } from "@prisma/client"
import { QuerySingleCategoryArgs, Category } from "../../generated/graphql"

const categoryQueries = {
  Query: {
    singleCategory: async (_parent, args: QuerySingleCategoryArgs, context: Context) => {
      loggerGraphQLQuery("Query", "singleCategory", context.user)
      const { id } = args
      const result = await context.prisma.category.findUnique({ where: { id } })
      return result
    },
    allCategories: async (_parent, _args, context: Context) => {
      loggerGraphQLQuery("Query", "allCategories", context.user)
      const result = await context.prisma.category.findMany()
      return result
    },
  },
  Category: {
    posts: async (parent: Category, _args, context: Context) => {
      loggerGraphQLQuery("Category", "posts", context.user)
      return await context.prisma.post.findMany({ where: { categories: { some: { id: parent.id } } } })
    },
  },
}

const categoryMutations = {
  Mutation: {
    createCategory: async (_parent, args: MutationCreateCategoryArgs, context: Context) => {
      loggerGraphQLQuery("mutation", "createCategory", context.user)
      const { name } = args.data

      // Insert in database
      const result = await context.prisma.category.create({
        data: {
          name,
        },
      })
      // Return created category
      return result
    },

    updateCategory: async (_parent, args: MutationUpdateCategoryArgs, context: Context) => {
      loggerGraphQLQuery("mutation", "updateCategory", context.user)
      const { id, data } = args

      // Transform Query data into Prisma/db data
      const processedData: Prisma.CategoryUpdateInput = {
        name: data.name ?? undefined,
      }
      const result = await context.prisma.category.update({ where: { id: id }, data: processedData })

      return result
    },

    deleteCategory: async (_parent, args: MutationDeleteCategoryArgs, context: Context) => {
      loggerGraphQLQuery("mutation", "deleteCategory", context.user)
      const { id } = args

      // Delete query
      const result = await context.prisma.category.delete({ where: { id } })

      return result
    },
  },
}

export default [categoryQueries, categoryMutations]
