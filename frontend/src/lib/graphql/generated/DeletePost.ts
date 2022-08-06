/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Role } from "./graphql-global-types";

// ====================================================
// GraphQL mutation operation: DeletePost
// ====================================================

export interface DeletePost_deletePost_author {
  __typename: "User";
  id: number;
  email: string;
  createdAt: any;
  name: string | null;
  role: Role;
}

export interface DeletePost_deletePost_categories {
  __typename: "Category";
  id: number;
  name: string;
}

export interface DeletePost_deletePost {
  __typename: "Post";
  id: number;
  createdAt: any;
  updatedAt: any;
  published: boolean;
  title: string;
  content: string;
  author: DeletePost_deletePost_author;
  categories: (DeletePost_deletePost_categories | null)[] | null;
}

export interface DeletePost {
  deletePost: DeletePost_deletePost;
}

export interface DeletePostVariables {
  id: number;
}
