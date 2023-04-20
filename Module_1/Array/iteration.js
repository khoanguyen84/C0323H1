let jobs = ["java", "react", "angular", "angular", "vuejs"];
// for
// for(let i = 0; i < jobs.length; i++){
//     console.log(jobs[i]);
// }

// while
// let i = 0;
// while(i < jobs.length){
//     console.log(jobs[i]);
//     i++;
// }

// do..while
// let i = 0;
// do{
//     console.log(jobs[i]);
//     i++;
// }
// while(i < jobs.length)

// for..in
// for(let index in jobs){
//     console.log(`${index} ${jobs[index]}`);
// }

// for..of
// for(let job of jobs){
//     console.log(`${jobs.indexOf(job)} ${job}`);
// }
// // forEach

jobs.forEach(function(value, index){
    console.log(`${index} ${value}`);
})