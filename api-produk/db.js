const mysql = require('mysql2');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'mysql2025',
    database : 'toko_db'
});

db.connect((err)=>{
    if(err) throw err;
    console.log('koneksi database berhasil!');
});

module.exports = db;