// let i = 1 ;
// let n = 0 ;

// for (i ; i<= 100; i++){
//     if(n = n+i){

//         console.log(n);
//     }

// }
///////////////////////////////////////// ผลรวมเลขทุกตัว 5050
// 1.
// let sum = 0 ;

// for(let i = 1 ; i<=100 ; i++)
// // console.log(i);
// sum = sum +i ;

// console.log(sum);


// let i = 0;
// let n = 0;
// for(i ; i<= 100; i++){
//     if( i % 2 == 0){
//         n = n+i ;
//     }
//     console.log(n);
// }
///////////////////////////////////////// ผลรวมเลขคู่ 2550
// 2.
// let sumEven = 0 ;
// let sumOdd = 0 ;
// let sum 0 ;

// for(let i = 1 ; i<= 100 ; i++){
//     if( i % 2 == 0) {
//         sumEven += i
//     }else {
//         sumOdd += i;
//     }
// }

// console.log (sumEven, sum - sumEven,sumOdd);


// let i = 0;
// let n = 0;
// for(i ; i<= 100; i++){
//     if( i % 2 == 0){

//     }else{

//         n = n+i ;
//     }
//     console.log(n);
// }
//////////////////////////////////////// ผลรวมเลขคี่ 2500

// let sum1 = 0 ;
// let sum2 = 0 ;

// let i = 0;
// for(i ; i<=100 ;i++){
//     if(i % 2 == 0 ){
        
//     }
//     sum1= i*i
//     console.log(sum1);
    
// } 
/////////////////////////////////////////รวมคู่ยกกำลัง 10000
//3.

let sumEvenSquare = 0;
let sumThirdSquare = 0 ;

for (let i=1 ; i<= 100 ; i++){
    if(i % 2 === 0){
        // console.log(`${i}^2`)
        sumEvenSquare = sumEvenSquare + i ** 2 ;
    }
    if(i % 3 === 0){
        // console.log(`${i}^2`)
        sumThirdSquare = sumThirdSquare + i ** 2 ;
    }

}
console.log(`sumEvenSQ : ${sumEvenSquare}`);
console.log(`sumThirdSQ : ${sumThirdSquare}`);
console.log(`Result : ${sumEvenSquare - sumThirdSquare}`);