// 1. viết hàm tạo ra 1 mảng 2 chiều với n và m, các giá trị [min, max]
// 2. viết hàm hiển thị mảng 2 chiều trên
// 3. viết hàm đếm xem trong mảng 2 chiều trên có bao nhiêu số chẵn
// 4. viết hàm đếm xem trong mảng 2 chiều trên có bao nhiều số nguyên tố

function createMatrix(n, m, min, max) {
    let matrix = new Array(n);
    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(m);
        for (let j = 0; j < m; j++) {
            matrix[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
        }
    }
    return matrix;
}

function displayMatrix(matrix){
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            document.write(`${matrix[i][j]}\t`)
        }
        document.write('<br>')
    }
}

function countEvenNumber(matrix){
    let count = 0;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] % 2 == 0){
                count ++;
            }
        }
    }
    return count;
}

function isPrime(number){
    for(let divisor = 2; divisor < number; divisor++){
        if(number % divisor == 0){
            return false;
        }
    }
    return true;
}


function countOfPrime(matrix){
    let count = 0;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(isPrime(matrix[i][j]) == true){
                count ++;
            }
        }
    }
    return count;
}

let matrix = createMatrix(20, 30, 20, 90)
displayMatrix(matrix);
let count = countEvenNumber(matrix);
document.write(`Number of even in matrix is: ${count} <br>`)
let countPrime = countOfPrime(matrix);
document.write(`Count of prime in matrix is: ${countPrime}`)