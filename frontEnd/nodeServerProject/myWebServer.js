
// 6. Create "myWebServer" module
// a. Inside of your myWebServer module, create a web server which listens to requests
// on port 1234
// ■ Note: It is a good practice to write a custom message such as
// console.log(“Server running”) in your server listener you create to check
// if your server is running and listening to requests
// b. Run your "myWebServer" module on your terminal to check if your server is
// listening to requests at port 1234
// c. Inside of your "myWebServer" module, write your request listener function as a
// callback inside of the server you created above. This function should return the
// following text message "Request received and processed" to the browser.
// d. Run your "myWebServer" module on your terminal and go to your browser and
// type “localhost:1234” to check if your browser displays the "Request received and
// processed " message sent from your server
// ********************** code***************************
// const http=require('http')
// const webServer =http.createServer((req,res)=>{
// res.write('Request received and processed')
// res.end()
// })

// let Port=1234
// webServer.listen(Port,()=>{
//     console.log(`server is running on port ${Port}`)
// })



// 7. Inside your "myWebServer" module
// a. Import your "randomNumber" module inside of your "myWebServer" module.
// Now, generate a random number using the random() function from the
// "randomNumber" module and return the generated random number to the client
// browser when request is sent to port 1234.
// ■ Don’t forget to run your module on your terminal to keep your server
// running and
// ■ Go to your browser and type “localhost:1234” to see the random number
// generated


// ****************code************************

// const http=require('http')
// const randomNumber=require('./randomNumber')
// const webServer =http.createServer((req,res)=>{
// res.write(`<h1>The generated random number is <strong>${randomNumber.random()}</strong></h1> `)
// res.end()
// })

// let Port=1234
// webServer.listen(Port,()=>{
//     console.log(`server is running on port ${Port}`)
// })



// *****************code*****************
const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    if(req.url === '/about') {
        fs.readFile(path.join(__dirname, 'static', 'apple html css replica', 'about.html'), (err, content) => {
            if(err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    }
}).listen(1234, () => console.log('Server running at http://localhost:1234'));


http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'static', req.url === '/' ? 'index.html' : req.url);
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') {
                // Handle the error, perhaps serve a 404 page
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Serve the file
            res.writeHead(200);
            res.end(content);
        }
    });
}).listen(1234, () => console.log('Server running at http://localhost:1234'));








