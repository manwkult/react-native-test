import {
  SELECT_CATEGORY,
  FILTER,
  APPLY_FILTERS,
  ADD_TO_CART,
  SHOPPING,
  PURCHASE
} from './action-types'

export const filter = (value) => {
  return {
    type: FILTER,
    payload: { value }
  }
}

export const shopping = (value) => {
  return {
    type: SHOPPING,
    payload: { value }
  }
}

export const selectCategory = (category) => {
  return {
    type: SELECT_CATEGORY,
    payload: {
      category
    }
  }
}

export const applyFilters = (filters) => {
  return {
    type: APPLY_FILTERS,
    payload: {
      filters
    }
  }
}

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: {
      product
    }
  }
}

export const purchase = () => {
  return {
    type: PURCHASE
  }
}