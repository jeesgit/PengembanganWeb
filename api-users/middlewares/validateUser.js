// Middleware validasi untuk registrasi user
const registerValidation = (req, res, next)=>{
  const {nama, email, password} = req.body   // Ambil data dari body request

  // Jika salah satu field tidak ada (undefined) → balas 400 Bad Request
  if (nama === undefined || email === undefined || password === undefined){
    return res.status(400).json({message: "name, email and password is required"})
  }else{
    // Jika semua field ada → lanjut ke middleware/controller berikutnya
    next()
  }
}

// Middleware validasi untuk login user
const loginValidation = (req, res, next)=>{
  const { email, password} = req.body   // Ambil data dari body request

  // Jika email atau password tidak ada → balas 400 Bad Request
  if (email === undefined || password === undefined){
    return res.status(400).json({message: "email and password is required"})
  }else{
    // Jika input lengkap → lanjut ke middleware/controller berikutnya
    next()
  }
}

// Export middleware agar bisa digunakan di route auth
module.exports = { registerValidation, loginValidation };