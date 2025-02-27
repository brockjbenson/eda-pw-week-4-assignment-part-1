console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return name;
} // end helloName
// Remember to call the function to test
console.log( 'Test - should say "Hello Brock!"', helloName('Hello, Brock!'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
} // end addNumbers
console.log( 'Adding together 2 & 4: ', addNumbers( 2, 4));

// 4. Function to multiply three numbers & return the result
function multiplyThree( num0, num1, num2 ) {
  let answer = num0 * num1 * num2;
  return answer;
} // end multiplyThree
console.log( 'Multiplying 2, 3, & 4: ', multiplyThree(2, 3, 4));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );
console.log( 'isPositive - should say true', isPositive(18) );
console.log( 'isPositive - should say true', isPositive(6) );
console.log( 'isPositive - should say false', isPositive(-14) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let arr = [1,2,3,4];
function getLast( array ) {
  let last = array[array.length - 1];
  if(array.length === 0){
    return undefined;
  } else{
     return last;
  }
}

console.log('Test Q6 - Function Array:', getLast( arr ));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
arr;
function find( array, value) {
  for (let x = 0; x < array.length; x++) {
    if (array[x] === value) {
        return true;
    }  else {
      return false;
    }
}
}
console.log('Number is in "array1": ', find(arr, 8));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string[0]) {
    return true;
  } else {
    return false
  }


}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
arr;
size1 = arr.length;
function sumAll( array, size ) {
  let sum = 0
  for (let i=0; i < size; i++)
  sum =+ array[i];
  // TODO: loop to add items
  return sum;
}
console.log('Sum of all array values: ', sumAll(arr, size1));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
