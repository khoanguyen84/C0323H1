// tập hợp những đối tượng (object) có cùng thuộc tính (properties) và hành vi/hành đông (methods)
// gọi là 1 lớp
// contructor (phương thức khởi tạo)

// Lưu ý khi định nghĩa class: Tên class phải theo format PascalCase
function Student(fullname, age, gender){
    // properties
    this.fullname = fullname;
    this.age = age;
    this.gender = gender;

    // methods
    this.greeting = function(){
        return `Hello, I'm ${this.fullname}, and I'm ${this.age} years old`;
    }
}


let student_1 = new Student("Thắng", 18, "Nam");
let student_2 = new Student("Thái", 20, "Nam");

console.log(student_1.greeting());
console.log(student_2.greeting());
