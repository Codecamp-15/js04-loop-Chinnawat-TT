// ให้เขียนโค้ดเพื่อหาผลรวมของเลขโดด  
//     - รับค่าตัวเลขจากผู้ใช้งาน  
//     - แสดงผลลัพธ์เป็นผลรวมของเลขแต่ละหลัก

// <!-- 4596 === 4+5+9+6 -->

let n=prompt("Enter nuber")
let count = 0 ;

if (n<0) n = -n;

let sum =0;
while (n) {
    
    let reminder = n % 10;
    n = ( n - reminder ) / 10 ;
    sum += reminder ;
    count++;
}
console.log(count,sum);

//----- complete -----