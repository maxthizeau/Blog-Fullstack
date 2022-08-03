import { InMemoryCache, Reference, makeVar } from "@apollo/client"

// Initializes to true if localStorage includes a 'token' key,
// false otherwise
export const isTemporaryUserVar = makeVar<boolean>(false)

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isTemporaryUser: {
          read() {
            return isTemporaryUserVar()
          },
        },
      },
    },
  },
})
