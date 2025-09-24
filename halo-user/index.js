const readline = require('readline');

//buat interface untuk input/output
const rl = readline.createInterface({input: process.stdin,
    output: process.stdout
});

//minta nama user
rl.question('siapa nama kamu ? ', (nama)=>{
    console.log(`Halo ${nama}!`);
    rl.close();
});