/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreatePostInput, Role } from "./graphql-global-types";

// ====================================================
// GraphQL mutation operation: CreatePost
// ====================================================

export interface CreatePost_createPost_author {
  __typename: "User";
  id: number;
  email: string;
  createdAt: any;
  name: string | null;
  role: Role;
}

export interface CreatePost_createPost_categories {
  __typename: "Category";
  id: number;
  name: string;
}

export interface CreatePost_createPost {
  __typename: "Post";
  id: number;
  createdAt: any;
  updatedAt: any;
  published: boolean;
  title: string;
  content: string;
  author: CreatePost_createPost_author;
  categories: (CreatePost_createPost_categories | null)[] | null;
}

export interface CreatePost {
  createPost: CreatePost_createPost;
}

export interface CreatePostVariables {
  data: CreatePostInput;
}
