const fs = require('fs');
const os = require('os');
const path = require('path')

// console.log(process.cwd());

const finalData = []
// const firstNum = path.basename(__dirname).split("_")[0];
// console.log(firstNum);

let rawData = fs.readFileSync(path.join(__dirname, `questions.txt`), 'utf-8')

// rawData = rawData.replaceAll("\n", "").join(",").split(" ,")
// rawData = rawData.replaceAll("\n", "").split(/(?<=Easy)|(?<=Medium)|(?<=Hard)/g)
rawData = rawData.split("\n",)


for (let d of rawData){
    finalData.push(d.replace(" ", "_").replaceAll(" ", "-"));
    // console.log(d);
}

finalData.pop()

console.log(finalData);


for(let i = 0; i<finalData.length; i++){
    fs.writeFileSync(path.join(__dirname, finalData[i] + ".js"), "")
}