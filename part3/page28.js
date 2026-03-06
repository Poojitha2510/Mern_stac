// for loop
/* const numbers=[23,21,25,10,22]
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i])//23 21 25 10 22
}*/

// forEach loop
/* const numbers=[23,21,25,10,22]
numbers.forEach((number)=>{
    console.log(number)
})//23 21 25 10 22 */

//map method: used to loop and as well as used to create the new array
/* const numbers=[23,21,25,10,22]
numbers.map((number)=>{
    //console.log(number)
})

    // creating the new array using the map method

        numbers.map((number)=>{
                console.log(number+3)//26 24 28 13 25
              })
    // (another way) creating the new array using the map method
    const newArray=numbers.map((number)=>number+25) 
                */


// filter method : creates the new array with filtered values
 
   /* const numbers=[23,21,25,10,22] 
     const newArray=numbers.filter((number)=>number>20)
     console.log(newArray) //[ 23, 21, 25, 22 ]
     //creating the new array using the map method

        numbers.filter((number)=>{
                  
                return number>20
              })
        console.log(number)
        */ 

// find method:same as the filter method instead of returning the array it returns the value
// find used in unique numbers
 /*const numbers=[23,21,25,10,22]
 const value=numbers.find((number)=>number>20)
     console.log(value)*/
     
     
//reduce method: used to calculate total or sum of all the elements
/*const numbers=[23,21,22,27]
const result=numbers.reduce((sum,number)=>sum=sum+number,0)
console.log(result)*/

//spread operater
let numbers=[23,21,22,27]
numbers=[...numbers,99]
console.log(numbers)


     




