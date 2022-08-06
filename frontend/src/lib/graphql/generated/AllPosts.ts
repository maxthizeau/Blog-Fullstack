/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrderByInput, Role } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: AllPosts
// ====================================================

export interface AllPosts_allPosts_author {
  __typename: "User";
  id: number;
  email: string;
  createdAt: any;
  name: string | null;
  role: Role;
}

export interface AllPosts_allPosts_categories {
  __typename: "Category";
  id: number;
  name: string;
}

export interface AllPosts_allPosts {
  __typename: "Post";
  id: number;
  createdAt: any;
  updatedAt: any;
  published: boolean;
  title: string;
  content: string;
  author: AllPosts_allPosts_author;
  categories: (AllPosts_allPosts_categories | null)[] | null;
}

export interface AllPosts {
  allPosts: AllPosts_allPosts[] | null;
}

export interface AllPostsVariables {
  categoryId?: number | null;
  orderBy?: OrderByInput | null;
}
