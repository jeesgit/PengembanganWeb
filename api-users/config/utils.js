// Import PrismaClient dari package @prisma/client
const { PrismaClient } = require("@prisma/client")

// Membuat instance PrismaClient
const prisma = new PrismaClient()

// Export instance prisma agar bisa digunakan di seluruh project
module.exports = {
  prisma
}