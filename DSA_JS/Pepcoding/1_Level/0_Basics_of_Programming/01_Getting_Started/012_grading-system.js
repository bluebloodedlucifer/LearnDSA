// 1. You are given as input marks of a student.
// 2. Display an appropriate message based on the following rules:
//   	  2.1 for marks above 90, print excellent.
//   	  2.2 for marks above 80 and less than equal to 90, print good.
//   	  2.3 for marks above 70 and less than equal to 80, print fair.
//   	  2.4 for marks above 60 and less than equal to 70, print meets expectations.
//   	  2.5 for marks less than equal to 60, print below par.

const { read } = require("fs");

// Note -> Only change the code in area after - // code here


const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

const prompt = (query) => new Promise((resolve) => readline.question(query, resolve));

const main  = async() => {
    const studentMarks = parseFloat(await prompt("Please Enter your marks: "));

    if(studentMarks > 90) console.log("excellent");
    else if(studentMarks > 80 && studentMarks <= 90) console.log("good");
    else if(studentMarks > 70 && studentMarks <= 80) console.log("fair");
    else if(studentMarks > 60 && studentMarks <= 70) console.log("meets expectations");
    else console.log("below par");
    console.log(process.argv);
    readline.close();
}

main()


// things to read
// https://stackoverflow.com/questions/61394928/get-user-input-through-node-js-console