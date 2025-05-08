//Building HTTP server

const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res)=>{
  //  console.log("New Req.Rec");
        const log = `${Date.now()}:${req.url} New request received\n`;
        fs.appendFile('log.txt',log,(err,data)=>{
            //res.end("Hello from server");
            switch(req.url){
                case'/':res.end("Home Page");
                break;
                case'/about':res.end("Hi I am udeshika prabhashani");
                break;
                case '/Contact':res.end("Connect with me (+947612312345)");
                default :res.end("404 NOT FOUND");            }
        });
        //res.end("Hello from server");
});

myServer.listen(8000,() => console.log("server started!"));
