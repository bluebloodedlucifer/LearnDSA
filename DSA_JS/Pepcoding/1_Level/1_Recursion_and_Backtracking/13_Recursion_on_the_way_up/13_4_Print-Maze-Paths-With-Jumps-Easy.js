// 1. You are given a number n and a number m representing number of rows and columns in a maze.
// 2. You are standing in the top-left corner and have to reach the bottom-right corner. 
// 3. In a single move you are allowed to jump 1 or more steps horizontally (as h1, h2, .. ), or 1 or more steps vertically (as v1, v2, ..) or 1 or more steps diagonally (as d1, d2, ..). 
// 4. Complete the body of printMazePath function - without changing signature - to print the list of all paths that can be used to move from top-left to bottom-right.

// Sample Input
// 3
// 3
// Sample Output
// h1h1v1v1
// h1h1v2
// h1v1h1v1
// h1v1v1h1
// h1v1d1
// h1v2h1
// h1d1v1
// h2v1v1
// h2v2
// v1h1h1v1
// v1h1v1h1
// v1h1d1
// v1h2v1
// v1v1h1h1
// v1v1h2
// v1d1h1
// v2h1h1
// v2h2
// d1h1v1
// d1v1h1
// d1d1
// d2

const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
});


const input = query => new Promise(resolve => readline.question(query, resolve));


const main = async () => {
    const n = parseInt(await input(`Please Enter Input row n: `));
    const m = parseInt(await input(`Please Enter Input column m: `));

    printMazePathsWithJumps(0, 0, n, m, ``);
    
    readline.close();
}

const printMazePathsWithJumps = (sr, sc, dr, dc, op) => {
    if(sr > dr || sc > dc) return;

    if(sr == dr && sc == dc){
        console.log(op);
        return;
    }

    for(let i = 1; i<= dc - sc; i++){
        printMazePathsWithJumps(sr, sc + i, dr, dc, op+`h`+i);
    }
    for(let i = 1; i<= dr - sr; i++){
        printMazePathsWithJumps(sr + i, sc, dr, dc, op+`v`+i);
    }
    for(let i = 1; i<= dr - sr && i<=dc - sc; i++){
        printMazePathsWithJumps(sr + i, sc + i, dr, dc, op+`d`+i);
    }

}

main();