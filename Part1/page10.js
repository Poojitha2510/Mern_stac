// function greet(){
//     console.log("hello world")
// }
// greet()
// greet()// we can call multiple times without writing the code multiple times

// // function using the parameters
// function greet(name){ // name is parameter
//     console.log("hello"+name)
// }
// greet("sanju")// sanju is an argument

// // default argument
// function greet(name="cathy"){ // name is parameter "cathy is the default argument"
//     console.log("hello"+name)
// }
// greet()// it defulty prints the hello cathy if we pass the argument then it replace

// //return keyword
// function add(a,b){
//     return a+b
// }
// x=add(4,5)
// console.log(x)

// rest operator: to pass mulriple values
// function add(a,b){
//     console.log(a+b)
// }
// add(4,5)//9
// add(4,5,7)//9

// function val(... args){
//     console.log(args)
// }
// val(1,2,3,4,5)//[1,2,3,4,5]

// arguments operater: values can be defaultly accessed using the argument operater
// function add(){
//     console.log(arguments) 
// }
// add(2,3,4,5,6)//[Arguments] { '0': 2, '1': 3, '2': 4, '3': 5, '4': 6 }

//IEFY method: immedeatly invoke the function expression

(function add(a,b){
     console.log("hello world")
     console.log(a+b)
})(4,5)// hello world 9

(function greet(){
     console.log("hello world")
})()// hello world











