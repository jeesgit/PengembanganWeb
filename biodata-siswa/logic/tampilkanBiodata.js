//import objek
const aplikasi = require('../config/aplikasi');

//import objek siswa
const siswa = require('../data/siswa');

//import fungsi findCategory
const findCategory = require('./logikaKategori');

//membuat fungsi untuk menampilkan biodata
function tampilkanBiodata(){
    console.log(`=== ${aplikasi.APP_NAME} ===`);
    console.log(`Nama               : ${siswa.nama}`);
    console.log(`Umur               : ${siswa.umur}`);
    console.log(`Asal               : ${siswa.asal}`);
    console.log(`Sekolah            : ${siswa.sekolah}`);
    console.log(`Tahun Lulus        : ${siswa["tahun lulus"]}`);
    console.log(`Kategori Kondisi   : ${findCategory()}`) ;
    console.log("");
    console.log(`=== ${aplikasi.APP_CLOSER} ===`);
    console.log(`Versi               : ${aplikasi.APP_VERSI}`);
    console.log(`Penanggung Jawab    : ${aplikasi.PENANGGUNG_JAWAB}`);
}

//menjalankan fungsi tampilkanBiodata untuk melihat output
//tampilkanBiodata();

//eksport fungsi tampilkanBiodata agar bisa digunakan di file lain
module.exports = tampilkanBiodata;

