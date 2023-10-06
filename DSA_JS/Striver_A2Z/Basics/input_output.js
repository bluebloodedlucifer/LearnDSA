// 1st Approach using readline native api

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question("Please Enter your name: ", (name) => {
//     console.log(`Hello ${name}, welcome to input_output.js`);
//     name = Number(name);
//     console.log(name);
//     console.log(typeof name);
//     readline.close();
// })

// 2nd Approach using prompt-sync, install it using `npm install prompt-sync`


// const prompt = require('prompt-sync')({sigint: true}); // what is signint?

// const name = prompt("Please Enter your name: ")
// console.log(`Hello ${name}, welcome to input_output.js`);




// OUTPUT to Console

// console.log() // prints value to standard out
// console.error(); // prints error to standard error


// assert()

// const assert = require('assert')

// assert.equal(7, 8)



// Console API
// Consoles often run in non-strict mode

// %s converts the corresponding value to a string and inserts it.

// console.log('%s %s', 'abc', 123);
// // Output:
// // abc 123
// %o inserts a string representation of an object.

// console.log('%o', {foo: 123, bar: 'abc'});
// // Output:
// // { foo: 123, bar: 'abc' }
// %j converts a value to a JSON string and inserts it.

// console.log('%j', {foo: 123, bar: 'abc'});
// // Output:
// // {"foo":123,"bar":"abc"}
// %% inserts a single %.

// console.log('%s%%', 99);
// // Output:
// // 99%



// JSON.stringify() is occasionally useful for printing nested objects:

// console.log(JSON.stringify({first: 'Jane', last: 'Doe'}, null, 2));
// Output:

// {
//   "first": "Jane",
//   "last": "Doe"
// }
