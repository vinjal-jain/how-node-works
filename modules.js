//console.log(arguments);
//console.log(require("module").wrapper);

//nodule.exports
const C = require('./test-module-1');
const Calc1 = new C();
console.log(Calc1.add(2,5));

//exports
//const calc2 = require('./test-module-2');
const {add,multiply} = require('./test-module-2');
console.log(multiply(2,5));

//caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();

