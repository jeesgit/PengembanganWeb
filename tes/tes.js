for (let i =1; i<=3;i++){
    if (i ===2) continue;
    console.log(i);
}

function cek(){
    console.log("sukses");
}
let hasil = cek();
console.log("hasil:", hasil);

function tes(){
    let data = ["1", "2", "3"];
    return data.map(Number);
}
console.log(tes());