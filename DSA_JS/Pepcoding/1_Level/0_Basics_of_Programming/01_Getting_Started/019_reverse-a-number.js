// 1. You've to display the digits of a number in reverse.
// 2. Take as input "n", the number for which digits have to be display in reverse.
// 3. Print the digits of the number line-wise, but in reverse order.

const readline = require(`readline`).createInterface({
	input: process.stdin,
	output: process.stdout
});

const prompt = (query) => new Promise((resolve) => readline.question(query, resolve));

const main = async() => {
	const n = parseInt(await prompt(`Please enter number n: `));
	console.log(reverseNumber(n));
	readline.close();
}

main();

const reverseNumber = (num) => {
	let rev = 0;
	while(num){
		let k = num%10;
		rev = rev*10 + k;
		num = parseInt(num/10);
}
return rev;
}


// https://leetcode.com/problems/reverse-integer/description/
