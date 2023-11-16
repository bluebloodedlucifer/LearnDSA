// https://www.pepcoding.com/resources/online-java-foundation/recursion-on-the-way-up/print-encodings-official/ojquestion

// 1. You are given a string str of digits. (will never start with a 0)
// 2. You are required to encode the str as per following rules
//     1 -> a
//     2 -> b
//     3 -> c
//     ..
//     25 -> y
//     26 -> z
// 3. Complete the body of printEncodings function - without changing signature - to calculate and print all encodings of str.
// Use the input-output below to get more understanding on what is required
// 123 -> abc, aw, lc
// 993 -> iic
// 013 -> Invalid input. A string starting with 0 will not be passed.
// 103 -> jc
// 303 -> No output possible. But such a string maybe passed. In this case print nothing.



// Sample Input
// 655196

// Sample Output
// feeaif
// feesf

const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
});


const input = query => new Promise(resolve => readline.question(query, resolve));


const main = async () => {
    const str = await input(`Please Enter Input n: `);
    
    printEncodings(str, ``);

    readline.close();
}

const printEncodings = (ip, op) => {

    if(ip.length === 0){
        console.log(op);
        return;
    }else if(ip.length === 1 && ip[0] == '0'){
        return
    }
    const base = 'a'.charCodeAt(0);
    
    let code;
    if(ip[0] == '0') return;

    code = String.fromCharCode(parseInt(ip[0]) + base - 1);
    printEncodings(ip.slice(1), op + code);

    if(parseInt(ip[0] + ip[1]) <= 26 && ip.charAt(1).length > 0){
        code  = String.fromCharCode(parseInt(ip[0] + ip[1]) + base - 1);
        printEncodings(ip.slice(2), op + code );
    }
    


}


main();