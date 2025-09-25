class Car{
    #carname;  //wajib deklarasi untuk private field
    constructor(brand){
        this.#carname = brand;
    }

    get carname(){
        return this.#carname;
    }

    set carname(x){
        this.#carname = x;
    }
}

newcar = new Car('Pajero');
console.log(newcar.carname);
//console.log(newcar.#carname);