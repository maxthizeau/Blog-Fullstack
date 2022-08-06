/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum OrderByEnum {
  CREATE_DATE = "CREATE_DATE",
  ID = "ID",
  UPDATE_DATE = "UPDATE_DATE",
}

export enum Role {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  USER = "USER",
}

export enum SortModeEnum {
  ASC = "ASC",
  DESC = "DESC",
}

export interface CreateCategoryInput {
  name: string;
}

export interface CreatePostInput {
  title: string;
  content: string;
  categories: number[];
  published?: boolean | null;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface OrderByInput {
  orderBy?: OrderByEnum | null;
  sort?: SortModeEnum | null;
}

export interface SignupInput {
  email: string;
  password: string;
  rePassword: string;
  name: string;
}

export interface UpdateCategoryInput {
  name?: string | null;
}

export interface UpdatePostInput {
  title?: string | null;
  content?: string | null;
  authorId?: number | null;
  categories?: number[] | null;
  published?: boolean | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
