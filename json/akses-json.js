const fs = require("fs");

//Membuka dan membaca file json
//otomatis membuka
const teks = fs.readFileSync("data.json", "utf-8");
const data = JSON.parse(teks);

console.log("Isi awal :", data);

//Menulis data baru ke array
data.pop();
data.push({id: 4, nama: "Jeremy",usia:28});
data.shift();
data.unshift({id:1, nama:"Clark", usia:22});

//Menyimpan (menulis ulang)
//otomatis menutup
fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

console.log("Data berhasil ditambahkan dan disimpan ulang");
console.log("Isi akhir : ", data);

