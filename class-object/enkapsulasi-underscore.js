class Car {
    constructor(brand){
        this._merk = brand;
    }

    sound(){
        return "vroomm... bip..bip";
    }

    bunyi(x){
        return x + ", My car makes a sound like: vroomm...bip..bip";
    }

    //method get dan set
    get carName(){
        return this._merk;
    }

    set carName(x){
        this._merk = x;
    }
        
    //method static
    static hai(){
        return "Hai, this is a static method";
    }
}

//instansiasi class
var pajero = new Car("Mitsubishi");
console.log(pajero._merk); //properti enkapsulasi_underscore hanya bisa diakses pertama kali menggunakan enkapsulasi underscore
pajero.merk = "toyota"; //properti dapat diubah dengan enkapsulasi atau tanpa enkapsulasi
console.log(pajero.merk); //properti yang diubah dengan enkapsulasi hanya bisa dibaca dengan enkapsulasi 
console.log(pajero.sound()); 
console.log(pajero.bunyi("Hello")); 

//akses method static langsung dari class
console.log(Car.hai()); 

