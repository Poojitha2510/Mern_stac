/*function placeOrder(){
    console.log("order placed")
}
function makePayment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{console.log("payment done")
            resolve()
        },3000)
        
    })
}
function sendConfirmation(){
    console.log("confirmation sent")
}
async function main() {
    try{
        placeOrder()
        await makePayment()
        sendConfirmation()
    }
    catch(err){
        console.log(err)
    }
    
}
main()*/


// example2 : rejected in promise
function placeOrder(){
    console.log("order placed")
}
function makePayment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{console.log("payment done")
            //resolve()//resolve("we write here something")
            reject("failed")
        },3000)
        
    })
}
function sendConfirmation(){
    console.log("confirmation sent")
}
async function main() {
    try{
        placeOrder()
        await makePayment()
        sendConfirmation()
    }
    catch(err){
        console.log(err)
    }
    
}
main()


