// https://www.pepcoding.com/resources/online-java-foundation/recursion-on-the-way-up/print-subsequence-official/ojquestion

// 1. You are given a string str.
// 2. Complete the body of printSS function - without changing signature - to calculate and print all subsequences of str.
// Use sample input and output to take idea about subsequences.

// Sample Input
// yvTA

// Sample Output
// yvTA
// yvT
// yvA
// yv
// yTA
// yT
// yA
// y
// vTA
// vT
// vA
// v
// TA
// T
// A

const readline = require(`readline`).createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = query => new Promise(resolve => readline.question(query, resolve));

const main = async () => {
	const str = await input(`Please Enter the string: `);
	
	printSS(str, ``);

	readline.close()
}

const printSS = (ip, op) => {
	if(ip.length === 0){
        console.log(op);
        return;
    } 

	const ch = ip[0];
	const rem = ip.slice(1);

	printSS(rem, op + ch)
	printSS(rem, op);
}

main()


