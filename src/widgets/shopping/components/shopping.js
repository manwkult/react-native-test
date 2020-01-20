import React from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

const ShoppingComponent = (props) => (
  <View>
    <View style={styles.section}>
      <View style={styles.description}>
        <Text style={styles.products}>{props.item.name}</Text>
      </View>
      <View style={styles.values}>
        <Text style={styles.products}>{props.item.quantity}</Text>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  section: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 30
  },
  description: {
    height: 40,
    width: '50%',
    justifyContent: 'center'
  },
  values: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  products: {
    fontSize: 25,
    fontWeight: '600',
    fontWeight: 'bold',
    color: '#577399',
  },
  actions: {
    marginTop: 10
  }
})

export default ShoppingComponent