<<<<<<< HEAD
const readline = require('readline');

//buat interface untuk baca input terminal
const rl = readline.createInterface({input: process.stdin,
    output: process.stdout
});

//minta user memasukkan kalimat
rl.question('Masukkan kalimat: ', (input)=>{
    const jumlahKata = input.trim().split(/\s+/).length;
    const jumlahHuruf = input.replace(/\s+/g, '').length;
    console.log(`\n Hasil Analisis  :`);
    console.log(`- Jumlah kata      :   ${jumlahKata}`);
    console.log(`- Jumlah huruf     :   ${jumlahHuruf}`);
    rl.close();
});


=======
const readline = require('readline');

//buat interface untuk baca input terminal
const rl = readline.createInterface({input: process.stdin,
    output: process.stdout
});

//minta user memasukkan kalimat
rl.question('Masukkan kalimat: ', (input)=>{
    const jumlahKata = input.trim().split(/\s+/).length;
    const jumlahHuruf = input.replace(/\s+/g, '').length;
    console.log(`\n Hasil Analisis  :`);
    console.log(`- Jumlah kata      :   ${jumlahKata}`);
    console.log(`- Jumlah huruf     :   ${jumlahHuruf}`);
    rl.close();
});


>>>>>>> b1d3da267244640b017b4a299a59df354335aadf
