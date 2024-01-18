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
		return {
			...state,
			// we must use here spread op., course we use the same payload in two different values, otherwise, we wont be able to go back from 'filtered_prod' to 'all_prod', it is the way the JS works with memory with the point in the same place in the memory!!!
			all_products: [...action.payload],
			filtered_products: [...action.payload],
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

	throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
