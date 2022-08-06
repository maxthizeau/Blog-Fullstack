/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoginInput, Role } from "./graphql-global-types";

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login_user {
  __typename: "User";
  email: string;
  name: string | null;
  role: Role;
  createdAt: any;
}

export interface Login_login {
  __typename: "AuthPayload";
  token: string | null;
  user: Login_login_user | null;
}

export interface Login {
  login: Login_login | null;
}

export interface LoginVariables {
  loginInput: LoginInput;
}
