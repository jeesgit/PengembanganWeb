// Import framework Express.js untuk membuat router
const express = require("express");  

/**
Import fungsi-fungsi controller untuk entitas Peserta (CRUD):
- createPeserta : menambah peserta baru
- getPeserta    : mengambil semua peserta
- getPesertaByID: mengambil peserta berdasarkan ID
- updatePeserta : mengubah data peserta
- deletePeserta : menghapus peserta
*/
const {
    createPeserta,
    getPeserta,
    getPesertaByID,
    updatePeserta,
    deletePeserta,
} = require("../controllers/pesertaController");

// Middleware untuk validasi data peserta sebelum disimpan/diupdate
const validatePeserta = require("../middlewares/validatePeserta");

// Middleware untuk autentikasi JWT (hanya user login yang boleh CRUD)
const { authenticateJWT } = require('../middlewares/auth');

// Buat instance router khusus untuk peserta
const router = express.Router();

// Route untuk mengambil semua peserta (GET /api/peserta)
router.get("/", getPeserta);

// Route untuk mengambil peserta berdasarkan ID (GET /api/peserta/:id)
router.get("/:id", getPesertaByID);

/**
Route untuk menambah peserta baru (POST /api/peserta)
Middleware: harus login (authenticateJWT) + validasi data (validatePeserta)
*/
router.post("/", authenticateJWT, validatePeserta, createPeserta);

/**
Route untuk mengupdate peserta berdasarkan ID (PUT /api/peserta/:id)
Middleware: login + validasi data
*/
router.put("/:id", authenticateJWT, validatePeserta, updatePeserta);

/** 
Route untuk menghapus peserta berdasarkan ID (DELETE /api/peserta/:id)
Middleware: hanya login (tidak perlu validasi data)
*/
 router.delete("/:id", authenticateJWT, deletePeserta);

// Export router supaya bisa digunakan di app utama
module.exports = router;