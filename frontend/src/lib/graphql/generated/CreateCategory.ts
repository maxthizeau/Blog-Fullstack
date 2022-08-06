/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateCategoryInput, Role } from "./graphql-global-types";

// ====================================================
// GraphQL mutation operation: CreateCategory
// ====================================================

export interface CreateCategory_createCategory_posts_author {
  __typename: "User";
  id: number;
  createdAt: any;
  email: string;
  name: string | null;
  role: Role;
}

export interface CreateCategory_createCategory_posts {
  __typename: "Post";
  id: number;
  createdAt: any;
  updatedAt: any;
  published: boolean;
  title: string;
  content: string;
  author: CreateCategory_createCategory_posts_author;
}

export interface CreateCategory_createCategory {
  __typename: "Category";
  id: number;
  createdAt: any;
  updatedAt: any;
  name: string;
  posts: (CreateCategory_createCategory_posts | null)[] | null;
}

export interface CreateCategory {
  createCategory: CreateCategory_createCategory;
}

export interface CreateCategoryVariables {
  data: CreateCategoryInput;
}
