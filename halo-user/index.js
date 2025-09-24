<<<<<<< HEAD
const readline = require('readline');

//buat interface untuk input/output
const rl = readline.createInterface({input: process.stdin,
    output: process.stdout
});

//minta nama user
rl.question('siapa nama kamu ? ', (nama)=>{
    console.log(`Halo ${nama}!`);
    rl.close();
=======
const readline = require('readline');

//buat interface untuk input/output
const rl = readline.createInterface({input: process.stdin,
    output: process.stdout
});

//minta nama user
rl.question('siapa nama kamu ? ', (nama)=>{
    console.log(`Halo ${nama}!`);
    rl.close();
>>>>>>> b1d3da267244640b017b4a299a59df354335aadf
});