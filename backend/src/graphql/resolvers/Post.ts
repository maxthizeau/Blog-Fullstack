import { Prisma } from "@prisma/client"
import {
  MutationCreatePostArgs,
  MutationDeletePostArgs,
  MutationUpdatePostArgs,
  Post,
  QuerySinglePostArgs,
  SortModeEnum,
  UpdatePostInput,
} from "src/generated/graphql"
import { Context } from "src/graphql/prismaContext"
import { loggerGraphQLQuery } from "../../utils/utils"
import { QueryAllPostsArgs, OrderByEnum } from "../../generated/graphql"

const postQueries = {
  Query: {
    singlePost: async (_parent, args: QuerySinglePostArgs, context: Context) => {
      loggerGraphQLQuery("Query", "singlePost", context.user)
      const { id } = args
      return await context.prisma.post.findUnique({ where: { id } })
    },
    allPosts: async (_parent, args: QueryAllPostsArgs, context: Context) => {
      loggerGraphQLQuery("Query", "allPosts", context.user)
      const { categoryId, orderBy } = args

      let orderByQuery: Prisma.PostOrderByWithRelationInput | undefined = orderBy ? {} : undefined
      const sortMode = orderBy?.sort === SortModeEnum.Desc ? "desc" : "asc"
      switch (orderBy?.orderBy) {
        case OrderByEnum.Id:
          orderByQuery = { id: sortMode }
          break
        case OrderByEnum.CreateDate:
          orderByQuery = { createdAt: sortMode }
          break
        case OrderByEnum.UpdateDate:
          orderByQuery = { updatedAt: sortMode }
          break
        default:
          break
      }

      const whereArg: Prisma.PostFindManyArgs = {
        where: {
          // != null check both null or undefined (unlike !==)
          categories: categoryId != null ? { some: { id: categoryId } } : undefined,
        },
        orderBy: orderByQuery ? [orderByQuery] : undefined,
      }

      const result = await context.prisma.post.findMany(whereArg)
      return result
    },
  },
  Post: {
    categories: async (parent: Post, _args, context: Context) => {
      loggerGraphQLQuery("Post", "category", context.user)
      const categories = await context.prisma.category.findMany({ where: { posts: { some: { id: parent.id } } } })
      return categories
    },
    author: async (parent: Post, _args, context: Context) => {
      loggerGraphQLQuery("Post", "author", context.user)
      const author = await context.prisma.user.findUnique({ where: { id: parent.author?.id } })
      return author
    },
  },
}

const postMutations = {
  Mutation: {
    // createPost(data: CreatePostInput): Post!
    createPost: async (_parent, args: MutationCreatePostArgs, context: Context) => {
      loggerGraphQLQuery("mutation", "createPost", context.user)
      const { categories, content, published, title } = args.data
      // Array to connect many categories
      const categoriesConnect = categories.map((x) => {
        return { id: x }
      })
      // Insert in database

      const result = await context.prisma.post.create({
        data: {
          title,
          content,
          published: published ?? false,
          categories: { connect: categoriesConnect },
          author: { connect: { id: context.user?.id } },
        },
      })
      // Return created post
      return result
    },
    // updatePost(data: UpdatePostInput): Post!
    updatePost: async (_parent, args: MutationUpdatePostArgs, context: Context) => {
      loggerGraphQLQuery("mutation", "updatePost", context.user)
      const { id, data } = args

      const categoriesConnect = data.categories?.map((x) => {
        return { id: x }
      })

      // Transform Query data into Prisma/db data
      const processedData: Prisma.PostUpdateInput = {
        title: data.title ?? undefined,
        content: data.content ?? undefined,
        published: data.published !== null && data.published !== undefined ? data.published : false,
        categories: categoriesConnect !== undefined ? { connect: categoriesConnect } : undefined,
        author: data.authorId ? { connect: { id: data.authorId } } : undefined,
      }

      // Update and get the result
      const result = await context.prisma.post.update({ where: { id: id }, data: processedData })

      return result
    },
    // deletePost(id: Int!): Post!
    deletePost: async (_parent, args: MutationDeletePostArgs, context: Context) => {
      loggerGraphQLQuery("mutation", "deletePost", context.user)
      const { id } = args

      // Delete query
      const result = await context.prisma.post.delete({ where: { id } })

      return result
    },
  },
}

export default [postQueries, postMutations]
