// 1. You've to print all prime numbers between a range. 
// 2. Take as input "low", the lower limit of range.
// 3. Take as input "high", the higher limit of range.
// 4. For the range print all the primes numbers between low and high (both included).


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const prompt = (query) => new Promise((resolve) => readline.question(query, resolve));

const main = async() => {
    const low = parseInt(await prompt("Enter low: "))
    const high = parseInt(await prompt("Enter high: "))

    for(let i = low; i<= high; i++){
        if(isPrime(i)) console.log(i);
    }

    readline.close();
}

main()

let isPrime = (num) => {
    if(num === 0 || num === 1) return false;
    for(let i = 2; i*i <= num; i++){
        if(num%i === 0) return false;
    }
    return true;
}


// be care ful i should start with 2 => let i = 2 and not 0

// similar questions on leetcode
// https://leetcode.com/problems/count-primes/description/
