const db = require('../db');

//CREATE -Tambah Produk
exports.createProduk = (req, res)=>{
    const { nama, harga, stok } = req.body;
    db.query(
        'INSERT INTO produk (nama, harga, stok) VALUES ( ?, ?, ?)',
        [nama, harga, stok],
        (err, result) =>{
            if (err) return res.status(500).json({ error:err.message});
            res.json({message:'Produk berhasil ditambahkan', id: result.insertId});
        }
    );
};

//READ _ Semua Produk
exports.getAllProduk = (req, res)=>{
    db.query('SELECT * FROM produk', (err, results)=>{
        if(err) return res.status(500).json({error:err.message});
        res.json(results);
    });
};

//READ - Produk By ID
exports.getProdukById = (req, res)=>{
    const {id} = req.params;
    db.query('SELECT * FROM produk WHERE id = ?', [id], (err, result)=>{
        if (err) return res.status(500).json({error:err.message});
        if (result.length === 0) return res.status(404).json({message: 'produk tidak ditemukan'});
        res.json(result[0]);
    });
};

//UPDATE _ Produk BY ID
exports.updateProduk = (req, res)=>{
    const {id} = req.params;
    const{nama, harga, stok} = req.body;
    db.query(
        'UPDATE produk SET nama = ?, harga = ?, stok = ? WHERE id = ?',
        [nama, harga, stok, id],
        (err, result)=>{
            if (err) return res.status(500).json({error:err.message});
            res.json({message: 'Produk berhasil diupdate'});
        }
    );
};

//DELETE - Produk By ID
exports.deleteProduk = (req, res)=>{
    const {id} = req.params;
    db.query('DELETE FROM produk WHERE id = ?', [id],
    (err, result)=>{
        if(err) return res.status(500).json({error: err.message});
        res.json({message: 'Produk berhasil dihapus'});
    });
};