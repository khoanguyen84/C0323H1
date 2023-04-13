// let kWh = 440;

// if (kWh >= 0 && kWh <= 50) {
//     console.log('Bậc thang 1');
// } else if (kWh >= 51 && kWh <= 100) {
//     console.log('Bậc thang 2');
// } else if (kWh >= 101 && kWh <= 200) {
//     console.log('Bậc thang 3');
// } else if (kWh >= 201 && kWh <= 300) {
//     console.log('Bậc thang 4');
// } else if (kWh >= 301 && kWh <= 400) {
//     console.log('Bậc thang 5');
// } else {
//     console.log('Bậc thang 6');
// }

// let kWh = -70;
// switch (true) {
//     case (kWh >= 0 && kWh <= 50): {
//         console.log('Bậc thang 1');
//         break;
//     }
//     case (kWh >= 51 && kWh <= 100): {
//         console.log('Bậc thang 2');
//         break;
//     }
//     case (kWh >= 101 && kWh <= 200): {
//         console.log('Bậc thang 3');
//         break;
//     }
//     case (kWh >= 201 && kWh <= 300): {
//         console.log('Bậc thang 4');
//         break;
//     }
//     case (kWh >= 301 && kWh <= 400): {
//         console.log('Bậc thang 5');
//         break;
//     }
//     case (kWh > 400): {
//         console.log('Bậc thang 6');
//         break;
//     }
//     default : {
//         console.log('Số kWh không hợp lệ');
//         break;
//     }
// }

let day = 8;

switch (true) {
    case (day >= 1 && day <= 5): {
        console.log('weekday');
        break;
    }
    case (day == 6 || day == 7): {
        console.log('weekend');
        break;
    }
    default: {
        console.log('Invalid');
        break;
    }
}
// switch (day) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5: {
//         console.log('weekday');
//         break;
//     }
//     case 6:
//     case 7: {
//         console.log('weekend');
//         break;
//     }
//     default: {
//         console.log('Invalid');
//         break;
//     }
// }

// switch (day){
//     case 1 : {
//         console.log('weekday');
//         break;
//     }
//     case 2 : {
//         console.log('weekday');
//         break;
//     }
//     case 4 : {
//         console.log('weekday');
//         break;
//     }
//     case 5 : {
//         console.log('weekday');
//         break;
//     }
//     case 6 : {
//         console.log('weekday');
//         break;
//     }
//     case 7 : {
//         console.log('weekend');
//         break;
//     }
//     case 8 : {
//         console.log('weekend');
//         break;
//     }
//     default: {
//         console.log('Invalid');
//         break;
//     }
// }