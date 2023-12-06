const fs = require('fs');
const os = require('os');
const path = require('path')

// console.log(process.cwd());

const finalData = []
const firstNum = path.basename(__dirname).split("_")[0];
console.log(firstNum);

let rawData = fs.readFileSync(path.join(__dirname, `questions.txt`), 'utf-8')

// rawData = rawData.replaceAll("\n", "").split(/(?=Easy)|(?=Medium)/g).join(",").split(" ,")
rawData = rawData.replaceAll("\n", "").split(/(?<=Easy)|(?<=Medium)|(?<=Hard)/g)


for (let d of rawData){
    finalData.push(d.replaceAll(" ", "-"));
}


for(let i = 0; i<finalData.length; i++){
    fs.writeFileSync(path.join(__dirname, firstNum + `_${i}_` + finalData[i] + ".js"), "")
}
