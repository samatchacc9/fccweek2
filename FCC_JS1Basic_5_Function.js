///////////////////////////////////////
// Write Reusable JavaScript with Functions
/*
function reusableFunction() {
    console.log("Hi World");
  }
  reusableFunction();
  */

///////////////////////////////////////
// Passing Values to Functions with Arguments
/*

function functionWithArgs(param1, param2) {
    console.log(param1+param2)
  }
  functionWithArgs(1,2);
*/
///////////////////////////////////////
// Global Scope and Functions

/*
// Declare the myGlobal variable below this line
var myGlobal =10 ;

function fun1() {
  oopsGlobal = 5 ;// Assign 5 to oopsGlobal Here

}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

*/
///////////////////////////////////////
// Local Scope and Functions
/*
function myLocalScope() {

    // Only change code below this line
    var myVar ="ReferenceError: myVar is not defined";
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);

  */
 ///////////////////////////////////////
//  Global vs. Local Scope in Functions

/*

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
 var myOutfit = "sweater";
return myOutfit;


  // Only change code above this line
  return outerWear;
}

myOutfit();

*/
///////////////////////////////////////
// Return a Value from a Function with Return
/*
function timesFive(num) {
  return num*5;
}
timesFive(5);
*/
///////////////////////////////////////
// Understanding Undefined Value returned from a Function
/*
// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function  addFive() {
  sum = sum + 5 ;
}

// Only change code above this line

addThree();
addFive();
*/
///////////////////////////////////////
// Assignment with a Returned Value

/*
// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed  = processArg(7);
*/
///////////////////////////////////////
//Stand in Line

/*
function nextInLine(arr, item) {
  // Only change code below this line
  
  arr.push(item);
  var removed = arr.shift();
  return removed; 
  
  // Only change code above this line


}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

*/