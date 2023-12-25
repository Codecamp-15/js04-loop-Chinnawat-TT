// ให้เขียนโค้ดเพื่อหาผลรวมของจำนวนเต็มตั้งแต่ 1 ถึง 100 ตามเงื่อนไขดังนี้

// - หาผลรวมตัวเลขทุกตัว
// - หาผลรวมเฉพาะเลขคู่ และผลรวมเฉพาะเลขคี่
// - หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง (2^2 + 4^2 + ...) ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (3^2 + 6^2 + ...)
// let i = 1 ;
// let result = 0 ;

// for (i ; i<= 100; i++){
//     result +=i
    
// }
// console.log(result);
///////////////////////////////////////// ผลรวมเลขทุกตัว 5050
// 1.
// let i = 0;
// let result = 0;
// for(i ; i<= 100; i++){
//     if( i % 2 == 0){
//         result = result+i ;
//     }
    
// }
// console.log(result);
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
// let result = 0;
// for(i ; i<= 100; i++){
//     if( i % 2 == 0){

//     }else{

//         result = result+i ;
//     }
    
// }
// console.log(result);
//////////////////////////////////////// ผลรวมเลขคี่ 2500

//3.

// let sumEvenSquare = 0;
// let sumThirdSquare = 0 ;

// for (let i=1 ; i<= 100 ; i++){
//     if(i % 2 === 0){
//         // console.log(`${i}^2`)
//         sumEvenSquare = sumEvenSquare + (i ** 2) ;
//     }
//     if(i % 3 === 0){
//         // console.log(`${i}^2`)
//         sumThirdSquare = sumThirdSquare + (i ** 2) ;
//     }

// }
// console.log(`sumEvenSQ : ${sumEvenSquare}`);
// console.log(`sumThirdSQ : ${sumThirdSquare}`);
// console.log(`Result : ${sumEvenSquare - sumThirdSquare}`);