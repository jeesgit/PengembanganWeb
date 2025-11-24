import express from 'express';
export const router = express.Router();
import {
    getAllSiswas,
    getSiswaById,
    createSiswa,
    updateSiswa,
    deleteSiswa
} from '../controllers/siswaController.js';

router.get('/', getAllSiswas);
router.get('/:id', getSiswaById);
router.post('/', createSiswa);
router.put('/:id', updateSiswa);
router.delete('/:id', deleteSiswa);

export default router;