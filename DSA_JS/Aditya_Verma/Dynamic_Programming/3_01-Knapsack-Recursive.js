// https://www.interviewbit.com/problems/0-1-knapsack/submissions/


// 1. Recuresive Brute Force
module.exports = { 
    //param A : array of integers
    //param B : array of integers
    //param C : integer
    //return an integer
       solve : function(A, B, C){
           function knapsackHelper(pos, remainingCapacity){
               if(pos === 0 || remainingCapacity === 0) return 0;
               
               if(B[pos - 1] > remainingCapacity){
                   return knapsackHelper(pos-1, remainingCapacity);
               }
               return Math.max(
                   A[pos - 1] + knapsackHelper(pos-1, remainingCapacity - B[pos - 1]), 
                   knapsackHelper(pos-1, remainingCapacity)
                   )
               
           }
           return knapsackHelper(A.length, C);
       }
   };
   

// 2. Memoization Better

module.exports = { 
    //param A : array of integers
    //param B : array of integers
    //param C : integer
    //return an integer
       solve : function(A, B, C){
           const n = A.length, m = C;
           const dp = [...Array(n+1)].map(() => Array(m+1).fill(-1))
           function knapsackHelper(pos, remainingCapacity){
               if(pos === 0 || remainingCapacity === 0) return 0;
               
               if(dp[pos][remainingCapacity] != -1) return dp[pos][remainingCapacity]
               
               if(B[pos - 1] > remainingCapacity){
                   return knapsackHelper(pos-1, remainingCapacity);
               }
               return dp[pos][remainingCapacity] = Math.max(
                   A[pos - 1] + knapsackHelper(pos-1, remainingCapacity - B[pos - 1]), 
                   knapsackHelper(pos-1, remainingCapacity)
                   )
               
           }
           return knapsackHelper(n, m);
       }
   };

   
// 3. Tabulation Optimal

module.exports = { 
    //param A : array of integers
    //param B : array of integers
    //param C : integer
    //return an integer
       solve : function(V, W, C){
           const n = V.length, m = C;
           // const dp = [...Array(n+1)].map(() => Array(m+1).fill(0))
           const dp = [...Array(n+1)].map(() => Array(m+1).fill(0))
           for(let i = 1; i<n+1; i++){
               for(let j = 1; j<m+1; j++){
                   if(W[i-1] <= j){
                       dp[i][j] = Math.max(
                           V[i-1] + dp[i-1][j-W[i-1]], dp[i-1][j]
                       );
                   }else{
                       dp[i][j] = dp[i-1][j];
                   }
               }
           }
           return dp[n][m];
       }
   };
   
   
   