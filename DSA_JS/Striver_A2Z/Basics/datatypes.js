
// 1. Boolean


// 2. Number


// 3. Bigint


// 4. String

//-------------------------------------------------------------------------------variables-------------------------------------------------------------------
// Reserved words can’t be used as variable names:
// Reserved words can’t be variable names, but they can be property names.



// const if = 123;

// SyntaxError: Unexpected token if
// But they are allowed as names of properties:

// const obj = { if: 123 };
// obj.if // 123

// ----------------------------------------------------------------------------naming conventions------------------------------------------------------------

// The following naming conventions are popular in JavaScript.

// If the name of a parameter starts with an underscore (or is an underscore) it means that this parameter is not used – for example:

// arr.map((_x, i) => i)
// If the name of a property of an object starts with an underscore then that property is considered private:

// class ValueWrapper {
//   constructor(value) {
//     this._value = value;
//   }
// }


// ----------------------------------------------------------------------------Statement vs. expression -----------------------------------------------------
// 7.4.1 Statements 

// A statement is a piece of code that can be executed and performs some kind of action. For example, if is a statement:

// let myStr;
// if (myBool) {
//   myStr = 'Yes';
// } else {
//   myStr = 'No';
// }
// One more example of a statement: a function declaration.

// function twice(x) {
//   return x + x;
// }


// 7.4.2 Expressions 

// An expression is a piece of code that can be evaluated to produce a value. For example, the code between the parentheses is an expression:

// let myStr = (myBool ? 'Yes' : 'No');
// The operator _?_:_ used between the parentheses is called the ternary operator. It is the expression version of the if statement.

// Let’s look at more examples of expressions. We enter expressions and the REPL evaluates them for us:

// > 'ab' + 'cd'
// 'abcd'
// > Number('123')
// 123
// > true || false
// true


// ------------------------------------------------------- ASI - Automatic Semicolon Insertion ---------------------------------------------------------------

// The token where this is most practically relevant is return. Consider, for example, the following code:

// return
// {
//   first: 'jane'
// };
// This code is parsed as:

// return;
// {
//   first: 'jane';
// }
;



// ASI not Getting Triggered


// 7.7.2 ASI unexpectedly not triggered 
// In some cases, ASI is not triggered when you think it should be. That makes life more complicated for people who don’t like semicolons because they need to be aware of those cases. The following are three examples. There are more.

// Example 1: Unintended function call.

// a = b + c
// (d + e).print()
// Parsed as:

// a = b + c(d + e).print();
// Example 2: Unintended division.

// a = b
// /hi/g.exec(c).map(d)
// Parsed as:

// a = b / hi / g.exec(c).map(d);
// Example 3: Unintended property access.

// someFunction()
// ['ul', 'ol'].map(x => x + x)
// Executed as:

// const propKey = ('ul','ol'); // comma operator
// assert.equal(propKey, 'ol');

// someFunction()[propKey].map(x => x + x);



//-----------------------------------------------------------------------------Strict Mode-------------------------------------------------------------------
// Strict mode is the default in modules and classes, and can be switched on in scripts 


// In non-strict mode, changing an undeclared variable creates a global variable.


// 7.9.1 Switching on strict mode 
// In script files and CommonJS modules, you switch on strict mode for a complete file, by putting the following code in the first line:

// 'use strict';
// The neat thing about this “directive” is that ECMAScript versions before 5 simply ignore it: it’s an expression statement that does nothing.

// You can also switch on strict mode for just a single function:

// function functionInStrictMode() {
//   'use strict';
// }

// Stict mode vs "Sloppy Mode"
// Consoles often run in non-strict mode

// In non-strict mode, changing an undeclared variable creates a global variable.
// Function declarations are block-scoped in strict mode, function-scoped in sloppy mode 
// Sloppy mode doesn’t throw exceptions when changing immutable data 
// In sloppy mode, the assignment fails silently:


// Block scoping vs Function Scoping