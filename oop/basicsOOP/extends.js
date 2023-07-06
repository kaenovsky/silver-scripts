// extends keyword for OOP in JS

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `Look! ${this.name} is eating :)`;
    }
}

class Cat extends Pet {
    meow() {
        return 'meeeow!'
    }
}

class Dog extends Pet {
    bark() {
        return 'wooof!'
    }
}