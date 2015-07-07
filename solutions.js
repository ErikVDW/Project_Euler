/* SOLUTION 1 - Find the sum of all the multiples of 3 or 5 below 1000.
A number (A) is a multiple of another number (B) if B can be multiplied by an integer to get A.
To put this another way, if the remainder when A is divided by B is zero, A is a multiple of B.
The modulo operator can help us here as we can write the above sentence pseudo-mathematically: A % B = 0.
This problem considers only natural numbers (zero and positive integers) below 1000.
We can either start there, or begin at 0 for our iterations.
The first natural number below 1000 is 999.
First, we create a function called Solution1 for readability that takes no variables (we already know which numbers to use to find multiples (3 and 5) and have lower and upper bounds).
Next, we initialize variables.


*/

var solution1 = function(){
  // Multiples of 5
  var i = 999; // Starting point
  var sum = 0; // Initialize sum variable
  
  while(i>0) {
    if (i % 5 == 0) { // If it's a multiple,
      console.log("Multiple of 5: " + i); // <- FOR TESTING PURPOSES
      sum += i; // and add the multiple to the sum.
      console.log("Sum: " + sum); // <- FOR TESTING PURPOSES
      i--; // Decrement the number that will be checked as a multiple.
    }
    else if (i % 3 == 0) {
      console.log("Multiple of 3: " + i); // <- FOR TESTING PURPOSES
      sum += i;
      console.log("Sum: " + sum); // <- FOR TESTING PURPOSES
      i--;
    }
    else {
      // console.log("Multiple tested: " + i); // <- FOR TESTING PURPOSES
      i--;
    }
  }
  return sum;
  
};

/* SOLUTION 2 - Even Fibonacci numbers
A number A is even if A % 2 = 0. 
Here we must generate a Fibonacci number and check if it is even.
*/

var solution2 = function() {
  var upLimit = 4000000;
  var fib1 = 1;
  var fib2 = 2;
  var fibNext = 3;
  var sum = 0;
  
  for ( fib1; fibNext < upLimit; fibNext = fib1+fib2 ) {
    console.log(fibNext);
    if ( fibNext % 2 == 0) {
      sum += fibNext;
    }
    else {}
    
    fib1 = fib2;
    fib2 = fibNext;
  };
  
  
  return sum+2;
}

/* NOTES

*/