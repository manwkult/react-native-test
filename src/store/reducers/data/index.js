import {
  SELECT_CATEGORY,
  FILTER,
  APPLY_FILTERS,
  ADD_TO_CART,
  SHOPPING,
  PURCHASE
} from '../../actions/action-types'

import initialState from '../../initialStates'

export default dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      const { categories } = state
      let categorySelected = categories.filter(item => item.id === action.payload.category)[0]

      return {
        ...state,
        categorySelected
      }
    case FILTER:
      return {
        ...state,
        filter: action.payload.value
      }
    case SHOPPING:
      return {
        ...state,
        filter: false,
        shopping: action.payload.value
      }
    case APPLY_FILTERS:
      const { filters } = action.payload
      const { initialProducts } = state

      const status = filters.status === '' ? null : filters.status === 'true' ? true : false
      const quantity = parseInt(filters.quantity === '' ? '0' : filters.quantity)
      const rangeHigh = filters.rangeHigh
      const rangeLow = filters.rangeLow

      const products = initialProducts.filter(product => {
        let filter

        if (status === null || status === product.available) {
          filter = true
        } else {
          filter = false
        }

        if (filter && (quantity === 0 || product.quantity >= quantity)) {
          filter = true
        } else {
          filter = false
        }

        const price = product.price.replace(/\D/g, '');

        if (filter && (parseInt(price) >= rangeLow && parseInt(price) <= rangeHigh)) {
          filter = true
        } else {
          filter = false
        }

        if (filter) {
          return product
        }
      })

      return {
        ...state,
        products,
        filter: false,
        filters
      }
    case ADD_TO_CART:
      let { cart } = state
      const { product } = action.payload

      let index = cart.findIndex(item => item.id === product.id)

      if (index === -1) {
        cart.push(product)
      } else {
        let item = cart[index]
        item.quantity = `${parseInt(item.quantity) + parseInt(product.quantity)}`
        cart.splice(index, 1, item)
      }

      return {
        ...state,
        cart
      }
    case PURCHASE:
      return {
        ...state,
        cart: []
      }
    default:
      return state
  }
}