import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import SubCategories from '../../subCategories/containers/subCategories'

import Icon from 'react-native-vector-icons/FontAwesome';

const CategoriesComponent = (props) => (
  <View style={styles.section}>
    <View style={styles.category}>
      <Text style={styles.description} onPress={() => props.selectCategory(props.item.id)}>{props.item.name}</Text>
      {
        props.categorySelected != null && <Icon name="close" size={30} color="#780F17" style={styles.close} onPress={() => props.selectCategory(null)} />
      }
    </View>
    {
      props.item.sublevels &&
      <SubCategories
        subCategories={props.item.sublevels}
        products={props.products}
        cart={props.cart}
        addToCart={props.addToCart}
      />
    }
    <TextInput
      style={styles.input}
      placeholder='Buscar Producto...'
    />
  </View>
)

const styles = StyleSheet.create({
  section: {
    flex: 1,
    height: '100%',
    padding: 20,
    marginBottom: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  category: {
    flex: 1,
    flexDirection: 'column'
  },
  close: {
    position: 'absolute',
    alignSelf: 'flex-end'
  },
  description: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#577399'
  },
  input: {
    marginTop: 10,
    height: 40,
    padding: 10,
    borderColor: '#d6d7da',
    borderRadius: 4,
    borderWidth: 1
  }
})

export default CategoriesComponent