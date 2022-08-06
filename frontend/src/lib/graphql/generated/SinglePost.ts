/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Role } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: SinglePost
// ====================================================

export interface SinglePost_singlePost_author {
  __typename: "User";
  id: number;
  email: string;
  createdAt: any;
  name: string | null;
  role: Role;
}

export interface SinglePost_singlePost_categories {
  __typename: "Category";
  id: number;
  name: string;
}

export interface SinglePost_singlePost {
  __typename: "Post";
  id: number;
  createdAt: any;
  updatedAt: any;
  published: boolean;
  title: string;
  content: string;
  author: SinglePost_singlePost_author;
  categories: (SinglePost_singlePost_categories | null)[] | null;
}

export interface SinglePost {
  singlePost: SinglePost_singlePost | null;
}

export interface SinglePostVariables {
  singlePostId: number;
}
