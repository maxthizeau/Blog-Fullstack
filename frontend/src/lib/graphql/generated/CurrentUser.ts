/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Role } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: CurrentUser
// ====================================================

export interface CurrentUser_currentUser {
  __typename: "User";
  id: number;
  email: string;
  name: string | null;
  role: Role;
  createdAt: any;
}

export interface CurrentUser {
  currentUser: CurrentUser_currentUser | null;
}
