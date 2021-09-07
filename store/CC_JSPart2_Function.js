/////////////////////////////////
// Loop
//ข้อ 6
//ใช้ การเก็บข้อมูล

/*
let star = '*';
for (let i=1; i< 4; i++) {
    console.log(star)
    star = star + '*';
}
*/

/*
let star = "*" ;
let result = [] ;
let i = 0;

while (i < 5) {

}
*/

/*
const test = ["a", "b", "c"].join("-");
console.log(test);

"\n" ขึ้นบรรทัดใหม่
cancel = ค่าว่าง ;

*/

//ข้อ 8
//ติดลบหยุด, String เปล่า

/*
let input = 0 ;
let sum = 0 ;
let avg = 0;
let n = 0;

while (true) {

    input = prompt('Input number');

    if (input === '0' || input < 0 || input == null || input.trim() === "" || !(+input)) 
    
    {
        break;
    }
    sum = sum + +input ;
    n++;
}

avg = sum /n;

console.log(sum);
console.log(avg);

*/

//ข้อ10
// จำนวน loop

/*
for (let i =2 ; i<=100 ; i++){
    let count = 0;
    for (let j = 2; j <=100; j++) {
        if (i%j===0) {
            count++ //หารลงตัวให้เก็บ หรือนับ
        }
    }
if (count === 1)  {
    console.log(i)
}
}

*/

/*
for (let i =2 ; i<=100 ; i++){
    let count = 0;
    for (let j = 2; j <=100; j++) {
        if (i%j===0) {
            // console.log(i,j)
            count++ //หารลงตัวให้เก็บ หรือนับ
        }
    }
if (count === 1)  {
    console.log(i)
}
}

*/


//ข้อ 9

////////////////////////////////////////////
//Arrow Function
//ข้อ 10
// หัวใจของฟังก์ชัน คือ input และ output
// input : ปีเกิด // argument
// output :  อายุ // return

/*
const calAge = birthYear => {
    let age = 2020 - birthYear ;
    return age
}

calAge(2019);
calAge(2018);

*/
///////////////////////////////////////////
