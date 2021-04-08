
export const ADD_TO_CART = 'ADD_TO_CART'
export const RESET_SHOP = 'RESET_SHOP'


export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    item
  }
}


export const resetShop = () => {
    return {
        type: RESET_SHOP
    }
}