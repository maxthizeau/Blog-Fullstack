import { ApolloServer } from "apollo-server-express"
import express from "express"
import { createServer } from "http"
import { schema } from "@src/graphql/schema"
import { context } from "@src/graphql/prismaContext"
import { performAstCodegen } from "./codegen"
import Logger from "./lib/logger"

const PORT = process.env.PORT || 5000

export const server = new ApolloServer({
  schema,
  context,
})

var whitelistDev = [`http://localhost:3000`, `http://localhost:3001`, `http://localhost:${PORT}`, "http://localhost:5001", "https://studio.apollographql.com"]
var whitelistProd = [`http://maximethizeau.fr`]

const whitelist = process.env.NODE_ENV === "production" ? whitelistProd : whitelistDev
console.log("Node Env : ", process.env.NODE_ENV)
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error(`Not allowed by CORS : ${origin}`))
    }
  },
  credentials: true,
}

async function startApolloServer() {
  performAstCodegen()
  const app = express()
  const httpServer = createServer(app)
  await server.start()
  server.applyMiddleware({ app, cors: corsOptions })
  httpServer.listen(PORT, () => Logger.http(`🚀 Server is now running on port ${PORT} : http://localhost:5000/graphql`))
}

startApolloServer()
