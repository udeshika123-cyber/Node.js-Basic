// module.exports => export
// require => import

const firstModule = require('./first-module').default
console.log(firstModule.add(10,20));

try {
    console.log('Trying to devide by zero.');
    let result = firstModule.devide(0,0);
    console.log(result,"result");
    
    
} catch (error) {
    console.log('Caught an error',error.message);
    
}

//module wrapper
// (
//     function(exports,require,module,__filename,__dirname)
//     // module code here
// )





