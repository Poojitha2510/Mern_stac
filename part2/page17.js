// closure function : Inner function remembers outer variable

/* function outer(){
    let n=1
    function inner(){ // closure function
        return n++ // post increment
        return ++n // 
            }
    return inner
}
const f = outer()
console.log(f()) */

// example: write a code to check whether password is matched or not 
//  if mathched written "access granteed" not return "access declined"

/* function outer(){
    let password="1234"
    function inner(pwd){ // closure function
        if(pwd===password){
            return "access granted"
            }
        else{
            return "access decelined"
            }
        }
    return inner
}
const chkpassword=outer() 
console.log(chkpassword("3434")) */


// another way using terinary operator

function outer(){
    let password="1234"
    function inner(pwd){ // closure function
        return pwd===password?"access grant":"access decelined"
    }
  return inner
}
const chkpassword=outer() 
console.log(chkpassword("1234"))





 
