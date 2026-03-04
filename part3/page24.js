//  storing the value of a key in another variable
const employee={
    name:"joy",
    skill:"java",
    city:"karepalli",
    state:"Telangana"
}
//normal method
/*const name=employee.name
const city=employee.city*/
//insted of above we can perform destructuring

const {name,city}=employee
console.log(name)// joy