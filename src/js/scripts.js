console.log("Hello, world!");

// -- Anonymous Objects --

let myAnonymousObject = {
    name: "John Doe",
    age: 50,
    isCool: true
};

console.log(`${myAnonymousObject.name} is ${myAnonymousObject.age} years old and is ${myAnonymousObject.isCool?"cool":"not cool"}.`);

// -- Classes, Private Fields/Props and Getters/Setters --

class Triangle {
    // Leading with a # prevents external access. Starting the names with an underscore implies that they shouldn't be directly modified but they still can be.
    #base;
    #height;
    constructor(base, height) {
        this.#base = base;
        this.#height = height;
    }
    get area() {
        return this.#base * this.#height / 2;
    }
    get base() {
        return String(this.#base);
    }
    set base(base) {
        this.#base = Number(base);
    }
    get height() {
        return String(this.#height);
    }
    set height(height) {
        this.#height = Number(height);
    }
}


let myTriangle = new Triangle(5, 12);
myTriangle.base = 50;
console.log(`The area of a triangle with base ${myTriangle.base} and height ${myTriangle.height} is ${myTriangle.area}.`);


// -- Static Props --
class TestClass {
    static testValue = "Hello, world!";
}

// When you tag a property as static, that tells JavaScript that there can only be one copy of that property across all instances of the object.
// Therefore, you can pull the value out of the class without instantiating it, as seen below with TestClass.
// Triangle.base comes back as undefined because as a non-static property, it's expecting to be instantiated.
console.log(Triangle.base);
console.log(TestClass.testValue);

// Built-in static properties.
console.log(Math.PI);