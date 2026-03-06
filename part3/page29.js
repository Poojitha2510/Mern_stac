// some method:(like find method but it returns true or false) returns true or false if atleast one condition is true
/*const numbers=[23,21,22,27]
const result=numbers.some((number)=>number>23)
console.log(result)//true*/

// every method: it returns true when all the conditon are true
/*const numbers=[23,21,22,27]
const result=numbers.every((number)=>number>23)
console.log(result)//false*/

// based on above topics assignment is
//print pass if student score more than 40 in all subjects else fail
const subjectScore=[43,56.41,99]
const result=subjectScore.every((score)=>{
   if(score>40) console.log("pass")
    else console.log("fail")
})


