/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdatePostInput, Role } from "./graphql-global-types";

// ====================================================
// GraphQL mutation operation: UpdatePost
// ====================================================

export interface UpdatePost_updatePost_author {
  __typename: "User";
  id: number;
  email: string;
  createdAt: any;
  name: string | null;
  role: Role;
}

export interface UpdatePost_updatePost_categories {
  __typename: "Category";
  id: number;
  name: string;
}

export interface UpdatePost_updatePost {
  __typename: "Post";
  id: number;
  createdAt: any;
  updatedAt: any;
  published: boolean;
  title: string;
  content: string;
  author: UpdatePost_updatePost_author;
  categories: (UpdatePost_updatePost_categories | null)[] | null;
}

export interface UpdatePost {
  updatePost: UpdatePost_updatePost;
}

export interface UpdatePostVariables {
  id: number;
  data: UpdatePostInput;
}
