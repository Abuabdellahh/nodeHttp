
 //************q1******************* */
//  1. Create a module called "myFirst":
//  a. Inside the "myFirst" module, log a simple text that says "My first module" on
//  the console.
 //***************code**************** */
// / console.log("My first module");

/*  b. Run the module and see the output of the code you just wrote in this module
c. Write a function called "myMultiplier" inside of your "myFirst" module. This
function takes a single number as a parameter and returns a value that is 2 times
the parameter*/
// d. Execute the function inside the module. Pass the number 4 to the function
// e. Save the returned value in a variable and log the variable on the console. Now, run
// your module on the terminal to see the printed output
//************code***************** */
function myMultiplier(n){
return n*2
}
console.log(myMultiplier(4));
// f. Export your "myMultiplier" function so that other modules can use it
// ***********code*******************
module.exports.myMultiplier=myMultiplier
// 









