// the value of a key can be a function in the object
// this keyword is used to acess the value of another key in the object

const employee={
    name:"joy",
    basic:3500,
    bonus:100,
    salary:function(){
        console.log(this.basic+this.bonus)
    }
}
employee.salary() 