import React, { Component } from 'react'
import CategoriesComponent from '../components/categories'

export default class CategoriesContainer extends Component {
  render() {
    return (
      this.props.data.categories.map(item => {
        if (this.props.data.categorySelected == null || this.props.data.categorySelected.id == item.id) {
          return (
            <CategoriesComponent
              key={item.id}
              item={item}
              products={this.props.data.products}
              cart={this.props.data.cart}
              addToCart={this.props.addToCart}
              categorySelected={this.props.data.categorySelected}
              selectCategory={this.props.selectCategory}
            />
          )
        }
      })
    );
  }
}
