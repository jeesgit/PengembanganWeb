let data = new Date('1998-05-10');

let tanggal = data.toISOString().split('T')[0];
console.log(tanggal);