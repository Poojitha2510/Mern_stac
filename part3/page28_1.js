const products=[
    {id:1,name:"product 1",price:25},
    {id:2,name:"product 2",price:50},
    {id:3,name:"product 3",price:45}
];
let cart=[]

//displayproduct addtocart(id) displayCart
// Display all products using forEach
function displayProduct(){
    products.forEach((product)=>{
        console.log(product)
    });
}

// Display products greater with price adove 40

function addToCart(id){
    const product = products.find((product) =>{
         product.id === id
});
    if(product){
        cart = [...cart, { ...product, quantity: 1 }];
    }
}

// add product 2 to cart using spread operater with new key quantity and assign 1
function displayCart(){
    console.log(cart);
}
displayProduct()
addToCart(2)
displayCart()
addToCart(3)


