//seTimeout(()=>{}) it is seperate method contains callback function it executes that after complition of mention time


/*console.log("Beggining")
setTimeout(()=>{console.log("hello world")},3000)
console.log("Ending")/* output for above code is Beggining
Ending
hello world  but it is not actual output we are expecting the ending should print after the hello worldto resove that
we async function which provides await method which can be used when promise is mentioned*/ 


// to resolve the problem we use async function
function f1(){
    console.log("Beggining")
}
function f2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{console.log("hello world")
            resolve()
        },3000)
        
    })
}
function f3(){
    console.log("Ending")
}
async function main() {
    try{
        f1()
        await f2()
        f3()
    }
    catch(err){
        console.log(err)
    }
    
}
main()
// Beggining
// hello world
// Ending

//reject
function f1(){
    console.log("Beggining")
}
function f2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{console.log("hello world")
            //resolve()
            reject("rejected")
        },3000)
        
    })
}
function f3(){
    console.log("Ending")
}
async function main() {
    try{
        f1()
        await f2()
        f3()
    }
    catch(err){
        console.log(err)
    }
    
}
main()
// Begginin