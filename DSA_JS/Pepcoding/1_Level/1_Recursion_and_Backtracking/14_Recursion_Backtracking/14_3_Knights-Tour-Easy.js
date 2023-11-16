// https://www.pepcoding.com/resources/online-java-foundation/recursion-backtracking/knights-tour-official/ojquestion

// 1. You are given a number n, the size of a chess board.
// 2. You are given a row and a column, as a starting point for a knight piece.
// 3. You are required to generate the all moves of a knight starting in (row, col) such that knight visits 
//      all cells of the board exactly once.
// 4. Complete the body of printKnightsTour function - without changing signature - to calculate and 
//      print all configurations of the chess board representing the route
//      of knight through the chess board. Use sample input and output to get more idea.

// Note -> When moving from (r, c) to the possible 8 options give first precedence to (r - 2, c + 1) and 
//                move in clockwise manner to
//                explore other options.


// Sample Input
// 5
// 2
// 0

const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
});


const input = query => new Promise(resolve => readline.question(query, resolve));


const main = async () => {
    const n = parseInt(await input(`Please Enter Input n: `));
    const row = parseInt(await input(`Please Enter Input row: `));
    const col = parseInt(await input(`Please Enter Input col: `));
    
    const chess = [...Array(n)].map(() => Array(n).fill(0));

    printKnightsTour(chess, row, col, 1);


    readline.close();
}

const displayBoard = (chess) => {
    for(let i = 0; i<chess.length; i++){
        let str = ``;
        for(let j = 0; j<chess[i].length; j++){
            str = str + chess[i][j] + ` `;
        }
        console.log(str);
    }
    console.log("");
}

const printKnightsTour = (chess, row, col, upcomingMove) => {
    if(row < 0 || col < 0 || row >= chess.length || col >= chess.length || chess[row][col] > 0){
        return;
    }
    if(upcomingMove == (chess.length)*(chess.length)){
        chess[row][col] = upcomingMove;
        displayBoard(chess);
        chess[row][col] = 0;
        return;
    }

    chess[row][col] = upcomingMove;
    printKnightsTour(chess, row-2, col+1, upcomingMove+1)
    printKnightsTour(chess, row-1, col+2, upcomingMove+1)
    printKnightsTour(chess, row+1, col+2, upcomingMove+1)
    printKnightsTour(chess, row+2, col+1, upcomingMove+1)
    printKnightsTour(chess, row+2, col-1, upcomingMove+1)
    printKnightsTour(chess, row+1, col-2, upcomingMove+1)
    printKnightsTour(chess, row-1, col-2, upcomingMove+1)
    printKnightsTour(chess, row-2, col-1, upcomingMove+1)
    chess[row][col] = 0;
    // upcomingMove--; 

}


main();