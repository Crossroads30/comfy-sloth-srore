import {
	ADD_TO_CART,
	CLEAR_CART,
	COUNT_CART_TOTALS,
	REMOVE_CART_ITEM,
	TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
	if (action.type === ADD_TO_CART) {
		const { id, color, amount, product } = action.payload
    // here we check if the item exist in the cart: 
		const tempItem = state.cart.find(item => item.id === id + color)

    //!!! we must combine id + color in order to add the same item with just different color!!! 

    // here if statment for if the item already exist in the cart:
		if (tempItem) {
			const tempCart = state.cart.map(cartItem => {
        // if it exist we must update only amount of this item!
				if (cartItem.id === id + color) {
					let newAmount = cartItem.amount + amount
          // this if for if the amount is bigger than sock of items
					if (newAmount > cartItem.max) {
            // if it's bigger, we assigment the stock value to the amount 
						newAmount = cartItem.max
					}
          // and return all prev props of the item with only changed amount of the adding item
					return { ...cartItem, amount: newAmount }
				} else {
          // if it's not bigger we just return item itself with chosen amount
					return cartItem
				}
			})
      // we return state & cart with our changed amount of the item 
			return { ...state, cart: tempCart }
		} else {
      // this statment for if item is not exist at the cart
      // we create a new one with all props
			const newItem = {
				id: id + color,
				name: product.name,
				color,
				amount,
				image: product.images[0].url,
				price: product.price,
				max: product.stock,
			}
      // we return new created item:
			return { ...state, cart: [...state.cart, newItem] }
		}
	}

	throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
