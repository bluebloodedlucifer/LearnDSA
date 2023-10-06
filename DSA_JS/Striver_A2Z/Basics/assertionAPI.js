// In software development, assertions state facts about values or pieces of code that must be true. If they aren’t, an exception is thrown. 
// Node.js supports assertions via its built-in module assert – for example:

// import * as assert from 'assert/strict';
// assert.equal(3 + 5, 8);
// The optional last parameter message can be used to explain what is asserted. If the assertion fails,
// the message is used to set up the AssertionError that is thrown.
// assert.equal(x, 8, 'x must be equal to 8')

// .equal(), .deepEqual(), .notEqual(), .notDeepEqual()

// Normal comparison vs. deep comparison 
// The strict equal() uses === to compare values. Therefore, an object is only equal to itself – even if another object has the same content 
// (because === does not compare the contents of objects, only their identities):

// assert.notEqual({foo: 1}, {foo: 1});
// deepEqual() is a better choice for comparing objects:

// assert.deepEqual({foo: 1}, {foo: 1});
// This method works for Arrays, too:

// assert.notEqual(['a', 'b', 'c'], ['a', 'b', 'c']);
// assert.deepEqual(['a', 'b', 'c'], ['a', 'b', 'c']);


// Expecting exceptions #

// function throws(block: Function, error: Object, message?: string): void

// assert.throws(
//   () => {
//     null.prop;
//   },
//   {
//     name: 'TypeError',
//     message: "Cannot read properties of null (reading 'prop')",
//   }
// );
// 9.4.4 Another tool function 
// function fail(message: string | Error): never

// Always throws an AssertionError when it is called. That is occasionally useful for unit testing.

// try {
//   functionThatShouldThrow();
//   assert.fail();
// } catch (_) {
//   // Success
// }