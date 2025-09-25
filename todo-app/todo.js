const { exit } = require('process');
const readline = require('readline');

let todos = []; // array menyimpan data tugas

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu(){
    console.log(`\n=== TO-DO LIST ===`);
    console.log('1. Tampilkan semua tugas');
    console.log('2. Tambahkan tugas');
    console.log('3. Hapus tugas');
    console.log('4. Keluar');
    rl.question('Pilih menu (1 - 4); ', handleMenu);
}

function handleMenu(choice){
    switch(choice.trim()){
        case '1': showTodos();
        break;
        case '2': addTodo();
        break;
        case '3': deleteTodo();
        break;
        case '4': console.log('Keluar dari program...');
        rl.close();
        break;
        default: console.log('Pilihan tidak valid. Coba lagi.');
        showMenu();
    }
}

function showTodos(){
    console.log('\n=== Daftar Tugas ===');
    if(todos.length === 0){
        console.log('(Belum ada tugas)');
    }else{
        todos.forEach((todo, index)=>{
            console.log(`${index + 1}. ${todo}`);
        });
    }
    showMenu();
}

function addTodo(){2
    rl.question('Masukkan tugas baru: ',(task)=>{
        if(task.trim()===''){
            console.log('Tugas tidak boleh kosong!');
        }
        else{
            todos.push(task.trim());
            console.log(`Tugas "${task.trim()}" berhasil ditambahkan.`);
        }
        showMenu();
    })
}

function deleteTodo(){
    if(todos.length === 0){
        console.log('Tidak ada tugas untuk dihapus.');
        return showMenu();
    }

    //showTodos();
    rl.question('Masukkan nomor tugas yang ingin dihapus:', (num)=>{
        const index = parseInt(num) - 1;
        if(isNaN(index) || index < 0 || index >= todos.length){
            console.log('Nomor tidak valid.');
        }else{
            const removed = todos.splice(index, 1);
            console.log(`Tugas "${removed}" berhasil dihapus.`);
        }
        showMenu();
    });
}

//Mulai program
showMenu();