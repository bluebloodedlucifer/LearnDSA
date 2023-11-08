// 1. You are given two numbers n and k. You are required to rotate n, k times to the right. If k is positive, rotate to the right i.e. remove rightmost digit and make it leftmost. Do the reverse for negative value of k. Also k can have an absolute value larger than number of digits in n.
// 2. Take as input n and k.
// 3. Print the rotated number.
// 4. Note - Assume that the number of rotations will not cause leading 0's in the result. e.g. such an input will not be given
//    n = 12340056
//    k = 3
//    r = 05612340

const readline = require(`readline`).createInterface({
	input: process.stdin,
	output: process.stdout
});

const prompt = (query) => new Promise(resolve => readline.question(query, resolve));

const main = async() => {
	const n = await prompt(`Enter number n: `);
	const k = parseInt(await prompt(`Enter the rotate factor k: `));
	console.log(rotateDigit(n, k));
	readline.close();
}

main();

// Approach 1

// const rotateDigit = (n, k) => {
// 	let sz = n.length;
// 	k = k%sz;
// 	let first, last;
// 	if(k > 0){
//         first = n.slice(-k);
//         last = n.slice(0, n.length - k);
//     }else{
//         k = -k;
//         first = n.slice(k);
//         last = n.slice(0,k);
//     }
// return first + last;

// }


// Approach 2

const rotateDigit = (n, k) => {
    
}