//Tipe data primitif
console.log("=== "+"Tipe Data Primitif"+" ===");
console.log(" ");
let nama = "Ali";
console.log(nama);

let umur = 20;
console.log(umur);
console.log(nama+": "+umur);

let lulus = true;
console.log(lulus);

let nilaiUjian = null;
console.log(nilaiUjian);

let jurusan;
console.log(jurusan);
jurusan = "Matematika";
console.log(jurusan);

let kode = Symbol("kode");
console.log(kode);

let populasi = 987654321n;
console.log(typeof populasi);

console.log(" ");
//Tipe Data Non Primitif
console.log("=== Tipe Data Non Primitif ===");
console.log(" ");

let buah = ["apel", "jeruk", "mangga"];
console.log(buah);

let siswa = {nama:"Ani", umur:17, lulus:true};
console.log(siswa);

function sapa(){
    return "Halo Dunia";
}
console.log(sapa());