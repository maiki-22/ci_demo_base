const sum = require('./sum');
 function testSum() {
   const result = sum(2,3)

   if (result !== 5) {
     throw new Error(`no es igual a 5 :c, se obtutvo ${result}`);
   } 
    console.log(`aprobado, la suma (2,5) da ${result}`)
 }
testSum();
