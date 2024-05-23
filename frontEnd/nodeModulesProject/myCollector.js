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
console.log(multi1.myMultiplier(5));
console.log(multi2.myMultiplier(5));
