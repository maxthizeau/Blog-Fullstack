/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateCategoryInput, Role } from "./graphql-global-types";

// ====================================================
// GraphQL mutation operation: UpdateCategory
// ====================================================

export interface UpdateCategory_updateCategory_posts_author {
  __typename: "User";
  id: number;
  createdAt: any;
  email: string;
  name: string | null;
  role: Role;
}

export interface UpdateCategory_updateCategory_posts {
  __typename: "Post";
  id: number;
  createdAt: any;
  updatedAt: any;
  published: boolean;
  title: string;
  content: string;
  author: UpdateCategory_updateCategory_posts_author;
}

export interface UpdateCategory_updateCategory {
  __typename: "Category";
  id: number;
  createdAt: any;
  updatedAt: any;
  name: string;
  posts: (UpdateCategory_updateCategory_posts | null)[] | null;
}

export interface UpdateCategory {
  updateCategory: UpdateCategory_updateCategory;
}

export interface UpdateCategoryVariables {
  updateCategoryId: number;
  data: UpdateCategoryInput;
}
