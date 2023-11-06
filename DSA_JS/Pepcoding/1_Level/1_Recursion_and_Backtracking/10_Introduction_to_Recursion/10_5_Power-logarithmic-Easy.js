// https://www.pepcoding.com/resources/online-java-foundation/introduction-to-recursion/power-logarithmic-official/ojquestion

// 1. You are given a number x.
// 2. You are given another number n.
// 3. You are required to calculate x raised to the power n. Don't change the signature of power function.

// Note1 -> The previous version expects the call stack to be of n height. This function expects call function to be only log(n) high.

// Note2 -> The online judge can't force you to write the function recursively but that is what the spirit of question is. Write recursive and not iterative logic. The purpose of the question is to aid learning recursion and not test you.


const readline = require(`readline`).createInterface({
	input: process.stdin,
	output: process.stdout
})

const input = (query) => new Promise((resolve) => readline.question(query, resolve));

const main = async () => {
	const x = parseInt(await input(`Enter the value of x: `));
	const n = parseInt (await input(`Enter the value of n: `));

console.log(powerLogarithmic(x, n));

readline.close(); 
}

const powerLogarithmic = (x, n) => {
	if(n === 0) return 1;

    const partialAnswer = powerLogarithmic(x, parseInt(n/2));
	const ans = partialAnswer * partialAnswer;
	if(n%2 != 0) ans * x;
	return ans;
}

main();
