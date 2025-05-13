//Building HTTP server

const http = require("http");
// const fs = require("fs");
// const url = require("url");
const express = require ("express");

const app =express();
app.get('/',(req,res)=> {
  return res.send("This is from home page");
});
app.get('/about',(req,res)=>{
  return res.send("This is from about page");
});

app.listen(8000 ,()=>console.log("server started"));

// function myHandler(req,res){
//   if (req.url==="/favicon .ico")
//         return res.end();
//         //  console.log("New Req.Rec");
//         const log = `${Date.now()} ${req.method} ${req.url} New request received\n`;
//         const myUrl = url.parse(req.url,true);
//         //console.log(myUrl);
        
//         fs.appendFile('log.txt',log,(err,data)=>{
//             //res.end("Hello from server");
//             switch(myUrl.pathname){
//                 case"/":
//                   if(req.method==='GET') res.end("Home Page");
//                   break;
//                 case "/about":
//                   const username = myUrl.query.myname;
//                   res.end(`Hi ${username}`);
//                   break;
//                 case"/search":
//                   const search = myUrl.query.search_query;
//                   res.end("Here are your result for" +search);
//                 case "/signup":
//                   if (req.method==='GET') res.end("This is a signup form");
//                   else if (req.method==='POST') {
//                     res.end("Success!!!");
//                   }
//                 default :
//                   res.end("404 NOT FOUND");           
//                 }
//         });
// }

// const myServer = http.createServer(app);
//         //res.end("Hello from server");

// myServer.listen(8000,() => console.log("server started!"));
