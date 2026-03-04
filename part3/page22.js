// nested objects: object inside the object
const employee={
    name:"joy",
    skill:"java",
    adress:
    {
        city:"karepalli",
        state:"Telangana"
    }

}
console.log(employee)
//accesing of element in nested object
console.log(employee.adress.city)//karepalli
console.log(employee.adress)//{ city: 'karepalli', state: 'Telangana' }

// to add elements in the nested object address
employee.adress.country="India"
console.log(employee)//adress: { city: 'karepalli', state: 'Telangana', country: 'India' }

