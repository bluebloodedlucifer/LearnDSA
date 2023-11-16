// https://www.pepcoding.com/resources/online-java-foundation/recursion-on-the-way-up/print-stair-paths-official/ojquestion

// 1. You are given a number n representing number of stairs in a staircase.
// 2. You are standing at the bottom of staircase. You are allowed to climb 1 step, 2 steps or 3 steps in one move.
// 3. Complete the body of printStairPaths function - without changing signature - to print the list of all paths that can be used to climb the staircase up.

// Sample Input
// 3
// Sample Output
// 111
// 12
// 21
// 3

const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
});


const input = query => new Promise(resolve => readline.question(query, resolve));


const main = async () => {
    const n = parseInt(await input(`Please Enter Input n: `));
    
    printStairPaths(n, "");


    readline.close();
}

const printStairPaths = (ip, op) => {
    if(ip < 0) return;
    if(ip === 0){
        console.log(op);
        return;
    }
    printStairPaths(ip - 1, op + 1);
    printStairPaths(ip - 2, op + 2);
    printStairPaths(ip - 3, op + 3);
}


main();