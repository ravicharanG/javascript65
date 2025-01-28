/* 1.let,var,const keywords 

const accountId =144563
let accountEmail ="xy@z.com"
var accountPassword = "12345"
accountCity ="jaipur"
let accountState;


// accountId = 2 // not allowed

accountEmail="h2@gmail.com"
accountPassword="213444"
accountCity ="Bengaluru"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

*/


 // prefer not to use var
// because of issue in block scope and functional scope



/* 2.datatypes and ECMA STANDARDS 


// "use strict" ; // treat all js code as newer version.

 //alert(3 + 3) // we are using nodejs,not browser .

// console.log(3 
   + 3)  // code redability should be high.

 // console.log("ravi")

let name="hitesh"
let age=18
let isLoggedIn = false 

*/

let name="hitesh"
let age=18
let isLoggedIn = false 

console.log(typeof age)
console.log(typeof null)
console.log(typeof undefined)