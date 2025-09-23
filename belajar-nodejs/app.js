/**
 * Aplikasi Node.js paling sederhana
 * Menampilkan nama aplikasi dan memanggil fungsi
 */

const namaApp = require('./config/namaApp');    //import nama aplikasi
const tampilkan = require('./fungsi/tampilSalam'); // import fungsi

//menampilkan nama aplikasi ke terminal
console.log("Aplikasi:", namaApp);

//Menampilkan salam ke pengguna
tampilkan();