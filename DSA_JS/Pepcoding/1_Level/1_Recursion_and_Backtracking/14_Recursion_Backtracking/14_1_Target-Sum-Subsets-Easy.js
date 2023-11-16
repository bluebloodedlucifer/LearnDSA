// 1. You are given a number n, representing the count of elements.
// 2. You are given n numbers.
// 3. You are given a number "tar".
// 4. Complete the body of printTargetSumSubsets function - without changing signature - to calculate and print all subsets of given elements, the contents of which sum to "tar". Use sample input and output to get more idea.


// 5
// 10
// 20
// 30
// 40
// 50
// 60
// Sample Output
// 10, 20, 30, .
// 10, 50, .
// 20, 40, .


const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
});


const input = query => new Promise(resolve => readline.question(query, resolve));


const main = async () => {
    const n = parseInt(await input(`Please Enter Input n: `));
    const arr = [];
    for(let i = 0; i<n; i++){
        arr[i] = parseInt(await input(``));
    }
    const tar = parseInt(await input(`Enter the value of tar: `))

    printTargetSumSubsets(arr, 0, [], 0, tar);

    readline.close();
}

const printTargetSumSubsets = (arr, index, set, sos, tar) => {
    if(sos > tar) return;
    if(index === arr.length){
        if(sos === tar){
            console.log(set + ".");
        }
        return;
    }
    printTargetSumSubsets(arr, index+1, set+arr[index] + ", ", sos + arr[index], tar);
    printTargetSumSubsets(arr, index+1, set, sos, tar);

}


main();