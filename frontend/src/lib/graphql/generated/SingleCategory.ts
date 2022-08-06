/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Role } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: SingleCategory
// ====================================================

export interface SingleCategory_singleCategory_posts_author {
  __typename: "User";
  id: number;
  createdAt: any;
  email: string;
  name: string | null;
  role: Role;
}

export interface SingleCategory_singleCategory_posts {
  __typename: "Post";
  id: number;
  createdAt: any;
  updatedAt: any;
  published: boolean;
  title: string;
  content: string;
  author: SingleCategory_singleCategory_posts_author;
}

export interface SingleCategory_singleCategory {
  __typename: "Category";
  id: number;
  createdAt: any;
  updatedAt: any;
  name: string;
  posts: (SingleCategory_singleCategory_posts | null)[] | null;
}

export interface SingleCategory {
  singleCategory: SingleCategory_singleCategory | null;
}

export interface SingleCategoryVariables {
  singleCategoryId: number;
}
