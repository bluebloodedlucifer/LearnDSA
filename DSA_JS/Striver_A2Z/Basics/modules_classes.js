// Each Module is a single file
// e.g., file-tools.mjs, main.mjs


// file-tools.mjs contatins following code:

// export function isTextFilePath(filepath) {
//     return filepath.endsWith('.txt');
// }

// main.mjs contains following code: 

// import * as path from 'path'
// import {isTextFilePath} from './file-tools.mjs'

// -------------------------------------------------------------------------------------------------------------------------------------------------------
// CLASSES
class Person {
    constructor(name) {
      this.name = name;
    }
    describe() {
      return `Person named ${this.name}`;
    }
    static logNames(persons) {
      for (const person of persons) {
        console.log(person.name);
      }
    }
  }
  
  class Employee extends Person {
    constructor(name, title) {
      super(name);
      this.title = title;
    }
    describe() {
      return super.describe() +
        ` (${this.title})`;
    }
  }
  
  const jane = new Employee('Jane', 'CTO');
  assert.equal(
    jane.describe(),
    'Person named Jane (CTO)');


//   7.1.4 Exception handling 
function throwsException() {
throw new Error('Problem!');
}

function catchesException() {
try {
    throwsException();
} catch (err) {
    assert.ok(err instanceof Error);
    assert.equal(err.message, 'Problem!');
}
}
