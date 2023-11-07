// https://www.pepcoding.com/resources/online-java-foundation/recursion-in-arrays/max-of-an-array-official/ojquestion

// 1. You are given a number n, representing the count of elements.
// 2. You are given n numbers.
// 3. You are required to find the maximum of input. 
// 4. For the purpose complete the body of maxOfArray function. Don't change the signature.

// Note -> The online judge can't force you to write the function recursively but that is what the spirit of question is. Write recursive and not iterative logic. The purpose of the question is to aid learning recursion and not test you.

const readline = require(`readline`).createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = query => new Promise(resolve => readline.question(query, resolve));

let max = Number.MIN_SAFE_INTEGER

const main = async () => {
	const n = parseInt(await input(`Please Enter the size of array n: `));
	const arr = new Array(n);
	for(let i = 0; i<n; i++){
		arr[i] = parseInt(await input(``));
}
console.log(maxOfArray(arr, 0));
readline.close();
}

const maxOfArray = (arr, index) => {
	if(index === arr.length) return max;

	if(arr[index] > max) max = arr[index];
	return maxOfArray(arr, index+1);
}

main();
