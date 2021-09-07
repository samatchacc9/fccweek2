//////////////////Arrow Function////////////////////////////////////////////////

//Lab3.1
// let sum = (a,b) => a*b;
// console.log(sum(23,9));


//Lab3.2
// const checkPrime = (num) => {

//   let prime;

//   for(let i=2; i<=num; i++){
//     prime = true;
//     ;
//     for(let j=2; j<=i; j++){
      
//       if(i%j===0 && i!==j){
//         prime = false;
//       }
//     }
//   }

//   if(prime === true){
//     return console.log("Yes, It's Prime");
//   }else return console.log("No, It's not Prime");
// }
// checkPrime(10);

//Lab3.3
//3.3.1
// const square = n => {
//     n ** 2;
//   };
  
//   console.log(square(7)); // *undefined เพราะไม่มี return

//3.3.2
// const calcCircleArea = r => Math.PI * r ** 2;
// console.log(calcCircleArea(3)); // **28.274333882308138  เอา 3 ไปแทนค่า r และ Math.PI มีค่า 3.141592653589793 
// console.log(Math.PI); //3.141592653589793




//Lab3.4
// const logName = (name) => console.log(name);
// const logName = name => console.log(name); //  เหมือนกัน เพราะ มี paramitor 1ตัว ละ() ได้


//Lab3.5
// const ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// }

// ask('Do you agree?', 
//     function () { alert('You agreed.'); },
//     function () { alert('You canceled the execution.'); }
//   );




//Lab3.6
// const countDay = a => a*24*60*60; 
// console.log(countDay(2));




//Lab3.7
// const checkSeven = num => {
//     if(num%7===0){
//         return console.log('yes');
//     }else{
//         return console.log('No');
//     }
// }
// checkSeven(prompt('Input number: '));

////////////////////////////////////////////
// const checkSeven = num => num % 7 === 0 ? true : false; 

////////////////////////////////////////////
// const checkSeven = num => num % 7 === 0; 
// console.log(checkSeven(prompt('Input number: ')));



//Lab3.8
// const calculateFootball = (win,drew,lose) => {
//   let count = 0;
//   for(let i = 0; i < win; i++){
//     count += 3;
//   }
//   for(let i = 0; i < drew; i++){
//     count++;
//   }

//   return console.log(count);

// }

// calculateFootball(2,2,5);

/////////////// ย่ออีก ///////////////////
// const calculateFootball = (win,draw) => win*3 + draw;


//Lab3.9
// const checkleapyear= year => {
//     if(year%100 === 0){
//       if(year%400===0){
//         return true;
//       }
//     }

//     if(year%4 === 0){
//       return true;
//     }else{
//       return false;
//     }
// };

// console.log(checkleapyear(prompt('Input year: ')));

////////////////ย่ออีก//////////////////////////////////////
// const checkleapyear= year => {
//         if(year%100 === 0){
//             return year % 400 === 0 ;
//         }return year % 4 === 0;
// };




//Lab3.10
// const calAge = birthYear => {
//     let input = prompt('Input year: ');
//     let age = 2020 - input;
//     return age;
// }

// alert(calAge());

////////////////ย่ออีก คิดวันด้วย///////////////////////////////
// const calAge = birthYear => {
//     let day = 0;
//     for(let i = birthYear; i <= 2020; i++){
//         day += isLeapYear(i) ? 366 : 365;
//     }
//     return day;
// };

// console.log(calAge(2020));


//Lab3.11
// const calTemperature = (temperature) => (temperature-32)*(5/9);
// console.log(calTemperature(1));


//Lab3.12
// const calFactorial = (num) => {
//   let sum = 1;

//   for(let i=1; i<=num; i++){
//     sum *= i;
//   }

//   return sum;

// };
// console.log(calFactorial(5));

/////////////////อีกแบบ 1//////////////////////////////
// const calFactorial = num => {
//     let result = 1;
//     for(let i=n; i>0; i--){
//         result *= i;
//     }
//     return result; 
// };
// console.log(calFactorial(5));