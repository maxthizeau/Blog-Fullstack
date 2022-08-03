import * as fs from "fs"
import * as schemaAstPlugin from "@graphql-codegen/schema-ast"
import { parse, printSchema } from "graphql"
import { Types } from "@graphql-codegen/plugin-helpers"
import { codegen } from "@graphql-codegen/core"
import { PrismaClient } from "@prisma/client"
import path from "path"
import { schema } from "./graphql/schema"
// import prismaContext from '@src/graphql/prismaContext'

async function performCodegen(options: Types.GenerateOptions): Promise<void> {
  // console.log(path.join(__dirname, "/generated/", options.filename))
  const output = await codegen(options)
  // console.log(output)
  fs.writeFile(path.join(__dirname, "/generated/", options.filename), output, () => {
    console.log("Outputs generated!")
  })
}

// eslint-disable-next-line import/prefer-default-export
export async function performAstCodegen(): Promise<void> {
  // console.log("Performing codegen...")
  const options: Types.GenerateOptions = {
    config: {
      numericEnums: true,
      contextType: { prisma: PrismaClient },
      useIndexSignature: true,
    },
    documents: [],
    filename: "schema.graphql",
    schema: parse(printSchema(schema)),
    plugins: [{ "schema-ast": {} }],
    pluginMap: {
      "schema-ast": schemaAstPlugin,
    },
  }
  performCodegen(options)
}
