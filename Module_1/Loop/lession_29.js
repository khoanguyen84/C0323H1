let number = 1000000;
let maxDivisor = 0;

for (let divisor = 2; divisor <= number; divisor++) {
    // if (number % divisor == 0) {
    //     if (divisor % 2 != 0) {
    //         if (maxDivisor < divisor) {
    //             maxDivisor = divisor;
    //         }
    //     }
    // }
    if (number % divisor === 0 && divisor % 2 !== 0 && maxDivisor < divisor) {
        maxDivisor = divisor;
    }
}

console.log(maxDivisor);