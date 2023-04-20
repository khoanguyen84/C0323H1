// Bài 60: Hãy kiểm tra các chữ số của số nguyên dương n có tăng dần từ trái sang phải hay không

let numbers = 123456789;
let temp = numbers;
let divisor_1 = 0;
let divisor_2 = 0;
let isIncreament = true;
while(numbers > 0){
    divisor_1 = numbers % 10;
    numbers = parseInt(numbers/10);
    divisor_2 = numbers % 10;
    if(divisor_1 <= divisor_2){
        isIncreament = false;
        break;
    }
}

if(isIncreament == true) {
    console.log(`${temp} is increament`);
}
else{
    console.log(`${temp} is not increament`);
}