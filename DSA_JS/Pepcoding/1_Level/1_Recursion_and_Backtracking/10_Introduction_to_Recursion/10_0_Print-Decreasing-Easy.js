// https://www.pepcoding.com/resources/online-java-foundation/introduction-to-recursion/print-decreasing-official/ojquestion

// 1. You are given a positive number n. 
// 2. You are required to print the counting from n to 1.
// 3. You are required to not use any loops. Complete the body of print Decreasing function to achieve it.

// Note -> The online judge can't force you to write the function recursively but that is what the spirit of question is. Write recursive and not iterative logic. The purpose of the question is to aid learning recursion and not test you.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = (query) => new Promise((resolve) => readline.question(query, resolve));

const main = async() => {
    let n = parseInt(await input("Please Enter the value of n: "));
    readline.close();
    printDecreasing(n);

}

const printDecreasing = (n) => {
    if(n <= 0) return;
    console.log(n);
    printDecreasing(n-1);
}

main();