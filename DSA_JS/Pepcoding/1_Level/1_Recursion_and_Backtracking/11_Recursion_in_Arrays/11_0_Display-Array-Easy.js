// https://www.pepcoding.com/resources/online-java-foundation/recursion-in-arrays/display-array-official/ojquestion

// 1. You are given a number n, representing the size of array a.
// 2. You are given n numbers, representing elements of array a.
// 3. You are required to print the elements of array from beginning to end each in a separate line.
// 4. For the above purpose complete the body of displayArr function. Don't change the signature.

// Note -> The online judge can't force you to write the function recursively but that is what the spirit of question is. Write recursive and not iterative logic. The purpose of the question is to aid learning recursion and not test you.

const readline = require(`readline`).createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = query => new Promise(resolve => readline.question(query, resolve));

const main = async () => {
	const n = parseInt(await input(`Enter the size of array n: `));
	const a = new Array(n);
    for(let i = 0; i<n; i++){
        a[i] = parseInt(await input(`Enter element ${i + 1}: `));
    }
	displayArray(a, 0);
	readline.close();
}

const displayArray = (arr, index) => {
	if(index === arr.length) return;
	console.log(arr[index]);
	displayArray(arr, index + 1);
};

main();



// 1 2 3 4
