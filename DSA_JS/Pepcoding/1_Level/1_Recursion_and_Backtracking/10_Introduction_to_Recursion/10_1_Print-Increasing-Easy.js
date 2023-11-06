// https://www.pepcoding.com/resources/online-java-foundation/introduction-to-recursion/print-increasing-official/ojquestion

// 1. You are given a positive number n. 
// 2. You are required to print the counting from 1 to n.
// 3. You are required to not use any loops. Complete the body of print Increasing function to achieve it. Don't change the signature of the function.

// Note -> The online judge can't force you to write the function recursively but that is what the spirit of question is. Write recursive and not iterative logic. The purpose of the question is to aid learning recursion and not test you.

const readline = require(`readline`).createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = (query) => new Promise((resolve) => readline.question(query, resolve));

const main = async () => {
	const n = parseInt(await input(`Please enter the number n: `));
	printIncreasing(n);
	readline.close();
}

const printIncreasing = (n) => {
	if(n <= 0) return;
	printIncreasing(n-1);
	console.log(n);
}

main();


