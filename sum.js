// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// extract the command-line arguments
// slice? ignore the first 2 arguments of the array
const args = process.argv.slice(2);
console.log('args:', args);

// Edge case: check if we have at least 2 arguments, output an error message.

// iterate through the arguments
// for loop

// for(let i=0; i < args.length; i++) <= less readable, giving the index
// forEach => give the value, and the index and it's more readable.
// for in => loop though the indices of an array or the keys of an object
// for of => loop through the values, no index

// [1,2,3,4]
// declare the sum accumulator
let total = 0;

for (let arg of args) {
  // add the arguments together
  total += Number(arg); // typecasting
  console.log('arg:', arg, 'total:', total);

  // Edge case: checks if the arguments are whole number
  // Edge case: if any argument is not a number, output an error message.
}

// print out the sum
console.log('Total:', total);

// declare the name of the function...> return the output
