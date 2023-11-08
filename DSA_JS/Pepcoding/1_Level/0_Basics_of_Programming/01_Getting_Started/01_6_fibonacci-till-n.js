// 1. You've to print first n fibonacci numbers.
// 2. Take as input "n", the count of fibonacci numbers to print.
// 3. Print first n fibonacci numbers.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout  
})

const prompt = (query) => new Promise((resolve) => readline.question(query, resolve));

const main = async() => {
    const n = parseInt(await prompt("Please enter till what number you want to print fibonacci sequence, n: "))
    fib(n);
    readline.close()
}

main();

const fib = (n) => {
    let prev = 0, curr = 1, next;
    for(let i = 0; i<n; i++){
        console.log(prev);
        next = prev + curr;
        prev = curr;
        curr = next;
    }
}