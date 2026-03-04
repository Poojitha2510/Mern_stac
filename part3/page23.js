// looping the objects(loop throuh objects)
 /* const employee={
    name:"joy",
    skill:"java",
    city:"karepalli",
    state:"Telangana"
}
// looping the each key in object(employee)
for (let key in employee){
    console.log(key)//name skill city state [prints only keys]
    console.log(employee[key])//joy java karepalli Telangan [prints only values]
    console.log(key,employee[key])// [prints only keys and values]
} */

// properties of object gggggggggggggggggggggggggggggg
const employee={
    name:"joy",
    skill:"java",
    city:"karepalli",
    state:"Telangana"
}
console.log(Object.keys(employee))// [ 'name', 'skill', 'city', 'state' ]
console.log(Object.values(employee))//[ 'joy', 'java', 'karepalli', 'Telangana' ]
console.log(Object.entries(employee))// [
//   [ 'name', 'joy' ],
//   [ 'skill', 'java' ],
//   [ 'city', 'karepalli' ],
//   [ 'state', 'Telangana' ]
// ]







