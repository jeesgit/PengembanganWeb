// Import library jsonwebtoken untuk proses verifikasi token JWT
const jwt = require("jsonwebtoken")

// Middleware untuk mengautentikasi request menggunakan JWT
const authenticateJWT = (req, res, next) => {
  // Ambil nilai header Authorization dari request
  const authHeader = req.header('Authorization');

  // Jika header Authorization tidak ada → langsung tolak dengan status 401
  if (!authHeader) return res.status(401).json({ info: "Unauthorized" });

  // Debug: tampilkan nilai header Authorization di console
  console.log("Authorization Header:", req.header('Authorization'));

  // Format header biasanya "Bearer <token>", jadi ambil token setelah spasi
  const token = authHeader.split(" ")[1]

  // Verifikasi token menggunakan secret key dari environment
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    // Jika verifikasi gagal → token tidak valid atau expired → tolak request
    if (err) return res.status(401).json({ info: "Unauthorized" });

    // Jika berhasil → simpan data payload user dari token ke req.user
    req.user = user;

    // Lanjutkan ke middleware/route berikutnya
    next();
  });
};

// Export middleware agar bisa digunakan di route
module.exports = {
  authenticateJWT
}