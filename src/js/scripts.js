class Person {
    // Leading with a # prevents external access. Starting the names with an underscore implies that they shouldn't be directly modified but they still can be.
    #firstName;
    #lastName;
    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }
    get firstName() {
        return this.#firstName;
    }
    set firstName(firstName) {
        this.#firstName = firstName;
    }
    get lastName() {
        return this.#lastName;
    }
    set lastName(lastName) {
        this.#lastName = lastName;
    }
    speak() {
        console.log("Hello!");
    }
}

class Student extends Person {
    #studentID;
    constructor(firstName, lastName, studentID) {
        // We can call the parent's constructor using the super keyword to save us some lines of setting variables.
        super(firstName, lastName);
        this.#studentID = studentID;
    }
    get studentID() {
        return this.#studentID;
    }
    set studentID(studentID) {
        this.#studentID = studentID;
    }
    speak() {
        // We can reference the parent's implementation of a given method by using super with the dot operator.
        // This is optional, and is used to append functionality to the parent's implementation without overwriting it.
        super.speak();
        // Here, we're appending an additional console.log() to that of the parent.
        console.log("I'm a student!");
    }
}

const peopleArray = [
    new Person("Jane", "Doe"),
    new Student("Bob", "Smith", 54321)
];
// Polymorphism means that all classes that inherit from Person will have /at least/ the functionality thereof, if not more. 
// Therefore, we can call any methods that belong to Person on its child classes without worry of exceptions.
for (person of peopleArray) person.speak();
