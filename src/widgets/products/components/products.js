import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

const ProductsComponent = (props) => (
  <View style={styles.section}>
    <View style={styles.product}>
      <View style={styles.values} >
        <Text style={props.item.available ? [styles.available, styles.name] : [styles.unavailable, styles.name]}>{props.item.name}</Text>
        <Text style={props.item.available ? styles.available : styles.unavailable}>Cantidad: {props.item.quantity - (props.productInCart !== null ? props.productInCart.quantity : 0)}</Text>
        <Text style={props.item.available ? styles.available : styles.unavailable}>Precio:      {props.item.price}</Text>
      </View>
      <View style={styles.add}>
        {
          props.item.available &&
          <View style={styles.add}>
            <View style={styles.quantity}>
              <TextInput
                value={props.product && props.product.id === props.item.id ? props.product.quantity : ''}
                defaultValue=''
                placeholder='0'
                keyboardType={'numeric'}
                onChangeText={value => {
                  const regex = new RegExp('^\\d+$');

                  if (regex.test(value)) {
                    if (parseInt(value) <= (props.item.quantity - (props.productInCart !== null ? props.productInCart.quantity : 0))) {
                      props.changeQuantity({ id: props.item.id, name: props.item.name, quantity: value })
                    } else {
                      ToastAndroid.show(
                        'La Cantidad digitada debe de ser menor a igual a la disponible',
                        ToastAndroid.LONG,
                      )
                    }
                  } else {
                    props.changeQuantity({})
                  }
                }}
                style={styles.input}
              />
            </View>
            <View style={styles.icon}>
              <Icon name="plus-circle" size={30} color="#248232" style={styles.iconAdd} onPress={() => {
                if (props.product && props.product.id === props.item.id) {
                  props.addToCart()
                } else {
                  ToastAndroid.show(
                    'Debes de digitar la cantidad que deseas agregar',
                    ToastAndroid.LONG,
                  )
                }
              }} />
            </View>
          </View>
        }
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  section: {
    paddingLeft: 20
  },
  values: {
    width: '50%',
    justifyContent: 'center'
  },
  add: {
    width: '50%',
    justifyContent: 'center'
  },
  product: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 2,
    borderWidth: 0.3,
    borderColor: '#d6d7da',
    backgroundColor: '#f3f3f3',
    padding: 10,
    marginBottom: 10
  },
  quantity: {
    width: '40%',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  icon: {
    width: '60%',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  add: {
    flex: 1,
    flexDirection: 'row'
  },
  input: {
    marginTop: 10,
    height: 40,
    maxWidth: 80,
    padding: 10,
    borderColor: '#d6d7da',
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: '#ffffff',
  },
  iconAdd: {
    position: 'relative',
    alignSelf: 'flex-end'
  },
  available: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1D2D44'
  },
  unavailable: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#b3b3b3'
  },
  name: {
    fontSize: 28
  }
})

export default ProductsComponent