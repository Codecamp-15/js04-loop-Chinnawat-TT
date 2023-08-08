// ให้เขียนโค้ดเพื่อนับจำนวนหลักเลขโดด  
//     - รับค่าตัวเลขจากผู้ใช้งาน  
//     - แสดงผลลัพธ์เป็นจำนวนหลักของตัวเลข

console.log('Hello')

let n =+prompt('Enter number');
let count = 0;

if(n <0 ) n= -n ;

while (n >= 1) {
    console.log(n);
    count++;
    n = n / 10;
}
console.log(count);

//----- complete -----