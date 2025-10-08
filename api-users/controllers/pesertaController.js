// Import helper untuk mendapatkan user yang sedang login dari JWT
const { getCurrentUser } = require("../config/libs")
// Import instance Prisma untuk query database
const { prisma } = require("../config/utils")

// Controller: CREATE peserta baru
const createPeserta = async (req, res) => {
    // Swagger documentation
    // #swagger.tags = ['Peserta']
    /* #swagger.security = [{ "bearerAuth": [] }] */

    let { name } = req.body   // ambil nama dari body
    let { status } = req.body // ambil status dari body
    try {
        // Ambil user saat ini dari token JWT
        const user = await getCurrentUser(req.user)

        // Buat peserta baru di database
        let peserta = await prisma.peserta.create({
            data: {
                name, 
                status, 
                userId: user.id // relasi ke user yang membuat
            }
        })

        // Respon sukses
        res.json({
            data: peserta, 
            message: "peserta was successfully created", 
            status: "success"
        })
        return
    } catch (err) {
        // Jika error (misalnya validasi DB), kirim error 400
        res.status(400).json({
            data: null,
            message: err,
            status: "error"
        })
    }
}

// Controller: GET semua peserta
const getPeserta = async (req, res) => {
    // #swagger.tags = ['Peserta']
    try {
        // Ambil semua peserta dari DB
        let peserta = await prisma.peserta.findMany()

        // Respon sukses
        res.json({
            data: peserta, 
            message: "peserta was successfully get", 
            status: "success"
        })
        return
    } catch (err) {
        // Jika error (misalnya DB tidak bisa diakses)
        res.status(404).json({
            data: null,
            message: err,
            status: "error"
        })
    }
}

// Controller: GET peserta berdasarkan ID
const getPesertaByID = async (req, res) => {
    // #swagger.tags = ['Peserta']  
    let { id } = req.params

    try {
        // Cari peserta dengan ID tertentu
        let peserta = await prisma.peserta.findFirst({
            where: {
                id: Number(id)
            }
        })

        // Tentukan pesan dan status sesuai hasil
        let message = peserta ? "peserta was successfully get" : "peserta not found"
        let status = peserta ? 200 : 404

        // Kirim response
        res.status(status).json({
            data: peserta, 
            message, 
            status: "success"
        })
        return
    } catch (err) {
        res.status(404).json({
            data: null,
            message: err,
            status: "error"
        })
    }
}

// Controller: UPDATE peserta berdasarkan ID
const updatePeserta = async (req, res) => {
    // #swagger.tags = ['Peserta']
    /* #swagger.security = [{ "bearerAuth": [] }] */
    let { name } = req.body
    let { status } = req.body
    let { id } = req.params

    try {
        // Ambil user yang sedang login
        const user = await getCurrentUser(req.user)

        // Update peserta
        let peserta = await prisma.peserta.update({
            data: {
                name, 
                status, 
                userId: user.id // update siapa user terakhir yang edit
            },
            where: {
                id: Number(id)
            }
        })

        res.json({
            data: peserta, 
            message: "peserta was successfully updated", 
            status: "success"
        })
        return
    } catch (err) {
        res.status(400).json({
            data: null,
            message: err,
            status: "error"
        })
    }
}

// Controller: DELETE peserta berdasarkan ID
const deletePeserta = async (req, res) => {
    // #swagger.tags = ['Peserta']
    /* #swagger.security = [{ "bearerAuth": [] }] */
    let { id } = req.params

    try {
        // Hapus peserta berdasarkan ID
        await prisma.peserta.deleteMany({
            where: {
                id: Number(id)
            }
        })

        res.json({
            data: null, 
            message: "peserta was successfully deleted", 
            status: "success"
        })
        return
    } catch (err) {
        res.status(400).json({
            data: null,
            message: err,
            status: "error"
        })
    }
}

// Export semua controller
module.exports = {
    createPeserta,
    getPeserta,
    getPesertaByID,
    updatePeserta,
    deletePeserta
}