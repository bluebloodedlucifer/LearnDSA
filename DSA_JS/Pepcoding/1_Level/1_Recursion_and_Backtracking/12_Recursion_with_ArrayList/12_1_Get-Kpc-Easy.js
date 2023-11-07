// https://www.pepcoding.com/resources/online-java-foundation/recursion-with-arraylists/get-kpc-official/ojquestion

// 1. You are given a string str. The string str will contains numbers only, where each number stands for a key pressed on a mobile phone.
// 2. The following list is the key to characters map :
//     0 -> .;
//     1 -> abc
//     2 -> def
//     3 -> ghi
//     4 -> jkl
//     5 -> mno
//     6 -> pqrs
//     7 -> tu
//     8 -> vwx
//     9 -> yz
// 3. Complete the body of getKPC function - without changing signature - to get the list of all words that could be produced by the keys in str.
// Use sample input and output to take idea about output.


// Sample Input
// 78
// Sample Output
// [tv, tw, tx, uv, uw, ux]


const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
});


const input = query => new Promise(resolve => readline.question(query, resolve));


const main = async () => {
    const str = (await input(`Please Enter Input n: `));


    console.log(getKPC(str));

    readline.close();
}

const getKPC = (str) => {
    const codes = [".;", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tu", "vwx", "yz"];

    if(str.length === 0) return [""];

    const ch = str[0];
    const chCode = codes[ch];
    const partialAns = getKPC(str.slice(1));

    const finalAns = [];
    for(const a of chCode){
        for(const b of partialAns){
            finalAns.push(a + b);
        }
    }

    return finalAns;
}

main();