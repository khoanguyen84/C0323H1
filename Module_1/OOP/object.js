let student_1 = ["Nhân",
    "10/10/2000",
    "Nam",
    "0935353535",
    ["Đá banh", "Cầu lông", "Đọc sách"],
    "nhan@gmail.com",
    ["English", "B1"]
];

let student_2 = {
    hobbies: ["Đá banh", "Cầu lông", "Đọc sách"],
    name: "Nhật",
    dob: "10/10/2001",
    gender: "Name",
    mobile: "0935114114",
    email: "nhat@gmail.com",
    languages: [
        {
            name: "English",
            level: "B2"
        },
        {
            name: "Japannese",
            level: "N2"
        }
    ]
}

console.log(student_1[6][0]);

// console.log(student_2["name"]);
console.log(student_2.languages[1].level)