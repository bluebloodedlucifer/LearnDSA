// https://www.pepcoding.com/resources/online-java-foundation/recursion-with-arraylists/get-maze-path-with-jumps-official/ojquestion

// 1. You are given a number n and a number m representing number of rows and columns in a maze.
// 2. You are standing in the top-left corner and have to reach the bottom-right corner. 
// 3. In a single move you are allowed to jump 1 or more steps horizontally (as h1, h2, .. ), or 1 or more steps vertically (as v1, v2, ..) or 1 or more steps diagonally (as d1, d2, ..). 
// 4. Complete the body of getMazePath function - without changing signature - to get the list of all paths that can be used to move from top-left to bottom-right.


// Sample Input
// 2
// 2
// Sample Output
// [h1v1, v1h1, d1]


const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
});


const input = query => new Promise(resolve => readline.question(query, resolve));


const main = async () => {
    const n = parseInt(await input(`Please Enter Input n: `));
    const m = parseInt(await input(`Please Enter Input m: `));
    
    console.log(getMazePathsWithJumps(1, 1, n, m));

    readline.close();
}

const getMazePathsWithJumps = (sr, sc, dr, dc) => {

    if(sr > dr || sc > dc) return []

    if(sr == dr && sc == dc) return [""];

    const finalAns = [];

    for(let i = 1; i<=dc-sc; i++){
        const ph = getMazePathsWithJumps(sr, sc + i, dr, dc)
        for(const h of ph) finalAns.push("h" + i + h);
    }

    for(let i = 1; i<=dr-sr; i++){
        const pv = getMazePathsWithJumps(sr + i, sc, dr, dc);
        for(const v of pv) finalAns.push("v" + i + v);
    }


    for(let i = 1; i<=dr-sc && i<=dc-sc; i++){
        const pd = getMazePathsWithJumps(sr+i, sc+i, dr, dc);
        for(const d of pd) finalAns.push("d" + i + d);
    }
    



    return finalAns;
}

main();