// 3. Create another module called "myCollector":
// a. Import both functions from "myFirst" and "mySecond" modules inside of your
// "myCollector" module
// b. Pass the value 5 to both functions that are imported from "myFirst" and
// "mySecond" modules
// c. Run the "myCollector" module on your terminal to display the outputs on your
// console

// *********** code********************
const multi1 = require('./myFirst.js')
const multi2=require('./■ mySecond.js')

// console.log(multi1.myMultiplier(5));
// console.log(multi2.myMultiplier(5));

// 4. While you are in your "myCollector" module:
// a. Write a script inside of your "myCollector" module that passes the number 14 to
// your "myMultiplier" function that you imported from "myFirst" module and
// writes the returned value on a file called "results.txt". The result you write on the
// file should read like this: "The value of 14 when passed through the myMultiplier
// function is ( )."
// ■ Hint: You will need to find the core Node module that will allow you to
// create the “results.txt" file and write the result on this file




// ***************** code**************************
let writeValue1=multi1.myMultiplier(14)
let writeValue2=multi2.myMultiplier(14)


const fs = require('fs');

fs.writeFile('results.txt', `The value of 14 when passed through the myMultiplier function is ${writeValue1}.`, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

  fs.appendFile('results.txt', `\nThe value of 14 when passed through the myMultiplier function is ${writeValue2}.`, (err) => {
    if (err) throw err;
    console.log('The appended file  has been saved!');
  });









