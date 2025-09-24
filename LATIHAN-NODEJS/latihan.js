function cekGenapGanjil(angka){
    //Validasi input harus berupa angka
    if(typeof angka  !== 'number'){
        console.error("Input harus berupa angka");
        return;
    }

    //cek apakah angka genap atau ganjilo
    if(angka % 2 === 0){
        console.log("Bilangan genap");
    }else{
        console.log("Bilangan ganjil");
    }
}

cekGenapGanjil(4);                  //Output: Bilangan Genap
cekGenapGanjil(13);                 //Output: Bilangan Ganjil
cekGenapGanjil("lima");             //Output: Input harus berupa angka