console.log('Hello node js');

const array = [1,2,3,4]
console.log(array,'array');

setTimeout(() => {
    console.log("This msg is delayed by 2 sec");
    },2000);
//It's type after 2 seconds...
console.log("This is the lats line of the sync code");
