// Mr. Nhật
// Ms. Thư
// Mrs. Châu

let firstName = 'Châu';
let gender = false;
let married = true;

// if(gender == true) {
//     console.log('Mr.' + firstName);
// }
// else {
//     if (married == true) {
//         console.log('Mrs.' + firstName);
//     }
//     else {
//         console.log('Ms.' + firstName);
//     }
// }

console.log(`${gender == true ? "Mr" : (married == true ? "Mrs" : "Ms")}. ${firstName}`);
// gender == "Nam" ?
//     console.log('Mr.' + firstName) :
//     (married == true ?
//         console.log('Mrs.' + firstName) :
//         console.log('Ms.' + firstName))

let a = 10;
let b = 8;
let c = 15;

// 10x2 + 8x + 15 = 0

// console.log(a + 'x2' + ' + ' + b + 'x' + ' + ' + c + " = 0");
// console.log(`${a}x2 + ${b}x + ${c} = 0`);


// a^2 - b^2 = (a + b)(a - b)
// 10^2 - 8^2 = (10 + 8)(10 - 8)
