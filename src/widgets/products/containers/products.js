import React, { Component } from 'react'
import ProductsComponent from '../components/products'

export default class ProductsContainer extends Component {
  state = {
    product: {}
  }

  changeQuantity = (product) => {
    this.setState({ product })
  }

  addToCart = () => {
    this.props.addToCart(this.state.product)
    this.setState({ product: {} })
  }

  render() {
    return (
      this.props.products.map(item => {
        if (item.sublevel_id === this.props.subCategory.id) {
          const index = this.props.cart.findIndex(product => product.id === item.id)

          const productInCart = index !== -1 ? this.props.cart[index] : null

          return (
            <ProductsComponent
              key={item.id}
              item={item}
              productInCart={productInCart}
              product={this.state.product}
              changeQuantity={this.changeQuantity}
              addToCart={this.addToCart}
            />
          )
        }
      })
    );
  }
}
