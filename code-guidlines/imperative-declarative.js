<<<<<<< HEAD
//Imperative: Bagaimana menghitung jumlah bilangan genap dalam array
console.log("=== Imperative Pattern ===");
function hitungBilanganGenap(arr){
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if(arr[i] % 2 ==0){
            count++;
        }
    }
    return count;
}

var angka = [1, 2, 3, 4, 5, 6];
var jumlahGenap = hitungBilanganGenap(angka);
console.log(jumlahGenap);

console.log("=== Declarative Pattern ===");
var bilangan = [1, 2, 3, 4, 5, 6];
var genap = bilangan.filter(function(x){
    return x % 2 ==0;
}).length;

console.log(genap);
=======
//Imperative: Bagaimana menghitung jumlah bilangan genap dalam array
console.log("=== Imperative Pattern ===");
function hitungBilanganGenap(arr){
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if(arr[i] % 2 ==0){
            count++;
        }
    }
    return count;
}

var angka = [1, 2, 3, 4, 5, 6];
var jumlahGenap = hitungBilanganGenap(angka);
console.log(jumlahGenap);

console.log("=== Declarative Pattern ===");
var bilangan = [1, 2, 3, 4, 5, 6];
var genap = bilangan.filter(function(x){
    return x % 2 ==0;
}).length;

console.log(genap);
>>>>>>> b1d3da267244640b017b4a299a59df354335aadf
