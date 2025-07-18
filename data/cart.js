export let cart = [{
  ProductId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity : 2,
},{
  ProductId : "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity : 1,
}];
//modules works only on live server


  //checking whether cart is already contains a product 
  //if yes then sum 1 to the quantity 
  //otherwise add it to the cart 
export function addToCart(ProductId){
  let matchingItem;
          cart.forEach((cartItem) => {
            if(ProductId === cartItem.dataProdId){
              matchingItem = cartItem;
            }
          });

          if(matchingItem){
            matchingItem.quantity += 1;
          }
          else{
            cart.push({
              dataProdId : ProductId,
              quantity : 1
            });
          }    
}

export function removeFromCart(productId){
      const newCart = [];

      cart.forEach((cartItem) => {
        if(cartItem.ProductId !== productId){
          newCart.push(cartItem);
        }
      });
      cart = newCart;
}