// Import instance Prisma Client dari file utils
const { prisma } = require("./utils")

// Fungsi untuk mendapatkan data user saat ini berdasarkan email
const getCurrentUser = async ({ email }) => {
  // Cari user pertama di tabel `user` yang memiliki email sesuai
  const user = await prisma.user.findFirst({
    where: { email }
  })
  
  // Kembalikan data user (jika ada)
  return user
}

// Export fungsi agar bisa digunakan di file lain
module.exports = {
  getCurrentUser
}