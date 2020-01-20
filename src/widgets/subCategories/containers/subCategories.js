import React, { Component } from 'react'
import SubCategoriesComponent from '../components/subCategories'

export default class SubCategoriesContainer extends Component {
  render() {
    return (
      this.props.subCategories.map(item => {
        return (
          <SubCategoriesComponent
            key={item.id}
            item={item}
            products={this.props.products}
            cart={this.props.cart}
            addToCart={this.props.addToCart}
          />
        )
      })
    );
  }
}
