// 1. You are given a number n, the size of a chess board.
// 2. You are required to place n number of queens in the n * n cells of board such that no queen can kill another.
// Note - Queens kill at distance in all 8 directions
// 3. Complete the body of printNQueens function - without changing signature - to calculate and print all safe configurations of n-queens. Use sample input and output to get more idea.

// Sample Input
// 4
// Sample Output
// 0-1, 1-3, 2-0, 3-2, .
// 0-2, 1-0, 2-3, 3-1, .

const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
});


const input = query => new Promise(resolve => readline.question(query, resolve));


const main = async () => {
    const n = parseInt(await input(`Please Enter Input n: `));
    const chess = [...Array(n)].map(() => Array(n).fill(0));

    printNQueens(chess, ``, 0);
    


    readline.close();
}

const printNQueens = (chess, op, row) => {
    if(row === chess.length){
        console.log(op + `.`);
        return;
    }

    for(let j = 0; j<chess.length; j++){
        if(isQueenSafe(chess, row, j)){
            chess[row][j] = true;
            printNQueens(chess, op + row + `-` + j + `, `, row+1);
            chess[row][j] = false;
        }
        // printNQueens(chess, op, row+1);
    }

}

const isQueenSafe = (chess, row, col) => {
    
    for(let i = row - 1; i >= 0; i--) {
        if(chess[i][col] === true) return false;
    }

    for(let i = row - 1, j = col - 1; i>=0 && j >= 0; i--, j--){
        if(chess[i][j] === true) return false;
    }

    for(let i = row - 1, j = col + 1; i>=0 && j < chess.length; i--, j++){
        if(chess[i][j] === true) return false;
    }
    return true;
}


main();