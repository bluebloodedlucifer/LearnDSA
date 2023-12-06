const fs = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// let minJump = Number.MAX_SAFE_INTEGER;
// let minWays = [];

let dp;
const main = () => {
    let arr = [];
    let data = fs.readFileSync('./input.txt', 'utf-8');
    data = data.split('\n').map(Number);
    let n = data[0];
    for(let i=0; i<n; i++){
        arr.push(data[i+1]);
    }
    // arr = [5,6,4,4,6,9,4,4,7,4,4,8,2,6,8,1,5,9,6,5,2,7,9,7,9,6,9,4,1,6,8,8,4,4,2,0,3,8,5]
    // n = arr.length;

    console.log(arr, n);

    // 1
    // climbStairsMin(arr, n, 0, "", 0)
    // console.log(minJump, minWays);

    // 2 
    dp = new Array(n).fill(-1);
    console.log(climbStairsMin(arr, n, 0, "", 0));
    console.log(dp);

    readline.close()
}

// 1. Brute force, with extra variable
// const climbStairsMin = (arr, n, ip, op, currJump) => {
    
//     if(ip > n) return;
//     if(ip === n){
//         console.log(op, currJump);
//         if(currJump < minJump){
//             minJump = currJump;
//             minWays = [op];
//         }else if(currJump === minJump){
//             minWays.push(op);
//         }
        
//         return;
//     } 
//     if(arr[ip] === 0) return;

//     for(let i = 1; i<= arr[ip]; i++){
//         climbStairsMin(arr, n, ip+i, op+i, currJump+1);
//     }
// }

// 2. Without Extra Variable
// const climbStairsMin = (arr, n, ip, op, currJump) => {
    
//     if(ip > n) return Number.MAX_SAFE_INTEGER;
//     if(ip === n){        
//         return currJump;
//     } 
//     if(arr[ip] === 0) return Number.MAX_SAFE_INTEGER;

//     let minJump = Number.MAX_SAFE_INTEGER;
//     for(let i = 1; i<= arr[ip]; i++){
//         let totalJmps = climbStairsMin(arr, n, ip+i, op+i, currJump+1);
//         // console.log(totalJmps);
//         minJump = Math.min(totalJmps, minJump)
//     }
//     return minJump;
// }

// 3. Memoization

const climbStairsMin = (arr, n, ip, op, currJump) => {
    
    if(ip > n) return Number.MAX_SAFE_INTEGER;
    if(ip === n){        
        console.log(op);
        return currJump;
    } 
    if(arr[ip] === 0) return Number.MAX_SAFE_INTEGER;

    if(dp[ip] != -1) return dp[ip];

    let minJump = Number.MAX_SAFE_INTEGER;
    for(let i = 1; i<= arr[ip]; i++){
        let totalJmps = climbStairsMin(arr, n, ip+i, op+i, currJump+1);
        // console.log(totalJmps);
        minJump = Math.min(totalJmps, minJump)
    }
    return dp[ip] = minJump;

}

main()