//Lab1.7
// function calCMin(num1,num2){

//     if(num1>num2){
//         return alert(num2);
        
//     }else{
//         return alert(num1);
//     }
    
// }

// calCMin(+prompt("Enter num1:"),+prompt("Enter num2:"));

//เฉลย
////////////////////////////////////////////////////
// function calaMin(num1,num2){
//     if(num1 < num2) return num1;
//     return num2;
// }

////////////////////////////////////////////////////
// function calaMin(num1,num2){
//     return num1 < num2 ? num1 : num2;
// }

//Lab1.8
// function login(username,password){
//     if(username == 'admin' && password == 'P@ssw0rd'){
//         return alert("Successful");
//     }else{
//         return alert("Unsuccessful");
//     }
// }
// login(prompt('Enter username:'),prompt('Enter password:'));


//Lab1.9
/////////////////เฉลย///////////////////

// function isPrime(num){
//     for(let i = 2; i <= num; i++){
//         if(num%j === 0) return true;
//     }
//     return false
// }

// function logPrimeNumber(number){
//     for(let i = 2; i <= number; i++){
//     if(isPrime(i)) console.log(i);
//     }
// }



///////////////////ทำเอง//////////////////


//-------------1.9.1
// let j;
// let num;
// let isPrimeNum;

// function prime(num){

//     isPrimeNum = true;

//     for(j = 2; j <= num; j++){
        
//         if(num%j === 0 && num !== j){
//             isPrimeNum = false;
//         }
//     }

//     if(isPrimeNum === true && num !== 1){
//         return alert('Is a prime');
//     }return alert('Is a not prime');
    
// }

// prime(+prompt('Input num: '));

//-------------1.9.2

// let j;
// let num;
// let isPrimeNum;
// let i;

// function prime(num){
//     num = +prompt('Input num: ');

//     for(i = 2; i <= num; i++){

//         isPrimeNum = true;

//         for(j = 2; j <= i ; j++){
    
//             if(i % j === 0 && i !== j){
//             isPrimeNum = false;
//             }
//         }
//         if(isPrimeNum === true){
//             console.log(i);
//         }

//     }
// }

// prime();


//Lab1.10
// function squareNum(num) {
//     const result = num * num;
//   }
//   console.log(squareNum(2)); // *undefined เพราะไม่มี return


//Lab1.11
//   function sayHi(age) {
//     if (age < 12) alert('Hi kid');
//   }
//   console.log(sayHi); 
// //*     sayHi(age) {
// //      if (age < 12) alert('Hi kid');
// //      } เพราะสั่งใหเ console แสดงค่า function sayHi (แปลง function เป็น string แล้วแแสดงผล)

//   console.log(sayHi(10)); // **Hi kid เพราะเรียกใช้ function sayHi ด้วย console เฉยๆ

////////////////////////////////////////////////////////
// function sayHi(name) {
//     if (name) {
//       alert('Hi ' + name);
//       return;
//     } else {
//       return 'Who are you';
//     }
//   }
//   console.log(sayHi('John')); // ***Hi John เพราะ John ไปแทน name
//   console.log(sayHi()); // **** Who are you เพราะ ไม่มีค่าอะไรไปอทน name กลายเป็น undefined


//Lab12  
// function getLongText() {
//     return 
//     'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
//   }
  
//   console.log(getLongText()); // *undefined เพราะ return อยู่คนละบรรทัด ถ้าอยากได้ต้องใส่() ครอบ
//  //ex 
//  //   return (
//  //   'Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
//  // }

//Lab13

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }

//13.1

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     }  return confirm('Did parents allow you?');
//   }
// checkAge();

//13.2
// function checkAge(age) {
//     return age > 18 ? true : confirm('Did parents allow you?');
// } 
// checkAge();

//13.3

// function checkAge(age) {
//     return age > 18 || confirm('Did parents allow you?');
// } 
// checkAge();


//Lab14 
// function max(num1,num2,num3,num4){
//   return console.log(Math.max(num1,num2,num3,num4));
// }
// max(7,3,9,2);

/////////////////////วิธี2///////////////////////
// function max(a,b,c,d){
//     if(a === undefined){
//         return;
//     }else{
//         if(b === undefined){
//             return isNumeric(a) ? +a : NaN;
//         }else{
//             if(c === undefined){
//                 return isNumeric(a) && isNumeric(b) ? (a > b ? a : b): NaN;
//             }else{
//                 if(d === undefined){
//                     if(isNumeric(a) && isNumeric(b) && isNumeric(c)){
//                         if(a>b && a>c) return a;
//                         return b>c ? b : c;
//                     }else{
//                         return NaN;
//                     }
//                 }else{
//                     if(isNumeric(a) && isNumeric(b) && isNumeric(c) && isNumeric(d)){
//                         if(a>b && a>c && a>d) {return a;}
//                         else{
//                             if(a>b && a>c) return a;
//                             return b>c ? b : c;
//                         }
                        
//                     }else{
//                         return NaN;
//                     }
//                 }
//             }
//         }
//     }
// }

// function isNumeric(number){
//     return !(!number || number.trim == '')
// }

// console.log(max(4,7,9,8));