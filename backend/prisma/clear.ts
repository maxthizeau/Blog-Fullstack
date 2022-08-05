export async function deleteAll(prisma, log = false) {
  const deletedPosts = await prisma.post.deleteMany({})
  log && console.log(`🗑️ Deleted ${deletedPosts.count} posts`)
  const deletedCategories = await prisma.category.deleteMany({})
  log && console.log(`🗑️ Deleted ${deletedCategories.count} category`)
  const deletedUsers = await prisma.user.deleteMany({})
  log && console.log(`🗑️ Deleted ${deletedUsers.count} users`)
}

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

deleteAll(prisma, true)
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
