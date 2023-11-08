// 1. You've to display the digits of a number.
// 2. Take as input "n", the number for which digits have to be displayed.
// 3. Print the digits of the number line-wise.


const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

const prompt = (query) => new Promise((resolve) => readline.question(query, resolve));

const main = async() => {
    let n = parseInt(await prompt("Please enter number n, : "))
    printDigits(n);
    readline.close();
}
main();

const printDigits = (num) => {
    let count = 0;
    let temp = num;
    while(temp){
        count++;
        temp = parseInt(temp/10);
    }
    let div = 10**(count-1);
    while(div){
        console.log(parseInt(num/div));
        num = num%div;
        div = parseInt(div/10);

    }
}