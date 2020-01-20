import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native'
import ShoppingComponent from '../components/shopping'

export default class ShoppingContainer extends Component {
  render() {
    const purchase = this.props.data.cart.length
    return (
      <View>
        <View style={styles.shopping}>
          <Text style={styles.shoppingTitle}>Carrito</Text>
        </View>
        {
          this.props.data.cart.map(item => {
            return (
              <ShoppingComponent
                key={item.id}
                item={item}
                close={this.close}
              />
            )
          })
        }
        {
          purchase ? (
            <View style={styles.actions}>
              <Button
                title="Comprar"
                onPress={() => {
                  this.props.purchase()
                  this.props.shopping(false)
                }}
              />
            </View>
          ) : (
              <View>
              </View>
            )
        }
        <View style={styles.actions}>
          <Button
            title="Salir"
            color='darkgray'
            onPress={() => this.props.shopping(false)}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  shopping: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 50
  },
  shoppingTitle: {
    fontSize: 30,
    fontWeight: '600',
    fontWeight: 'bold',
    color: '#780F17',
    alignSelf: 'center'
  },
  actions: {
    marginTop: 10
  }
})
