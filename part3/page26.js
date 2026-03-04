//spread operater: used to re-assign the object and to add new elements
/*const items={
    name:"paddu",
    price:200,
    quantity:3

}
console.log(items)//{ name: 'paddu', price: 200, quantity: 3 }
const obj={...items,rating:4}
console.log(obj)//{ name: 'paddu', price: 200, quantity: 3, rating: 4 }*/


//re-assign
let items={// we use let to declare the variable while using the spread operater
    name:"paddu",
    price:200,
    quantity:3

}
items={...items,rating:4}
console.log(items)