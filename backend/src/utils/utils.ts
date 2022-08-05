import { User } from "../generated/graphql"
import Logger from "./logger"

export function loggerGraphQLQuery(type: string, name: string, user: User | undefined) {
  Logger.info(`[${type}] ${name} - as ${user?.role ?? "VISITOR"} - ID : ${user?.id}`)
}
