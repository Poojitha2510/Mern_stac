const products=[
    {id:1,name:"product 1",price:25},
    {id:2,name:"product 2",price:50},
    {id:3,name:"product 3",price:45}
];

let cart=[];
// to display the entire products
function displayProduct(){
    products.forEach((product)=>{
        console.log(product);
    });
}
//ADD the products to cart and then display the cart
function addToCart(id){
    const product = products.find(
        (product) => product.id === id
    );

    if(product){
        cart = [...cart, { ...product, quantity: 1 }];
    }
}

function displayCart(){
    console.log(cart);
}

displayProduct();
addToCart(2);
displayCart();