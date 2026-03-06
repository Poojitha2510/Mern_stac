// API taking the data from API we have built in method fetch to consume whole data in api and  
// it stores all the data in the form of string 
//.json method converts tha data into json format

async function getData() {
  try {
    const url = "https://jsonplaceholder.typicode.com/users"
    let result = await fetch(url);
    let data = await result.json()
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData()