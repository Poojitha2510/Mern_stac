const stockPrice = [
  { name: "wipro", lastPrice: 200, currentPrice: 250 },
  { name: "deloitte", lastPrice: 210, currentPrice: 270 },
  { name: "HDFC", lastPrice: 200, currentPrice: 290 }
];

function bestStock(stockPrice){
  let maxProfit = 0;
  let company = "";

  for(let i = 0; i < 3; i++){
    let profit = stockPrice[i].currentPrice - stockPrice[i].lastPrice;

    if(profit > maxProfit){
      maxProfit = profit;
      company = stockPrice[i].name;
    }
  }

  console.log(`Best stock price company: ${company}`);
}

bestStock(stockPrice);