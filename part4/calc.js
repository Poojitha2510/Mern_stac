//this is reuseable module we can import this any where where we need

export function add(a,b){
    return a+b
}
export function subtract(a,b){
    return a-b
}

// another way of exporting function
/*function add(a,b){
    return a+b
}
function subtract(a,b){
    return a-b
}
export{add,subtract}*/


// if there is only one function then we can make it default
// so there need not to write curly braces while importing
/*export default function add(a,b){
    return a+b
}*/

// export default {add}

//we can also writee
/*export default function add(a,b){
    return a+b
}
export function subtract(a,b){
    return a-b
} 
for this we can import add,{subtract} from "./calc.js"*/

