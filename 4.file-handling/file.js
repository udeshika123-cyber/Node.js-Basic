const { log } = require("console");
const fs = require("fs");


//write in another sync file
//----------------------------------
//fs.writeFileSync("./test.txt","Hey there");


//write in another async file
//----------------------------------
//fs.writeFile("./test.txt","Hello world async",(err)=>{});

//blocking (sync)
//--------------------------------
// console.log("1");
// const result = fs.readFileSync('contacts.txt','utf-8');
// console.log(result);
// console.log("2");

//non-blocking(async)
//--------------------------------
console.log("1");
fs.readFile('contacts.txt','utf-8',(err,result) =>{
    console.log(result);
})
console.log("2");
console.log("3");


//read in another sync file
//---------------------------
// const result = fs.readFileSync('./contacts.txt',"utf-8");
// //console.log(result);


// fs.readFile("./contacts.txt","utf8", (err)=>{
//     if (err){
//         console.log("Error",err);
//     }else{
//         console.log(result);       
//     }
// })


//fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());

// fs.appendFileSync("./test.txt",'Hey there\n')

//fs.appendFileSync("./test.txt",`${Date.now()} Hey there\n`);

//copy file
//-----------------------
//fs.cpSync("./test.txt","./copy.txt");

//deleted copy file
//-----------------------
//fs.unlinkSync("./copy.txt");

//find stats of file
//-----------------------
//console.log(fs.statSync("./test.txt"));

//create folder
//------------------------
//fs.mkdirSync("my-Docs");
