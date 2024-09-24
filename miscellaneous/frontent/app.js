// const stu1 = {
//     name: "aman",
//     age: 25,
//     marks: 95,
//     getMarks: function() {
//         return this.marks
//     },
// };

// const stu2 = {
//     name: "naman",
//     age: 25,
//     marks: 92,
//     getMarks: function() {
//         return this.marks
//     },
// };

// const stu3 = {
//     name: "shas",
//     age: 25,
//     marks: 85,
//     getMarks: function() {
//         return this.marks
//     },
// };

let arr = [1, 2, 3];
let arr2 = [1, 2, 3];
arr.sayHello = () => {
    console.log("hello!, i am arr");
};

arr2.sayHello = () => {
    console.log("hello!, i am arr");
};

// factory function

function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi, my name is ${this.name}`);
        },
    };

    return person;
}

let p1 = PersonMaker("adam", 25);
let p2 = PersonMaker("eve", 25);

// New Operator

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function () {
    console.log(`Hi, my name is ${this.name}`);
};

let P1 = new Person("xyz", 25);
let P2 = new Person("abc", 25);
let P3 = new Person("pqr", 25);