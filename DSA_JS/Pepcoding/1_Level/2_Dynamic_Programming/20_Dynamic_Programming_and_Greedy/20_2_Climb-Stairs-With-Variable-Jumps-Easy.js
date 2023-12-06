const fs = require('fs');
const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
});


const input = query => new Promise(resolve => readline.question(query, resolve));

// 4
let dp;

const main = async () => {
    // const n = parseInt(await input(`Please Enter Input n: `));
    const arr = [];
    let  data = fs.readFileSync('./input.txt', 'utf-8');
    data = data.split('\n').map(Number)
    const n = data[0];
    for(let i = 0; i<n; i++){
        arr[i] = data[i+1]
    }
    console.log(arr);
    
    // 1
    // let count = {value: 0};
    // climbStairsWithJumps(n, arr, 0, "", count)
    // console.log(count.value);
    
    // 2
    // console.log(climbStairsWithJumps(n, arr, 0, ""));

    // 3
    // const dp = [...Array(n)].fill(-1);
    // console.log(climbStairsWithJumps(n, arr, 0, "", dp));

    // 4
    dp = new Array(n+1).fill(0);
    dp[n] = 1;
    console.log(dp);
    console.log(climbStairsWithJumps(n, arr));



    readline.close();
}


// 0 -> 6

// 1 Extra Variable, Recursive (global or in function)

// const climbStairsWithJumps = (n, arr, ip, op, count) => {
//     if(ip > n) return;
//     if(arr[ip] === 0) return;
//     if(ip === n) {
//         // count.value++;
//         count.value++;
//         console.log(op);
//         return;
//     };

//     for(let i= 1; i<=arr[ip]; i++){
//         climbStairsWithJumps(n, arr, ip + i, op+ i, count);
//     }
// }

// 2 Without extra variable
// const climbStairsWithJumps = (n, arr, ip, op) => {
//     if(ip > n) return 0;
//     if(ip === n) {
//         console.log(op);
//         return 1;
//     }

//     let ways = 0;
//     for(let i = 1; i<=arr[ip]; i++){
//         ways += climbStairsWithJumps(n, arr, ip+i, op+i);
//     }
//     return ways;
// }

// 3 Memoization
// const climbStairsWithJumps = (n, arr, ip, dp) => {
//     if(ip > n) return 0;
//     if(arr[ip] === 0) return 0;
//     if(ip === n) {
//         return 1;
//     }
//     if(dp[ip] > -1) return dp[ip];

//     let ways = 0;
//     for(let i = 1; i<=arr[ip]; i++){
//         ways += climbStairsWithJumps(n, arr, ip+i, dp);
//     }

//     return dp[ip] = ways;
// }

// 4 Tabulation
// const climbStairsWithJumps = (n, arr) => {
//     for(let i = n - 1; i >= 0; i--){
//         for(let j = 1; j<= arr[i] && (i + j) < dp.length ; j++){
//              dp[i] += dp[i+j]
//              console.log(dp);
//         }
//     }
//     return dp[0];
// }


main();

