// ให้เขียนโค้ดเพื่อหาจำนวนเฉพาะตั้งแต่ 1 ถึง 100
// -
// function primeNumber (num){
//     if(num<=1 ) return false
//     if(num<=3 ) return true
//     if(num % 2 === 0 ||num % 3 === 0 ) return false
//     for(let i = 5 ; i * i<=num; i+=6){
//         if(num % i === 0||num %(i+2)=== 0){
//             return false
//         }
//     }
//     return true
// }
// for(let i = 1 ; i<=100; i++){
//     if(primeNumber(i)){
//         console.log(i)
//     }
// }


// program : จำนวนที่กำหนดให้เป็นจำนวนเฉพาะหรือเปล่า ?

// let n=5 ;
// let isPrime = true ;



// for(let divider = 2 ; divider < n ; divider++){
//         // divider 2,3,4.....n-1
//     if(n%divider == 0){
//         isPrime = false
//         //

//     }

// }
// if(isPrime){
//     alert(`number${n} is prime number`)
// }else {
//     alert(`number${n} not prime number`)
// }



for(let n = 2; n <=100; n++){

    let isPrime = true ;

    for(let divider = 2 ; divider < n ; divider++){
    
            // divider 2,3,4.....n-1
        if(n % divider == 0) {
            isPrime = false ;
            break ; // <--- ใส่เพื่อให้โปรเเกรมทำงานไวขึ้น ถ้าโปรเเกรมต้องคำนวนเยอะๆ
        }
            
            //n=3   3%2 !=0  =>isPrime = true
            //n=4   4%2  =0 =>isPrime = false
            //n=5   5
    
        
    }

    if (isPrime) console.log(n)
}