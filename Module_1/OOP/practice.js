// Định nghĩa class Staff
// Có properties: fullname, email, mobile, dayswork, salarayPerDay
// Có methods: calculatorSalaray

// tạo 3 object từ class Staff trên
// thực thi phương calculatorSalary để xem lương của từng object

class Staff{
    constructor(fullname, dayswork, salarayPerDay){
        this.fullname = fullname;
        this.dayswork = dayswork;
        this.salarayPerDay = salarayPerDay
    }

    calculatorSalary(){
        return this.dayswork * this.salarayPerDay
    }
    setEmail(email){
        this.email = email;
    }
    setMobile(phoneNumber){
        this.mobile = phoneNumber
    }
}

let huy = new Staff("Huy", 20, 200000);
huy.setEmail("huy@gmail.com");
huy.setMobile("0935123456");
console.log(huy);
// let thai = new Staff("Thái", 10, 210000);
// let dat = new Staff("Đạt", 23, 220000);

// console.log(huy.calculatorSalary());
// console.log(thai.calculatorSalary());
// console.log(dat.calculatorSalary());