// - ให้เขียนโค้ดเพื่อรับ input มาเป็นตัวเลข
// - โดยให้รับมาเรื่อยๆ จนกว่า ผู้ใช้จะพิมพ์ 0, เลขลบ, String ว่าง, กด cancel หรือ esc จึงหยุดรับตัวเลข
// - ให้หาผลรวมและค่าเฉลี่ยของเลขที่ผู้ใช้งานกรอกเข้ามา

// ```js
// /*
// GET : Input
// CHECK : number
// IF number
//     ADD number to sum
//     ADD 1 to count
//     BACK TO LINE 7 
// ELSE 
//     PRINT sum
//     PRINT average
// */ 

// ```

let ansNumber = "" ;
let isEmpty ;
let isNan ;
let outOfRange  ;

do {
        ansNumber = prompt("Enter your magic number")|| "" ; // null || ""  
        isEmpty = ansNumber.trim() === "";
        isNan = isNaN(ansNumber);
        outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99 ;

        if(isEmpty || isNan){
            alert ( "Invalid Input , Try : 1-99") 
        }else if(outOfRange){
            alert("Invalid Input , Try :1-99")
        }
    
} while (isEmpty || isNan);