// https://www.pepcoding.com/resources/online-java-foundation/recursion-with-arraylists/get-subsequence-official/ojquestion

// 1. You are given a string str.
// 2. Complete the body of getSS function - without changing signature - to calculate all subsequences of str.
// Use sample input and output to take idea about subsequences.

// Note -> The online judge can't force you to write the function recursively but that is what the spirit of question is.
// Write recursive and not iterative logic. The purpose of the question is to aid learning recursion and not test you.


// Sample Input
// abc
// Sample Output
// [, c, b, bc, a, ac, ab, abc]

const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
});


const input = query => new Promise(resolve => readline.question(query, resolve));


const main = async () => {
    const str = await input(`Please Enter Input str: `);
    console.log(subSeq(str));
    
    readline.close();
}

const subSeq = (str) => {
    if(str.length === 0) return [""];

    const ch = str.charAt(0);
    const partial = subSeq(str.slice(1));
    const final = [...partial];

    partial.forEach(e => final.push(ch + e));
    return final;
}

main();


