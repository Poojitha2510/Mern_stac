//objects : refernce type of variable
// example for creating the object

/* const obj={
    name:"prathap",
    skill:"csap"
};
console.log(obj)//{ name: 'prathap', skill: 'csap' }  */

// another way of creating

/* const obj=new Object()
obj.name="prathap"
obj.skill="csap"
console.log(obj)//{ name: 'prathap', skill: 'csap' } */

// adding new key value

const obj=new Object()
obj.name="prathap"
obj.skill="csap"
//adding new element
let key="city"
let value="Hyderabad"
//obj.key=value or obj["key"]=value  //  {name: 'prathap', skill: 'csap', key: 'Hyderabad' }
obj[key]=value // { name: 'prathap', skill: 'csap', city: 'Hyderabad' }
console.log(obj)

// to delete the element in the object

delete obj.skill
console.log(obj)//{ name: 'prathap', city: 'Hyderabad' }



