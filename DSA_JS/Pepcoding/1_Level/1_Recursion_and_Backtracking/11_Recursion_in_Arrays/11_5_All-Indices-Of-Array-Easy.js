// https://www.pepcoding.com/resources/online-java-foundation/recursion-in-arrays/all-indices-official/ojquestion

// 1. You are given a number n, representing the count of elements.
// 2. You are given n numbers.
// 3. You are given a number x. 
// 4. You are required to find the all indices at which x occurs in array a.
// 5. Return an array of appropriate size which contains all indices at which x occurs in array a.

const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
});


const input = query => new Promise(resolve => readline.question(query, resolve));


const main = async () => {
    const n = parseInt(await input(`Please Enter Length of array n: `));

    const arr = new Array(n);
    for(let i = 0; i<n; i++) arr[i] = parseInt(await input(``));

    const x = parseInt(await input(`Please Enter the number to search: `));

    console.log(allIndices(arr, x, 0, 0));

    readline.close();
}

const allIndices = (arr, x, index, foundSoFar) => {
    if(index === arr.length) return new Array(foundSoFar);

    if(arr[index] === x){
        const ans = allIndices(arr, x, index + 1, foundSoFar + 1);
        ans[foundSoFar--] = index;
        return ans;
    }else{
        const ans = allIndices(arr, x, index + 1, foundSoFar);
        return ans;
    }
}

main();