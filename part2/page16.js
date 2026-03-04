// callback function: passing the function as argument to another function

/* function greet(name,callback){
    callback();
greet("sonu",()=>{
    console.log("Hello"); 
}) */

    // example 2

    function greet(name,callback){
    callback();
    console.log("welcome"+name)
}
greet("sonu",()=>{
    console.log("Hello"); // here this executes the first
})

