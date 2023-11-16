// https://www.pepcoding.com/resources/online-java-foundation/recursion-on-the-way-up/print-kpc-official/ojquestion

// 1. You are given a string str. The string str will contains numbers only, where each number stands for a key pressed on a mobile phone.
// 2. The following list is the key to characters map
//     0 -> .;
//    1 -> abc
//    2 -> def
//    3 -> ghi
//    4 -> jkl
//    5 -> mno
//    6 -> pqrs
//    7 -> tu
//    8 -> vwx
//    9 -> yz
// 3. Complete the body of printKPC function - without changing signature - to print the list of all words that could be produced by the keys in str.

// Sample Input
// 78
// Sample Output
// tv
// tw
// tx
// uv
// uw
// ux

const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
});


const input = query => new Promise(resolve => readline.question(query, resolve));


const main = async () => {
    const str = await input(`Please Enter Input str: `);
    
    printKPC(str, "");

    readline.close();
}

const printKPC = (ip, op) => {
    if(ip.length === 0){
        console.log(op);
        return;
    }

    const codes = [".;", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tu", "vwx", "yz"];

    const ch = codes[ip[0]];
    const rem = ip.slice(1);

    for(let i = 0; i<ch.length; i++){
        printKPC(rem, op + ch[i]);
    }

}


main();