// https://www.pepcoding.com/resources/online-java-foundation/recursion-in-arrays/first-index-official/ojquestion

// 1. You are given a number n, representing the count of elements.
// 2. You are given n numbers.
// 3. You are given a number x. 
// 4. You are required to find the first index at which x occurs in array a.
// 5. If x exists in array, print the first index where it is found otherwise print -1.


const readline = require(`readline`).createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = query => new Promise(resolve => readline.question(query, resolve));

const main = async () => {
	const n = parseInt(await input(`Enter the length of the array n: `));
	const arr = new Array(n);
	for(let i = 0; i<n; i++) arr[i] = parseInt(await input(``));
	const x = parseInt(await input(`Enter the number which to find from start x: `));
	console.log(firstIndex(arr, 0, x));
	readline.close()
}

const firstIndex = (arr, index, x) => {
	if(index === arr.length) return -1;

	if(arr[index] === x) return index;
	return firstIndex(arr, index+1, x);
}

main()
