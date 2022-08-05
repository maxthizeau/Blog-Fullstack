import { MutationCreatePostArgs, MutationDeletePostArgs, MutationLoginArgs, MutationSignupArgs, MutationUpdatePostArgs, Role } from "src/generated/graphql"
import { UserInputError } from "apollo-server-express"
import passwordValidator from "password-validator"
import { isEmail, isAscii, isLength } from "validator"
import { Context } from "../prismaContext"
import { MutationCreateCategoryArgs, MutationUpdateCategoryArgs, MutationDeleteCategoryArgs } from "../../generated/graphql"

const passwordSchema = new passwordValidator().is().min(8).is().max(20).has().letters().has().digits().has().symbols()

export const validators = {
  Mutation: {
    signup: async (resolve, parent, args, context: Context) => {
      const typedArgs = args as MutationSignupArgs
      const { email, password, rePassword, name } = typedArgs.signupInput

      if (!isEmail(email)) {
        throw new UserInputError("Invalid Email address!")
      }

      const emailExists = await context.prisma.user.findUnique({ where: { email: email } })
      if (emailExists) {
        throw new UserInputError("Email already exists!")
      }

      if (!isAscii(name) || !isLength(name, { min: 4, max: 255 })) {
        throw new UserInputError("Invalid name!")
      }

      if (password !== rePassword) {
        throw new UserInputError("Passwords don't match!")
      }

      if (!passwordSchema.validate(password)) {
        throw new UserInputError("Password is not strong enough!")
      }

      return resolve(parent, args, context)
    },
    login: async (resolve, parent, args, context: Context) => {
      const typedArgs = args as MutationLoginArgs
      const { email } = typedArgs.loginInput

      if (!isEmail(email)) {
        throw new UserInputError("Invalid Email address!")
      }

      return resolve(parent, args, context)
    },
    // [POST]
    createPost: async (resolve, parent, args, context: Context) => {
      const typedArgs = args as MutationCreatePostArgs
      const { categories, content, published, title } = typedArgs.data
      // Verify all categories id exists
      const res = await context.prisma.category.findMany({ where: { id: { in: categories } }, select: { id: true } })
      if (categories.length !== res.length) {
        throw new UserInputError("One of the categories is invalid!")
      }

      return resolve(parent, args, context)
    },
    updatePost: async (resolve, parent, args, context: Context) => {
      const typedArgs = args as MutationUpdatePostArgs
      const { data, id } = typedArgs

      // Verify Post id exists
      const post = await context.prisma.post.findUnique({ where: { id } })
      if (!post) {
        throw new UserInputError("Post doesn't exist!")
      }

      // Verify all categories id exists
      if (data.authorId !== undefined && context.user?.role !== Role.Admin) {
        throw new UserInputError("You are not allowed to change author")
      }

      if (data.categories) {
        const res = await context.prisma.category.findMany({ where: { id: { in: data.categories } }, select: { id: true } })
        if (data.categories.length !== res.length) {
          throw new UserInputError("One of the categories is invalid!")
        }
      }

      return resolve(parent, args, context)
    },
    deletePost: async (resolve, parent, args, context: Context) => {
      const typedArgs = args as MutationDeletePostArgs
      const { id } = typedArgs

      // Verify Post id exists
      const post = await context.prisma.post.findUnique({ where: { id } })
      if (!post) {
        throw new UserInputError("Post doesn't exist!")
      }

      return resolve(parent, args, context)
    },
    // [CATEGORY]
    createCategory: async (resolve, parent, args, context: Context) => {
      const typedArgs = args as MutationCreateCategoryArgs
      const { name } = typedArgs.data

      // No validator yet

      return resolve(parent, args, context)
    },
    updateCategory: async (resolve, parent, args, context: Context) => {
      const typedArgs = args as MutationUpdateCategoryArgs
      const { data, id } = typedArgs

      // Verify Category id exists
      const category = await context.prisma.category.findUnique({ where: { id } })
      if (!category) {
        throw new UserInputError("Category doesn't exist!")
      }

      return resolve(parent, args, context)
    },
    deleteCategory: async (resolve, parent, args, context: Context) => {
      const typedArgs = args as MutationDeleteCategoryArgs
      const { id } = typedArgs

      // Verify Category id exists
      const category = await context.prisma.category.findUnique({ where: { id } })
      if (!category) {
        throw new UserInputError("Category doesn't exist!")
      }

      return resolve(parent, args, context)
    },
  },
}
