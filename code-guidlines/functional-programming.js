//Recursive FUnction
console.log("=== Recursive Function ===");

//program untuk menghitung mundur hingga angka 1
function countDown(number){
    //menampilkan number
    console.log(number);

    //mengurangi nilai number
    var newNumber = number -1 ;

    //menjalankan fungsi countDown lagi jika number masih diatas 0
    if(newNumber > 0){
        countDown(newNumber);
    }
}

countDown(4);

console.log("")

console.log("=== Currying Function ===");
function tambah(a, b){
    return a + b ;
}
console.log(tambah(2, 5));

function tambah (a){
    return function (b){
        return a + b;
    }
}

console.log(tambah(2)(5));

console.log("");

function getGreeting(){
    var x = 0;
    for (i = 0; i < 1000000000; i++){
        x += 1;
    }
    return "Selamat Pagi"
}

function say(callback, name){
    var greeting = callback();
    console.log(greeting, name)
}

var users = ["Fuad", "Hasan", "Ismi", "Azhar"];

users.map(function(user){
    return say(getGreeting, user);
});