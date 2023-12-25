
// program
// ให้เขียนเกมส์ทายตัวเลขสำหรับผู้เล่นสองคน โดยมีเงื่อนไขดังนี้

// - ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนแรกพิมพ์เลข ที่อยู่ระหว่าง 1 ถึง 99 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร
// - ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนที่สองทายเลข จนกว่าจะถูก
// - ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น
// - หากพิมพ์ถูกให้แสดงคำว่าถูกต้อง และให้แสดงจำนวนครั้งที่ทาย

// program 1 : input user 1

// let ansNumber =prompt("Enter your magic number") // ==> null, string,

// // ansNumber === null || ansNumber.trim() === "" || isNaN(ansNumber )

// // let isNull = ansNumber === null ;
// // let isEmpty = ansNumber.trim() === ""  // bug
// // let isNan = isNaN(ansNumber )


// let isValid = ansNumber === null || ansNumber.trim() === "" || isNaN(ansNumber ) ;
// let outOfRange = Number(ansNumber)< 1 || Number(ansNumber)> 99 ;
// let isInRang = Number(ansNumber) >= 1 && Number(ansNumber)<=99 ;
// if (isValid){
//     alert("Invalid Input")
// } else if (outOfRange){
//     alert("Invalid Range")
// }else if (isInRang){
//     alert("Try to guess number")
// }

// V.2  : รับ  input ได้เรื่อยๆจนกว่าจะพิมพ์ถูก / แต่ให้กด Esc เพื่อจบโปรเเกรมได้

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


// program 2 : guess


// ทายซ้ำ
// Hint outOfRang
// Hint Invalid number
// too high
// too low
// correct

let guessNumber ;

do {
        guessNumber = prompt("Enter your Ans")|| "" ;    // null || ""  
        isEmpty = guessNumber.trim() === "";
        isNan = isNaN(guessNumber);
        outOfRange = Number(guessNumber) < 1 || Number(guessNumber) > 99 ;

        if(isEmpty || isNan){
            alert ( "Invalid Input , Try : 1-99") ;
        }else if(outOfRange){
            alert("Invalid Input , Try :1-99");
        }else if(+guessNumber > +ansNumber){
            alert("Too High");
        }else if(+guessNumber < +ansNumber){
            alert("Too Low");
        }else if(+guessNumber === +ansNumber){
            alert("Correct");
        }
}while(+guessNumber != +ansNumber)