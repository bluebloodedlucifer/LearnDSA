// 1. You've to count the number of digits in a number.
// 2. Take as input "n", the number for which the digits has to be counted.
// 3. Print the digits in that number.

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

const prompt = (query) => new Promise((resolve) => readline.question(query, resolve));

const main = async() => {
    let n = parseInt(await prompt("Please Enter number, n: "));
    console.log(countDigits(n));
    readline.close();
}

main()

const countDigits = (num) => {
    let count = 0;
    while(num){
        num = parseInt(num/10)
        count++;
    }
    return count;
}




// for truncating the number other than parseInt and Math.trunc()

// x = -3.7
// console.log(~~x) // -3
// console.log(x | 0) // -3
// console.log(x << 0) // -3