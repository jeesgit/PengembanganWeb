//Array satu dimensi
console.log("===Array===");
console.log(" ");

let angka = [10, 20, 30, 40];
console.log(angka);
console.log(angka[0]);
console.log(" ");

//Array multidimensi
let matriks = [[1, 2, 3], [4, 5, 6]];
console.log(matriks);
console.log(matriks[0][2]);
console.log(matriks[1][1]);
console.log(" ");

//Array of object
console.log("===Array of object===");
console.log(" ");

let siswa = [
    { nama: "Ali", nilai: 90},
    { nama: "Budi", nilai: 95},
    { nama: "Cici", nilai: 88}
];
console.log(siswa[0].nama);
console.log(siswa[1].nilai);
console.log(siswa.length);
console.log(" ");

//Array Iterasi
console.log("===Foreach===");
console.log(" ");

let nilai = [10, 20, 30];
nilai.forEach(function(elemen, index, array){
    console.log("Nilai ke-"+ index + ": "+elemen);
});
console.log(" ");

console.log("===Map===");
console.log(" ");

let nilai2 = [10, 20, 30];
let nilai3 = nilai2.map(function(elemen, index, array){
    return elemen*elemen;
});
console.log(nilai3);
console.log(" ");

console.log("===Filter===");
console.log(" ");

let nilai4 = [10, 20, 30];
let nilai5 = nilai4.filter(function(elemen, index, array){
    return elemen >= 20;
});
console.log(nilai5);
console.log(" ");

//Array Menambah dan menghapus
console.log("===Menambah/Menghapus Elemen===");
console.log(" ");

let data1 = [1, 2, 4, 5];
data1.splice(2, 0, 3);
console.log(data1);

data1.splice(2,2);
console.log(data1);

let data2 = data1.slice(1, 4);
console.log(data2);
console.log(data1);

let alphabets = ["a", "b", "c", "g", "f", "d", "e"];

alphabets.sort();
alphabets.reverse();
console.log(alphabets);
