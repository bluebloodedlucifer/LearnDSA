// https://www.pepcoding.com/resources/online-java-foundation/recursion-backtracking/flood-fill-official/ojquestion

// 1. You are given a number n, representing the number of rows.
// 2. You are given a number m, representing the number of columns.
// 3. You are given n*m numbers, representing elements of 2d array a. The numbers can be 1 or 0 only.
// 4. You are standing in the top-left corner and have to reach the bottom-right corner. 
// Only four moves are allowed 't' (1-step up), 'l' (1-step left), 'd' (1-step down) 'r' (1-step right). You can only move to cells which have 0 value in them. You can't move out of the boundaries or in the cells which have value 1 in them (1 means obstacle)
// 5. Complete the body of floodfill function - without changing signature - to print all paths that can be used to move from top-left to bottom-right.

// Note1 -> Please check the sample input and output for details
// Note2 -> If all four moves are available make moves in the order 't', 'l', 'd' and 'r'

// Sample Input
/**
3 3
0 0 0
1 0 1
0 0 0
 */

// Sample Output
// rddr


const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
});


const input = query => new Promise(resolve => readline.question(query, resolve));


const main = async () => {
    const n = parseInt(await input(`Please Enter Input n: `));
    const m = parseInt(await input(`Please Enter Input m: `));

    const maze = [];

    for(let i = 0; i<n; i++){
        const temp = [];
        for(let j = 0; j<m; j++){
            temp[j] = parseInt(await input(``));
        }
        maze.push(temp);
    }
    const visited = [...Array(n)].map(() => Array(m).fill(false));
    console.log(visited);
    console.log(maze);

    floodFill(maze, 0, 0, ``, visited);

    readline.close();
}

const floodFill = (maze, sr, sc, op, visited) => {

    const dr = maze.length-1;
    const dc = maze[0].length-1;
    if(sr < 0 || sc < 0 || sr > dr || sc > dc || maze[sr][sc] == 1 || visited[sr][sc]) return; 

    if(sr == dr && sc == dc){
        console.log(op);
        return;
    }
    visited[sr][sc] = true;
    floodFill(maze, sr-1, sc, op+`t`, visited)
    floodFill(maze, sr, sc-1, op+`l`, visited)
    floodFill(maze, sr+1, sc, op+`d`, visited)
    floodFill(maze, sr, sc+1, op+`r`, visited)
    visited[sr][sc] = false;

}

main();

// process.stdin.on(`data`, (chunk) => {
//     console.log(chunk.toString());
// })



// const fs = require('fs');

// function main() {
//   // Read the entire content of the file synchronously
//   const input = fs.readFileSync(`input.txt`, 'utf8');

//   // Process the input as needed
//   const lines = input.trim().split('\n');
//   const [n, m] = lines[0].split(' ').map(Number);
//   const maze = lines.slice(1).map((line) => line.split(' ').map(Number));

//   console.log('Number of rows:', n);
//   console.log('Number of columns:', m);
//   console.log('Maze:', maze);

//   // Continue with your logic or function calls here
// }

// main();
