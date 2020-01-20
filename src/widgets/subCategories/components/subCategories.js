import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import SubCategories from '../containers/subCategories'
import Products from '../../products/containers/products'

const SubCategoriesComponent = (props) => (
  <View style={styles.section}>
    <Text style={styles.description}>{props.item.name}</Text>
    <Products
      subCategory={props.item}
      products={props.products}
      cart={props.cart}
      addToCart={props.addToCart}
    />
    {
      props.item.sublevels &&
        <SubCategories
          subCategories={props.item.sublevels}
          products={props.products}
          cart={props.cart}
        />
    }
  </View>
)

const styles = StyleSheet.create({
  section: {
    paddingLeft: 20,
  },
  image: {

  },
  description: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4F6A7A'
  }
})

export default SubCategoriesComponent