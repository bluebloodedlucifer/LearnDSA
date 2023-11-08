// 1. You've to check whether a given number is prime or not.
// 2. Take a number "t" as input representing count of input numbers to be tested.
// 3. Take a number "n" as input "t" number of times.
// 4. For each input value of n, print "prime" if the number is prime and "not prime" otherwise.



const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const prompt = (query) => new Promise((resolve) => readline.question(query, resolve))

const main = async() => {
    let t = parseInt(await prompt("Enter the number of inputs t: "));
    while(t--){
        let n = parseInt(await prompt("Enter the number to be tested n: "));
        console.log(isPrime(n));
    }
    readline.close()
}

main();


// Approach 1 brute force

// let isPrime = (n) => {
//     if(n === 0 || n === 1) return "Not Prime";
//     for(let i = 2; i<n; i++){
//         if(n%i === 0) return "Not Prime";
//     }
//     return "Prime";
// }

// Approach 2 optimized

let isPrime = (n) => {
    if(n === 0 || n === 1) return "Not Prime";
    for(let i = 2; i*i <= n; i++){
        if(n%i === 0) return "Not Prime";
    }
    return "Prime";
}