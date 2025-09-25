//parent class
class Parent {
    constructor(greeting){
        this.salam = greeting;
    }

    parentSay(){
        console.log(`${this.salam} this is the parent class`);
    }
}

//child class

class Child extends Parent {
    constructor(greeting, name){
        super(greeting); //panggil constructor dari parent
        this.name = name;
    }

    childSay(nama){
        console.log(`${nama}, ${this.name} this is the child class`);
    }
}

var parent1 = new Parent("Hai");
parent1.parentSay();

const child1 = new Child("Hello", "Mark");
child1.childSay();