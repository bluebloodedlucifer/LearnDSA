// 1. You are given a string str.
// 2. Complete the body of printPermutations function - without changing signature - to calculate and print all permutations of str.
// Use sample input and output to take idea about permutations.

// Sample Input
// abc
// Sample Output
// abc
// acb
// bac
// bca
// cab
// cba

const readline = require(`readline`).createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = query => new Promise(resolve => readline.question(query, resolve));

const main = async () => {
	
	const str = await input(`Please Enter the input String str: `);
	printPermutations(str, ``);
	
	readline.close()
}

const printPermutations = (ip, op) => {
	
	if(ip.length === 0) {
		console.log(op);
		return;
}

	for(let i = 0; i<ip.length; i++){
		const ch = ip[i];
		const newIP = ip.slice(0, i) + ip.slice(i+1);

		printPermutations(newIP, op + ch);
}
}

main();
