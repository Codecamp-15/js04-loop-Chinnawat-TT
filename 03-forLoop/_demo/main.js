// console.log('Hello loop')

// console.log('strating.....')

// () = parantersis  =วงเล็บ
// {} = bracket = ปีกกา
// [] = square bracket = ก้ามปู

//Ex.1
// for( let i =0 ; i < 5 ; i++){
//     console.log(`i=${i}`);

//     console.log('>> Hello <<')
//     console.log('>>> codecamp <<<')
// }

// Ex.2 FizzBuzz

// for (let i = 0; i <= 20; i++){
//         if(i % 3 == 0 && i % 5 == 0){

//             console.log("FizzBuzz");
//         }
//         else if (i % 5 == 0){
//             console.log("Buzz");
//         }
//         else if (i % 3 == 0){
//             console.log("Fizz");
//         }else {
//             console.log(i);
//         }

// }

//Ex.3 skip Fizz

// for (let i = 0; i <= 20; i= i+1){
//     if(i % 3 == 0 && i % 5 == 0){

//         console.log("FizzBuzz");
//     }
//     else if (i % 5 == 0){
//         console.log("Buzz");
//     }
//     else if (i % 3 == 0){
//          continue;
//     }else {
//         console.log(i);
//     }

// }
    
// Ex.3 B
// for (let i = 0; i <= 20; i= i+1){
//     if(i % 3 == 0 && i % 5 == 0){

//         console.log("FizzBuzz");
//     }
// }

//Ex4 concat string

let str ="" 

// for(let i = 1 ; i <=10; i++){

// // Guard
//     if (i % 3 ==0)
//         continue;

//     str =str + i ;

// }
// console.log(str);

//Ex5 remove vowel (a, e, i, o, u)

let src = "codecamp"
let res = ""

// src.length ==>8
// src[0] = c

// for(let i= 0; i<8; i++){
//     console.log(i,src[i])
// }

// for(let i= 0; i<src.length; i++){
//     // console.log(i,src[i])
//     let c = src[i];
//     let isVowel = c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' ;
//     if (isVowel) continue;
//     res = res + src[i]
// }

// console.log(res);

// Advance : Nested loop ;
// Multiplication Table

for( let i =2; i<=12; i++){

    // console.log(`${i}*1 = ${i*1}`);
    // console.log(`${i}*2 = ${i*2}`);
    // console.log(`${i}*3 = ${i*3}`);



    
        for(let j = 1; j<=12; j++){
            console.log(`${i}*${j}=${i*j}`)
    
        }
        console.log('\n');

}

console.log('END...')

