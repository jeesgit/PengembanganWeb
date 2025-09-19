try{
    let hasil = x + 10; //x belum didefinisikan
    console.log("Hasil: ", hasil);
}
catch(error){
    console.log("kesalahan: ", error.message);
}