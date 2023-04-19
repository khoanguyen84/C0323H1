// Bài 30: Cho số nguyên dương n. Kiểm tra xem n có phải là số hoàn thiện hay không
let min = 1;
let max = 10000;
// let perfectNumber = 7;
for (let perfectNumber = min; perfectNumber <= max; perfectNumber++) {
    let total = 0;
    for (let divisor = 1; divisor < perfectNumber; divisor++) {
        if (perfectNumber % divisor == 0) {
            total += divisor
        }
    }
    if(perfectNumber == total){
        console.log(perfectNumber);
    }
    
}


// console.log(`${perfectNumber} ${perfectNumber == total ?
//     'is perfect number' :
//     'is not perfect number'} `);
