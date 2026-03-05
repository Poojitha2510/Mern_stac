let customers = [
  {
    id: 1,
    name: "John",
    balance: 5000,
    transactions: [],
  },
  {
    id: 2,
    name: "Amy",
    balance: 5000,
    transactions: [],
  },
];

function checkBalance(id) {
  const customer = customers.find((customer) => customer.id === id);
  console.log(customer);
}

function deposit(id, amount) {
  customers = customers.map((customer) => {
    if (customer.id === id) {
      return {
        ...customer,
        balance: customer.balance + amount,
        transactions: [
          ...customer.transactions,
          {
            type: "credit",
            amount: amount,
            date: Date.now(),
          },
        ],
      };
    } else {
      return customer;
    }
  });
}
/*withdraw(id, amount)
-Check if sufficient balance
-Deduct amount
-Add transaction*/

function withdraw(id,amount){
    customers=customers.map((customer)=>{
        if(customer.id==id && customer.balance>=amount){
            return{
                ...customer,balance:customer.balance-amount,
                transactions: [
          ...customer.transactions,
          {
            type: "debit",
            amount: amount,
            date: Date.now(),
          },
        ],};

        }
        else{
            console.log("Insufficient balance")
            return customer
    
        }
    })
    
}

/*showTransactions(id)
-Print Transaction history*/

function showTransactions(id){
    transactions=transactions.map((transaction)=>{transaction.id==id
        console.log(transaction)
    })
}

//deposit(1, 1500);
//checkBalance(1)

//deposit(1, 1000);
//checkBalance(1)

withdraw(1,500)
checkBalance(1)

