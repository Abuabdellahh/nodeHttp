
// import x,{y,b} from './myCollector.js'


// fs
// const path=require('path')
// let pathOb= path.parse(__filename)
// console.log(__filename)
// console.log(__dirname);
// os
// const os =require('os')

// console.log(os.cpus());

// console.log(os.freemem());

// console.log(os.totalmem()/(1024*1024*1024)); 
// console.log((os.totalmem()-os.freemem()/(1024*1024*1024))); 

// console.log(os.homedir());

// console.log(os.networkInterfaces());

// console.log(os.platform());

// console.log(os.release());

// console.log(os.tmpdir());

// console.log(os.type());
// console.log(os.arch());




// const {readdir,mkdir,readFile,writeFile}=require('fs')


// readdir('./',(error,file)=>{
//     if(error) console.log(error);
//     else{
//         console.log(file);
//     }
// })

// mkdir("Node",(err,path)=>{
//     if(err) console.log(err);
//     else console.log(path);
// })

// readFile('read.txt','utf8',(err,data)=>{
//     if(err) throw err;
//      console.log(data);
// })
// writeFile("write.txt","hello eibrahim",(err)=>{
//     if(err) throw err;
//     else console.log("file created");
// })


// events
// const events=require('events')
// const eventEmitter=new events.EventEmitter()
// handler
// const myEmit=()=>{
//     console.log('hello am i');
// }
// eventEmitter.on('eib',myEmit)

// eventEmitter.emit('eib')



// const http=require('http')

// const myServer=http.createServer((req,res)=>{
//     res.write("hello eibrahim")
//     res.end()
// })



// myServer.listen(2222,()=>{
//     console.log("server is running on port 2222");
// })

const http=require('http')
const myServer=http.createServer((req,res)=>{
    console.log(req.url);

    if(req.url==='/'){
        res.write("<h1>this is home page</h1>")
        res.end()
    }
    else if(req.url==='/about'){
        res.write("<h1>this is about page</h1>")
        res.end()
    }
    else if(req.url==='/contact'){
        res.write("this is contact page")
        res.end()
    }
    else{
        res.write("404 not found")
        res.end()
    }
    
})

myServer.listen(2222,()=>{
    console.log("server is running on port 2222");
})








// let http=  require("http")
// let server=http.createServer(function(req,res){
// res.write("hello eibrahim")
// res.end()
// })

// server.listen(9999,function(){
//     console.log("server is running on port 9999");
// })
