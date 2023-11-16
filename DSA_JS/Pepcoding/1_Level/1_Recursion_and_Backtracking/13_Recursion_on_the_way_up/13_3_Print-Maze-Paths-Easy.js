// https://www.pepcoding.com/resources/online-java-foundation/recursion-on-the-way-up

// 1. You are given a number n and a number m representing number of rows and columns in a maze.
// 2. You are standing in the top-left corner and have to reach the bottom-right corner. Only two moves are allowed 'h' (1-step horizontal) and 'v' (1-step vertical).
// 3. Complete the body of pri tMazePath function - without changing signature - to print the list of all paths that can be used to move from top-left to bottom-right.

// Sample Input
// 2
// 2
// Sample Output
// hv
// vh

const readline = require(`readline`).createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = query => new Promise(resolve => readline.question(query, resolve));

const main = async () => {
const n = parseInt(await input(`Please Enter the number of Rows: `));
const m = parseInt(await input (`Please Enter the number of Columns: `));

printMazePaths(1, 1, n, m, ``);
readline.close();	
}

const printMazePaths = (sr, sc, dr, dc, op) => {

	if(sr == dr && sc == dc){
		console.log(op);
		return;
}
	
	if(sr < dr){
		printMazePaths(sr+1, sc, dr, dc, `v` + op);
}
if(sc < dc){
	printMazePaths(sr, sc + 1, dr, dc, `h` + op);
}
}

main()
