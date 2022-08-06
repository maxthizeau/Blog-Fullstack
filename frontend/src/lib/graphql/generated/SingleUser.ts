/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Role } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: SingleUser
// ====================================================

export interface SingleUser_singleUser_posts_categories {
  __typename: "Category";
  id: number;
  name: string;
}

export interface SingleUser_singleUser_posts {
  __typename: "Post";
  id: number;
  createdAt: any;
  updatedAt: any;
  published: boolean;
  title: string;
  content: string;
  categories: (SingleUser_singleUser_posts_categories | null)[] | null;
}

export interface SingleUser_singleUser {
  __typename: "User";
  id: number;
  createdAt: any;
  email: string;
  password: string;
  name: string | null;
  role: Role;
  posts: (SingleUser_singleUser_posts | null)[] | null;
}

export interface SingleUser {
  singleUser: SingleUser_singleUser | null;
}

export interface SingleUserVariables {
  singleUserId: number;
}
