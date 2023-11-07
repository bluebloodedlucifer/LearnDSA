// https://www.pepcoding.com/resources/online-java-foundation/recursion-with-arraylists/get-maze-paths-official/ojquestion

// 1. You are given a number n and a number m representing number of rows and columns in a maze.
// 2. You are standing in the top-left corner and have to reach the bottom-right corner. Only two moves are allowed 'h' (1-step horizontal) and 'v' (1-step vertical).
// 3. Complete the body of getMazePath function - without changing signature - to get the list of all paths that can be used to move from top-left to bottom-right.
// Use sample input and output to take idea about output.

// Sample Input
// 3
// 3
// Sample Output
// [hhvv, hvhv, hvvh, vhhv, vhvh, vvhh]

const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
});


const input = query => new Promise(resolve => readline.question(query, resolve));


const main = async () => {
    const n = parseInt(await input(`Please Enter Input n: `));
    const m = parseInt(await input(`Please Enter Input m: `));
    
    console.log(getMazePath(1, 1, n, m));


    readline.close();
}

// const getMazePath = (sr, sc, dr, dc) => {
//     if(sr == dr && sc == dc) return [""];

//     let partialPath1 = [];
//     let partialPath2 = [];
//     if(sr < dr){
//         partialPath2 = getMazePath(sr+1, sc, dr, dc);
//     }
//     if(sc < dc){
//         partialPath1 = getMazePath(sr, sc+1, dr, dc);
//     }

//     const ans = [];
//     partialPath1.forEach(e => ans.push("h" + e));
//     partialPath2.forEach(e => ans.push("v" + e));

//     return ans;
// }

const getMazePath = (sr, sc, dr, dc) => {


    let

}


main();