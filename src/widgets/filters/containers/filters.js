import React, { Component } from 'react'
import FiltersComponent from '../components/filters'

export default class FiltersContainer extends Component {
  state = {
    ...this.props.data.filters
  }

  changeStatus = (status) => {
    this.setState({ status })
  }

  changeQuantity = (quantity) => {
    this.setState({ quantity })
  }

  changeRangePrice = ({ rangeLow, rangeHigh }) => {
    this.setState({ rangeLow, rangeHigh })
  }

  applyFilters = () => {
    this.props.applyFilters({ ...this.state })
  }

  render() {
    return (
      <FiltersComponent
        state={{ ...this.state }}
        filter={this.props.filter}
        changeStatus={this.changeStatus}
        changeQuantity={this.changeQuantity}
        changeRangePrice={this.changeRangePrice}
        applyFilters={this.applyFilters}
      />
    )
  }
}
