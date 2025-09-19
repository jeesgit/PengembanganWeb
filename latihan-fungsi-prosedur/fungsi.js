function hitungLuas(sisi){
    return sisi*sisi;
}

//Fungsi untuk menghitung keliling persegi
function hitungKeliling(sisi){
    return 4 * sisi;
}

//Fungsi utama untuk menampilkan hasil
function tampilkanPersegi(sisi){
    console.log("============ Persegi ============");
    console.log("Sisi               :", sisi);
    console.log("Luas Persegi       :", hitungLuas(sisi));
    console.log("Keliling Persegi   :", hitungKeliling(sisi));
    console.log("=================================");

}

//Pemanggilan fungsi
tampilkanPersegi(7);
tampilkanPersegi(23);