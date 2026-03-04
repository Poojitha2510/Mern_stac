//primitive 
/*let a=10
console.log(typeof a)
let name="geetu"
console.log(typeof name)
let flag=true
console.log(typeof flag)
let promoted=undefined
console.log(typeof promoted)
let sec=null
console.log(typeof sec)
let num=654332156
console.log(typeof num)*/

// Non-primitive-Reference Type
const student={
    name:"John",
    age:21
}
console.log(student)
const s1=student
console.log(s1)
student.age=25
console.log(s1)