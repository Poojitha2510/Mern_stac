const obj = {
  name: "wipro",
  lastprice: 200,
  currprice: 250
}

console.log(obj.lastprice)// used to  acsess the value 

obj.growth = obj.currprice - obj.lastprice // adds this value to the object

console.log(obj)// prints the updated object

obj.percentage = (obj.growth * 100) / obj.lastprice // to calculat the growth percentage

console.log(obj)