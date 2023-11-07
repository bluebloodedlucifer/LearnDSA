// https://www.pepcoding.com/resources/online-java-foundation/recursion-with-arraylists/get-stair-paths-official/ojquestion

// 1. You are given a number n representing number of stairs in a staircase.
// 2. You are standing at the bottom of staircase. You are allowed to climb 1 step, 2 steps or 3 steps in one move.
// 3. Complete the body of getStairPaths function - without changing signature - to get the list of all paths that can be used to climb the staircase up.
// Use sample input and output to take idea about output.

// Sample Input
// 3
// Sample Output
// [111, 12, 21, 3]

const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
});


const input = query => new Promise(resolve => readline.question(query, resolve));


const main = async () => {
    const n = parseInt(await input(`Please Enter Input n: `));
    console.log(getStairPaths(n));


    readline.close();
}

const getStairPaths = (n) => {
    if(n === 0) return [""];
    if(n < 0) return [];

    const partialAns1 = getStairPaths(n-1);
    const partialAns2 = getStairPaths(n-2);
    const partialAns3 = getStairPaths(n-3);

    const finalAns = [];

    partialAns1.forEach(e => finalAns.push(1 + e));
    partialAns2.forEach(e => finalAns.push(2 + e));
    partialAns3.forEach(e => finalAns.push(3 + e));



    return finalAns;
}


main();