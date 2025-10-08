// Middleware validasi untuk entitas Peserta
const validatePeserta = (req, res, next) => {
  const { name } = req.body;   // Ambil field "name" dari body request

  // Cek apakah name kosong atau hanya berisi spasi
  if (!name || name.trim() === "") {
    // Jika tidak valid → kembalikan response 400 (Bad Request)
    return res.status(400).json({
      data: null,                     // Tidak ada data yang dikembalikan
      message: "Name peserta wajib diisi.",  // Pesan error yang jelas untuk user
      status: "error",                 // Status kustom untuk menandai error
    });
  }

  // Jika valid → lanjut ke middleware/controller berikutnya
  next();
};

// Export middleware agar bisa dipakai di route
module.exports = validatePeserta;