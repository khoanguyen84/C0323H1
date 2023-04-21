let numbers = [4, 6, 3, 3, 5, 6, 7, 6, 8, 8, 9, 10, 3, 45];

let result = numbers.filter(function(number, index){
    return number > 5 && number < 10
})

console.log(result);