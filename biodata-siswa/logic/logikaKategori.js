//mengimport data siswa
const siswa = require('../data/siswa');    //import data siswa

//menyimpan data tahun lulus dari objek siswa
let tahun = siswa["tahun lulus"];

//Membuat fungsi untuk menentukan kategori dari data yg diimport
function findCategory(){

let tahunLulus = tahun;

if (tahunLulus < 2019){
    return "Lulus Sebelum Covid";
}
else if(tahunLulus > 2021){
    return "Lulus Setelah Covid";
}
else{
    return "Lulus Saat Covid";
}

}

//menjalankan fungsi findCategory untuk melihat output
//console.log(findCategory());

//mengeksport fungsi findcategory agar bisa digunakan di file lain
module.exports = findCategory;

