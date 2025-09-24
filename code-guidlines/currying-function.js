function getGreeting(){
    var x = 0;
    for (i = 0; i < 1000000000; i++){
        x += 1;
    }
    return "Selamat Pagi"
}

function say(callback){
    var greeting = callback();
    return function(name){
        console.log(greeting, name);
    }
}

var users = ["Fuad", "Hasan", "Ismi", "Azhar"];
var sayGretting = say(getGreeting);

users.map(function(user){
    return sayGretting(user);
});