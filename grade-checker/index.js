const readline = require('readline');

//membuat interface untuk input dari terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//fungsi untuk menentukan grade
function cekGrade(nilai){
    if(nilai >= 0 && nilai <= 60){
        return "E";
    }
    else if(nilai > 60 && nilai <= 69){
        return "D";
    }
    else if(nilai >= 70 && nilai <= 79){
        return "C";
    }
    else if(nilai >= 80 && nilai <= 89){
        return "B";
    }
    else if(nilai >= 90 && nilai <= 100){
        return "A";
    }
    else{
        return "tidak teridentifikasi";
    }

}

//minta user memasukkan nilai
rl.question("Masukkan nilai (0-100): ", (input)=>{
    const nilai = parseInt(input);

    //cek apakah input valid
    if(isNaN(nilai)){
        console.log("Input bukan angka!");
    }
    else{
        const grade = cekGrade(nilai);
        console.log(`Grade Nilai = ${grade}`);    
    }
    rl.close();
});