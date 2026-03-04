const companies = [
  {
    name: "Wipro",
    lastprice: 200,
    currprice: 250
  },
  {
    name: "Deloitte",
    lastprice: 250,
    currprice: 270
  }
];

function calc(obj) {

  console.log("Last Price:", obj.lastprice);

  obj.growth = obj.currprice - obj.lastprice;

  obj.growthper = (obj.growth * 100) / obj.lastprice;

  console.log(obj);
}

// Calling function for each company
calc(companies[0]);
calc(companies[1]);