import {
	LOAD_PRODUCTS,
	SET_LISTVIEW,
	SET_GRIDVIEW,
	UPDATE_SORT,
	SORT_PRODUCTS,
	UPDATE_FILTERS,
	FILTER_PRODUCTS,
	CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
	if (action.type === LOAD_PRODUCTS) {
		let maxPrice = action.payload.map(product => product.price)
		maxPrice = Math.max(...maxPrice)

		return {
			...state,
			// we must use here spread op., course we use the same payload in two different values, otherwise, we wont be able to go back from 'filtered_prod' to 'all_prod', it is the way the JS works with memory with the point in the same place in the memory!!!
			all_products: [...action.payload], // in this array always be all product
			filtered_products: [...action.payload], // this array always be changed
			filters: {
				...state.filters,
				max_price: maxPrice,
				price: maxPrice,
			},
		}
	}
	if (action.type === SET_GRIDVIEW) {
		return {
			...state,
			grid_view: true,
		}
	}
	if (action.type === SET_LISTVIEW) {
		return {
			...state,
			grid_view: false,
		}
	}
	if (action.type === UPDATE_SORT) {
		return {
			...state,
			sort: action.payload,
		}
	}
	if (action.type === SORT_PRODUCTS) {
		const { sort, filtered_products } = state
		let tempProducts = [...filtered_products]
		if (sort === 'price-lowest') {
			//short way to sort:
			tempProducts = filtered_products.sort((a, b) => a.price - b.price)

			// long way to solve this:
			// tempProducts = filtered_products.sort((a, b) => {
			// 	if (a < b) {
			// 		return -1
			// 	}
			// 	if (a > b) {
			// 		return 1
			// 	}
			// 	return 0
			// })
		}
		if (sort === 'price-highest') {
			tempProducts = filtered_products.sort((a, b) => b.price - a.price)
		}
		if (sort === 'name-a') {
			tempProducts = filtered_products.sort((a, b) => {
				return a.name.localeCompare(b.name)
			})
		}
		if (sort === 'name-z') {
			tempProducts = filtered_products.sort((a, b) => {
				return b.name.localeCompare(a.name)
			})
		}
		return {
			...state,
			filtered_products: tempProducts,
		}
	}
	if (action.type === UPDATE_FILTERS) {
		const { name, value } = action.payload
		return {
			...state,
			filters: {
				...state.filters,
				[name]: value, // dynamic key access by input names
			},
		}
	}
	if (action.type === FILTER_PRODUCTS) {
		const { all_products } = state
		const { text, category, company, color, price, shipping } = state.filters
		let tempProducts = [...all_products] // before we be filtering smth, we must always start with fresh copy of all products, we always need to have access to default data!!!

		//filtering:
		if (text) {
			tempProducts = tempProducts.filter(product => {
				return product.name.toLowerCase().startsWith(text)
			})
		}
		return {
			...state,
			filtered_products: tempProducts,
		}
	}
	if (action.type === CLEAR_FILTERS) {
		return {
			...state,
			filters: {
				...state.filters,
				text: '',
				company: 'all',
				category: 'all',
				color: 'all',
				price: state.filters.max_price,
				shipping: false,
			},
		}
	}

	throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
