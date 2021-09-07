// Boolean & Conditional Statement (18ข้อ)
//////////////////////////////////////////////
// Understanding Boolean Values
/*
function welcomeToBooleans() {

    // Only change code below this line
  
    return true; // Change this line
  
    // Only change code above this line
  }*/
  //////////////////////////////////////////////
//   Use Conditional Logic with If Statements
/*
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
  if (wasThatTrue) {
   return "Yes, that was true";
  }
  
  return "No, that was false";
  
    // Only change code above this line
  }
  */
 //////////////////////////////////////////////
//  Comparison with the Equality Operator
/*
// Setup
function testEqual(val) {
  if (val == '12') { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
testEqual(12);

*/

 //////////////////////////////////////////////
//  Comparison with the Strict Equality Operator
// === data type ชนิดเดียวกัน and value เท่ากัน
/*
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
*/

 //////////////////////////////////////////////
//  Practice comparing different values
/*
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
compareEquality("20", 20);
*/
//////////////////////////////////////////////
// Comparison with the Inequality Operator !=

/*
// Setup
function testNotEqual(val) {
  if (val!= "99") { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(99);
testNotEqual("99");
testNotEqual(12);
testNotEqual("12");
testNotEqual("bob");
*/
//////////////////////////////////////////////
// Comparison with the Strict Inequality Operator !==
/*
// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(17);
testStrictNotEqual("17");
testStrictNotEqual(12);
testStrictNotEqual("bob");
*/
//////////////////////////////////////////////
// Comparison with the Greater Than Operator >
/*
function testGreaterThan(val) {
  if (val >100) {  // Change this line
    return "Over 100";
  }

  if (val >10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}
testGreaterThan(0);
testGreaterThan(10);
testGreaterThan(11);
testGreaterThan(99);
testGreaterThan(100);
testGreaterThan(101);
testGreaterThan(150);
*/
//////////////////////////////////////////////
// Comparison with the Greater Than Or Equal To Operator >=
/*
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}
testGreaterOrEqual(0);
testGreaterOrEqual(9);
testGreaterOrEqual(10);
testGreaterOrEqual(11);
testGreaterOrEqual(19);
testGreaterOrEqual(100);
testGreaterOrEqual(21);
*/
//////////////////////////////////////////////
// Comparison with the Less Than Operator
/*
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(0);
testLessThan(24);
testLessThan(25);
testLessThan(54);
testLessThan(55);
testLessThan(99);
*/
//////////////////////////////////////////////
// Comparison with the Less Than Or Equal To Operator <=
/*
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(0);
testLessOrEqual(11);
testLessOrEqual('12');
testLessOrEqual(23);
testLessOrEqual(24);
testLessOrEqual(25);
testLessOrEqual(55);
*/
//////////////////////////////////////////////
// Comparisons with the Logical And Operator

/*
function testLogicalAnd(val) {
  // Only change code below this line

 
    if (val >= 25 && val <= 50) {
      return "Yes";
    }


  // Only change code above this line
  return "No";
}

testLogicalAnd(0);
testLogicalAnd(24);
testLogicalAnd(25);
*/
//////////////////////////////////////////////
// Comparisons with the Logical Or Operator
/*
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
*/
//////////////////////////////////////////////
// Introducing Else Statements
/*
function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

*/
//////////////////////////////////////////////
// Introducing Else If Statements
/*
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }

  else {
  return "Between 5 and 10";
  }
}

testElseIf(7);

*/

//////////////////////////////////////////////
// Logical Order in If Else Statements
/*
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
*/
//////////////////////////////////////////////
// Chaining If Else Statements

/*
function testSize(num) {
  // Only change code below this line
if (num < 5) {
   return "Tiny";

} else if (num < 9) {
   return "Small";
   
} else if (num < 15){
  return "Medium"; 

} else if (num < 20) {
  return "Large";

} else if (num >= 20)
 return "Huge";
  // Only change code above this line
}

testSize(7);
*/
//////////////////////////////////////////////
// Golf Code
/*
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line

if (strokes ==1 ) {
  return "Hole-in-one!";

} else if (strokes <= par - 2	) {
  return "Eagle";

} else if (strokes == par - 1) {
  return "Birdie";

} else if (strokes == par) {
  return "Par";

} else if (strokes == par + 1) {
 return "Bogey";

} else if (strokes == par + 2) {
 return "Double Bogey";
 
} else {
  return "Go Home!";
}
 
  // Only change code above this line
}

golfScore(5, 4);

*/
