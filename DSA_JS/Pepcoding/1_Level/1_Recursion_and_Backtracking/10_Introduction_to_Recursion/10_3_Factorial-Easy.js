// https://www.pepcoding.com/resources/online-java-foundation/introduction-to-recursion/factorial-official/ojquestion

// 1. You are given a number n.
// 2. You are required to calculate the factorial of the number. Don't change the signature of factorial function.

// Note -> The online judge can't force you to write the function recursively but that is what the spirit of question is.Write recursive and not iterative logic. The purpose of the question is to aid learning recursion and not test you.


const readline = require(`readline`).createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = (query) => new Promise((resolve) => readline.question(query, resolve));

const main = async () => {
	const n = parseInt(await input(`Please Enter the number n: `));
	console.log(factorial(n));
	readline.close()
}

const factorial = (n) => {
	if(n === 0 || n === 1) return 1;
	return n*factorial(n-1);
}


main();