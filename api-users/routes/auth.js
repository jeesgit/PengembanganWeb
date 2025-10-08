/**
 Import framework Express.js
 Import middleware validasi untuk user:
 Import controller untuk autentikasi:
 Buat instance router khusus untuk autentikasi (auth)
 */
const express = require('express')
const { registerValidation, loginValidation } = require('../middlewares/validateUser')
const { register, login } = require('../controllers/authController')
const authRouter = express.Router()

// Route untuk registrasi user baru (POST /auth/register)
authRouter.post("/register", registerValidation, register)

// Route untuk login user (POST /auth/login)
authRouter.post("/login", loginValidation, login)

// Export router ini supaya bisa digunakan di router utama
module.exports = authRouter