// https://www.pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/climb-stairs-official/ojquestion

const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
});


const input = query => new Promise(resolve => readline.question(query, resolve));


const main = async () => {
    const n = parseInt(await input(`Please Enter Input n: `));
    let count = {value: 0};
    const arr = []
    // climbStairsCount(n, "", count);
    // console.log(climbStairs(n));
    // console.log(climbStairsMemorization(n, arr));
    console.log(climbStairsTabulation(n));
    // console.log(arr);
    // console.log(count.value);

    readline.close();
}

// 1. Extra Variable

// const climbStairs = (n, op, count) =>{

//     if(n < 0) return;
//     if(n === 0){
//         console.log(op);
//         console.log(count.value);
//         count.value++;
//         return;
//     }

//     climbStairs(n-1, op + 1, count);
//     climbStairs(n-2, op + 2, count);
//     climbStairs(n-3, op + 3, count);
// }

// 2. No Extra Variable

// const climbStairs = (n) =>{

//     if(n < 0) return 0;
//     if(n === 0){

//         return 1;
//     }

//     const nm1 = climbStairs(n-1);
//     const nm2 = climbStairs(n-2);
//     const nm3 = climbStairs(n-3);

//     const csp = nm1 + nm2 + nm3;
//     return csp;

// }



// 3. Memoization (top down)

// const climbStairsMemorization = (n, arr) =>{

//     if(n < 0) return 0;
//     if(n === 0){

//         return 1;
//     }

//     if(arr[n] !== undefined) return arr[n];

//     console.log("hello", n);
//     const nm1 = climbStairsMemorization(n-1, arr);
//     const nm2 = climbStairsMemorization(n-2, arr);
//     const nm3 = climbStairsMemorization(n-3, arr);

//     const csp = nm1 + nm2 + nm3;
//     arr[n] = csp;
//     return csp;

// }

// 4. Tabulation (bottom up)

const climbStairsTabulation = (n) => {
    const dp = [];

    dp[0] = dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    
    for(let i = 4; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3] ;
    }
    return dp[n] || 0;
}







// this is wrong

// const climbStairsMyMemo = (n, op, count, arr) =>{

//     if(n < 0) return;
//     if(n === 0){
//         count.value++;
//         arr[n] = count.value;
//         return;
//     }

//     if(typeof arr[n] !== undefined){
//         count.value = arr[n];
//         return;
//     }

//     climbStairsMyMemo(n-1, op + 1, count);
//     climbStairsMyMemo(n-2, op + 2, count);
//     climbStairsMyMemo(n-3, op + 3, count);
// }


main();