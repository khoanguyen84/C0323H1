// function Student(fullname, age, gender){
//     // properties
//     this.fullname = fullname;
//     this.age = age;
//     this.gender = gender;

//     // methods
//     this.greeting = function(){
//         return `Hello, I'm ${this.fullname}, and I'm ${this.age} years old`;
//     }
// }

class Student {
    constructor(fullname, age, gender) {
        this.fullname = fullname;
        this.age = age;
        this.gender = gender;
    }
    greeting() {
        return `Hello, I'm ${this.fullname}, and I'm ${this.age} years old`;
    }
}

let student_1 = new Student("Thắng", 18, "Nam");
let student_2 = new Student("Thái", 20, "Nam");

console.log(student_1.greeting());
console.log(student_2.greeting());
