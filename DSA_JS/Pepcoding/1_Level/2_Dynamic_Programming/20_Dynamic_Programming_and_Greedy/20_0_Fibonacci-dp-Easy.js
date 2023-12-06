// https://www.pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/fibonacci-dp-official/ojquestion
// https://leetcode.com/problems/fibonacci-number/description/

const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
});


const input = query => new Promise(resolve => readline.question(query, resolve));


const main = async () => {
    const n = parseInt(await input(`Please Enter Input n: `));
    // console.log(Fib(n));
    const arr = []
    console.log(FibMemorized(n, arr));
    // console.log(arr);
    for(let i = 0; i<arr.length; i++){
        console.log(arr[i]);
    }

    readline.close();
}

// const Fib = (n) => {
//     if(n === 0 || n === 1) return n;

//     const fibnm1 = Fib(n-1);
//     const fibnm2 = Fib(n-2);

//     const fibn = fibnm1 + fibnm2;

//     return fibn;
// }
const arr = [];
const FibMemorized = (n, arr) => {
    if(n === 0 || n === 1) return n;

    if(arr[n] !== undefined) return arr[n];

    const fibnm1 = FibMemorized(n-1, arr);
    const fibnm2 = FibMemorized(n-2, arr);

    const fibn = fibnm1 + fibnm2;

    arr[n] = fibn;
    return fibn;
}

main();