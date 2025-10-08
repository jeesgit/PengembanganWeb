/**
 Import framework Express.js untuk membuat router utama
 Import router untuk entitas Peserta (CRUD peserta)
 Import router untuk autentikasi (register, login, dll.)
*/
const express = require("express");
const pesertaRoutes = require("./pesertaRoutes");
const authRouter = require('./auth')

// Buat instance router utama
const router = express.Router();

/**
 Pasang router peserta dengan prefix "/peserta"
 Contoh endpoint: /api/peserta, /api/peserta/:id
 Pasang router auth dengan prefix "/auth"
 Contoh endpoint: /api/auth/register, /api/auth/login
*/
router.use("/peserta", pesertaRoutes);
router.use("/auth", authRouter)

// Export router utama supaya bisa dipakai di app.js/server.js/index.js
module.exports = router;