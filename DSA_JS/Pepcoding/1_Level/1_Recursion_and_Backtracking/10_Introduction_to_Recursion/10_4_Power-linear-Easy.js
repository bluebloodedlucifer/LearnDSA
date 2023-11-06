// https://www.pepcoding.com/resources/online-java-foundation/introduction-to-recursion/power-linear-official/ojquestion

// 1. You are given a number x.
// 2. You are given another number n.
// 3. You are required to calculate x raised to the power n. Don't change the signature of power function .

// Note -> The online judge can't force you to write the function recursively but that is what the spirit of question is. Write recursive and not iterative logic. The purpose of the question is to aid learning recursion and not test you.


const readline = require(`readline`).createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = (query) => new Promise((resolve) => readline.question(query, resolve));

const main = async () => {
	const x = parseInt(await input(`Please Enter the value of x: `));
	const n = parseInt(await input(`Please Enter the value of n: `));
	
	console.log(powerLinear(x, n));
	readline.close()
};

const powerLinear = (x, n) => {
	if(n === 0) return 1;
	return x*powerLinear(x, n-1);
}

// const powerLiner  = (x, n) => {
// 	return x**n;
// }

main();

