// https://www.pepcoding.com/resources/online-java-foundation/introduction-to-recursion/print-increasing-decreasing-official/ojquestion

// 1. You are given a positive number n. 
// 2. You are required to print the counting from n to 1 and back to n again.
// 3. You are required to not use any loops. Complete the body of pdi function to achieve it. Don't change the signature of the function.

// Note -> The online judge can't force you to write the function recursively but that is what the spirit of question is.Write recursive and not iterative logic. The purpose of the question is to aid learning recursion and not test you.

const readline = require(`readline`).createInterface({
	input: process.stdin,
	output: process.stdout
})

const input = (query) => new Promise((resolve) => readline.question(query, resolve));

const main = async () => {
	const n = parseInt(await input(`Enter the number n: `));
	printDecresingIncreasing(n);
	readline.close();
}

const printDecresingIncreasing = (n) => {
	if(n <= 0) return;
	console.log(n);
	printDecresingIncreasing(n-1);
	console.log(n);
}

main();


// print Increasing Decreasing?