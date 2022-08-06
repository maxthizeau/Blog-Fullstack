/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Role } from "./graphql-global-types";

// ====================================================
// GraphQL mutation operation: DeleteCategory
// ====================================================

export interface DeleteCategory_deleteCategory_posts_author {
  __typename: "User";
  id: number;
  createdAt: any;
  email: string;
  name: string | null;
  role: Role;
}

export interface DeleteCategory_deleteCategory_posts {
  __typename: "Post";
  id: number;
  createdAt: any;
  updatedAt: any;
  published: boolean;
  title: string;
  content: string;
  author: DeleteCategory_deleteCategory_posts_author;
}

export interface DeleteCategory_deleteCategory {
  __typename: "Category";
  id: number;
  createdAt: any;
  updatedAt: any;
  name: string;
  posts: (DeleteCategory_deleteCategory_posts | null)[] | null;
}

export interface DeleteCategory {
  deleteCategory: DeleteCategory_deleteCategory;
}

export interface DeleteCategoryVariables {
  deleteCategoryId: number;
}
