// Import Prisma client untuk query database
const { prisma } = require("../config/utils")
// Import bcrypt untuk hashing password
const bcrypt = require("bcrypt")
// Import jsonwebtoken untuk membuat token JWT
const jwt = require("jsonwebtoken")

// Controller: REGISTER user baru
const register = async (req, res) => {
    // Swagger documentation
    // #swagger.tags = ['User']

    const { nama, email, password } = req.body

    // Cek apakah email sudah terdaftar
    const user = await prisma.user.findFirst({
        where: { email }
    })

    if (user) {
        // Jika email sudah ada → kirim error 403
        res.status(403).json({
            data: null, 
            message: "Sorry Email Already Exist", 
            status: "Already Exist"
        })
    } else {
        // Hash password sebelum disimpan
        const hashedPassword = await bcrypt.hash(password, 10)

        try {
            // Simpan user baru ke database
            const newUser = await prisma.user.create({
                data: {
                    nama, 
                    email, 
                    password: hashedPassword
                }
            })

            // Kirim response sukses
            res.status(201).json({
                data: newUser, 
                message: "User was successfully register", 
                status: "success"
            })
            return
        } catch (err) {
            // Jika ada error saat create user
            res.status(400).json({
                data: null,
                message: err,
                status: "error"
            })
            return
        }
    }
}

// Controller: LOGIN user
const login = async (req, res) => {
    // #swagger.tags = ['User']

    const { email, password } = req.body

    // Cari user berdasarkan email
    const user = await prisma.user.findFirst({
        where: { email }
    })

    // Validasi: user harus ada + password harus cocok
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' })
    }

    // Buat JWT access token (isi payload hanya email)
    const accessToken = jwt.sign(
        { email }, 
        process.env.JWT_SECRET
    )

    // Kirim token ke client
    res.json({ accessToken })
}

// Export fungsi register & login
module.exports = {
  register,
  login
}