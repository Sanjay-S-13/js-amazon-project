export const cart = [];//modules works only on live server


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