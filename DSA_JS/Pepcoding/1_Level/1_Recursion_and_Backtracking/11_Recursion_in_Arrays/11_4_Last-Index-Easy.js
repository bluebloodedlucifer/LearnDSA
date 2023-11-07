// https://www.pepcoding.com/resources/online-java-foundation/recursion-in-arrays/last-index-official/ojquestion

// 1. You are given a number n, representing the count of elements.
// 2. You are given n numbers.
// 3. You are given a number x. 
// 4. You are required to find the last index at which x occurs in array a.
// 5. If x exists in array, print the last index where it is found otherwise print -1.

// Note -> The online judge can't force you to write the function recursively but that is what the spirit of question is. Write recursive and not iterative logic. The purpose of the question is to aid learning recursion and not test you.


const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = query => new Promise(resolve => readline.question(query, resolve));

const main = async () => {
    const n = parseInt(await input(`Please Enter the length of array n: `));
    const arr = new Array(n);
    for(let i = 0; i<n; i++) arr[i] =parseInt(await input(``));
    const x = parseInt(await input(`Please Enter the number which you want to find x: `));
    console.log(lastIndex(arr, n-1, x));
    readline.close()
}

const lastIndex = (arr, index, x) => {
    if(index < 0) return -1;
    if(arr[index] === x) return index;
    return lastIndex(arr, index-1, x);
}

main();

