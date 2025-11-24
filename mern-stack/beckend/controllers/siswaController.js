import { PrismaClient } from "@prisma/client";

//instance dari prismaclient
const prisma = new PrismaClient();

export const getAllSiswas = async (req, res)=>{
    try{
        const siswas = await prisma.siswa.findMany();
        res.status(200).json({data: siswas});
    }catch (err) {
        res.status(500).json({error:err.message});
    }
}

export const getSiswaById = async (req, res)=>{
    try{
        const { id } = req.params;
        const siswa = await prisma.siswa.findUnique({
            where:{ id: Number(id)}
        });
        if(!siswa) return res.status(400).json({message:'Siswa tidak ditemukan'});
        res.status(200).json({data: siswa});
    }catch (err) {
        res.status(400).json({error:err.message});
    }
}

export const createSiswa = async (req, res)=>{
    try{
        const { kodeSiswa, namaSiswa, emailSiswa, jenisKelamin, tanggalLahir } = req.body;
        
        //validasi data request
        if( !kodeSiswa || !namaSiswa || !emailSiswa || !jenisKelamin || !tanggalLahir ){
            return res.status(400).json({message:'Data yang diinput tidak lengkap!'});
        }

        await prisma.$transaction(async (tx)=>{
        const siswa = await tx.siswa.create({
            data:{
                kodeSiswa, 
                namaSiswa, 
                emailSiswa, 
                jenisKelaminSiswa:jenisKelamin, tanggalLahirSiswa: new Date(tanggalLahir)
            }
        });
        res.status(201).json({data: siswa});
        });
    }catch(err){
        res.status(400).json({error:err.message});
    }

}

export const updateSiswa = async (req, res)=>{
    try{
        const { id } = req.params;
        const siswa = await prisma.siswa.findUnique({
            where:{
                id: Number(id)
            }
        })
        if(!siswa) return res.status(400).json({message:'Siswa tidak ditemukan'});

        const { kodeSiswa, namaSiswa, emailSiswa, jenisKelamin, tanggalLahir } = req.body;
        
        //validasi data request
        if( !kodeSiswa || !namaSiswa || !emailSiswa || !jenisKelamin || !tanggalLahir ){
            return res.status(400).json({message:'Data yang diinput tidak lengkap!'});
        }

        const updateSiswa = await prisma.siswa.update({
            where:{
                id:Number(id)
            },
            data:{
                kodeSiswa, 
                namaSiswa, 
                emailSiswa, 
                jenisKelaminSiswa:jenisKelamin, tanggalLahirSiswa: new Date(tanggalLahir)
            }
        })
        res.status(200).json({message:'Siswa berhasil diupdate', data: updateSiswa});
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

export const deleteSiswa = async (req, res)=>{
    try{
        const { id } = req.params;
        const checkSiswa = await prisma.siswa.findUnique({
            where:{id:Number(id)}
        });
        if(!checkSiswa) return res.status(400).json({message:'Siswa tidak ditemukan'});

        const siswa = await prisma.siswa.delete({
            where:{
                id:Number(id)
            }
        });
        res.status(200).json({message:'Siswa berhasil dihapus', data: siswa});
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

