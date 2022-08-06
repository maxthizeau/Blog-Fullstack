/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SignupInput, Role } from "./graphql-global-types";

// ====================================================
// GraphQL mutation operation: Signup
// ====================================================

export interface Signup_signup_user {
  __typename: "User";
  id: number;
  email: string;
  name: string | null;
  role: Role;
  createdAt: any;
}

export interface Signup_signup {
  __typename: "AuthPayload";
  token: string | null;
  user: Signup_signup_user | null;
}

export interface Signup {
  signup: Signup_signup | null;
}

export interface SignupVariables {
  signupInput: SignupInput;
}
