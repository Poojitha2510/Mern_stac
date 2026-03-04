// scope of variables
// let: block scope
// var:function scope

//example1:
/* let x=10
function f1(){
    let x=20
    if(3==3){
        let x=30
        console.log(x)//30 prints first
    }
    console.log(x)//20 prints second
}
f1()
console.log(x)//10 prints last
 */

//example2:
/* function f1(){
    let x=20 // for this scope only inside the function
}
f1()
console.log(x) // throws the error  */

//example3 :
/* function f1(){
    var x=20 // for this scope only inside the function
}
f1()
console.log(x) // throws the error 
*/

// example 4:
/* if(1==1){
    let x=10
}
console.log(x)// reference error */

//example 5:

if(1==1){
    var x=10 // function scope
}
console.log(x)


