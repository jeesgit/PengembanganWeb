//mengimport data siswa
const siswa = require('../data/siswa');    //import data siswa

const aplikasi = require('../config/aplikasi');    //import nama aplikasi

//mengimport fungsi findCategory
const findCategory = require('./logikaKategori');

//membuat fungsi untuk menampilkan biodata
function tampilkanBiodata(){
    console.log(`=== ${aplikasi} ===`);
    console.log(`Nama               : ${siswa.nama}`);
    console.log(`Umur               : ${siswa.umur}`);
    console.log(`Asal               : ${siswa.asal}`);
    console.log(`Sekolah            : ${siswa.sekolah}`);
    console.log(`Tahun Lulus        : ${siswa["tahun lulus"]}`);
    console.log(`Kategori Kondisi   : ${findCategory()}`) ;
    console.log("");
    console.log("=== INFO APLIKASI ===");
    console.log(`Versi               : 1.0.0`);
    console.log(`Penanggung Jawab    : Balai Pelatihan Vokasi dan Produktivitas Sorong`);
}

//menjalankan fungsi tampilkanBiodata untuk melihat output
//tampilkanBiodata();

//mengeksport fungsi tampilkanBiodata agar bisa digunakan di file lain
module.exports = tampilkanBiodata;

