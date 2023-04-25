function generateArray(size, min, max) {
    let numbers = new Array(size);
    for (let i = 0; i < size; i++) {
        numbers[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return numbers;
}

function displayArray(array) {
    for (let i = 0; i < array.length; i++) {
        document.write(`${array[i]} <br>`)
    }
}

function findMaxValue(array) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max;
}

function executor(size, min, max) {
    let numbers = generateArray(size, min, max);
    let maxValue = findMaxValue(numbers);
    document.write(`Max value is: ${maxValue}`)
    displayArray(numbers);
}

executor(10, 15, 55)
executor(20, 150, 550)
executor(15, 23, 67)