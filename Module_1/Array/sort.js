// sort = sắp xếp
// 1. sắp xếp theo alphabel (mặc định)
// 2. sắp xếp theo number => xây dựng 1 hàm compare


// let jobs = ["java", "react", "angular", "vuejs"];
// console.log(jobs.sort().reverse());

let numbers = [50, 5, 1, 11, 100, 20, 2, 2000];
// 1, 2, 5, 11, 20, 50, 100, 2000
// console.log(numbers.sort());
function compare(n1, n2){
    // return -(n1 - n2);
    return n2 - n1;
}

console.log(numbers.sort(compare));