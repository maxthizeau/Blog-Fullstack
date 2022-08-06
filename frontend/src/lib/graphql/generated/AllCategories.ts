/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Role } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: AllCategories
// ====================================================

export interface AllCategories_allCategories_posts_author {
  __typename: "User";
  id: number;
  createdAt: any;
  email: string;
  name: string | null;
  role: Role;
}

export interface AllCategories_allCategories_posts {
  __typename: "Post";
  id: number;
  createdAt: any;
  updatedAt: any;
  published: boolean;
  title: string;
  content: string;
  author: AllCategories_allCategories_posts_author;
}

export interface AllCategories_allCategories {
  __typename: "Category";
  id: number;
  createdAt: any;
  updatedAt: any;
  name: string;
  posts: (AllCategories_allCategories_posts | null)[] | null;
}

export interface AllCategories {
  allCategories: (AllCategories_allCategories | null)[] | null;
}
