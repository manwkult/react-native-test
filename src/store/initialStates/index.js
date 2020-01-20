import { categories } from '../../data/categories.json'
import { products } from '../../data/products.json'

export default {
  initialCategories: categories,
  initialProducts: products,
  categories,
  products,
  filter: false,
  shopping: false,
  filters: {
    status: '',
    quantity: '',
    rangeHigh: 18849,
    rangeLow: 1449
  },
  categorySelected: null,
  cart: []
}