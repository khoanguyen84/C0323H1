let numbers = [10, 20, 30, 40];

// for(let i = 0; i < numbers.length; i++){
//     numbers[i] = numbers[i] * 10;
// }

numbers = numbers.map(function(value, index){
    return value * 10;
})
console.log(numbers);