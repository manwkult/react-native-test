import React from 'react'
import {
  Button,
  Picker,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import RangeSlider from 'rn-range-slider'

const FiltersComponent = (props) => (
  <View>
    <View style={styles.filter}>
      <Text style={styles.filterTitle}>Filtros</Text>
    </View>
    <View style={styles.section}>
      <View style={styles.description}>
        <Text style={styles.filters}>Estado</Text>
      </View>
      <View style={styles.values}>
        <Picker
          selectedValue={props.state.status}
          style={styles.valuesPicker}
          onValueChange={(itemValue, itemIndex) => props.changeStatus(itemValue)}>
          <Picker.Item label="Todos" value="" />
          <Picker.Item label="Disponible" value="true" />
          <Picker.Item label="No Disponible" value="false" />
        </Picker>
      </View>
    </View>
    <View style={styles.section}>
      <View style={styles.description}>
        <Text style={styles.filters}>Cantidad</Text>
      </View>
      <View style={styles.values}>
        <TextInput
          value={props.state.quantity}
          keyboardType={'numeric'}
          onChangeText={value => {
            const reg = new RegExp('^\\d+$');

            (reg.test(value) || value === '') &&
              props.changeQuantity(value)
          }}
          style={styles.input}
          placeholder='Cantidad Disponible...'
        />
      </View>
    </View>
    <View style={styles.section}>
      <View style={styles.price}>
        <Text style={styles.filters}>Precio</Text>
      </View>
      <View style={styles.values}>
        <RangeSlider
          style={{ width: '100%', height: 80 }}
          gravity={'center'}
          min={1449}
          max={18849}
          step={20}
          initialLowValue={props.state.rangeLow}
          initialHighValue={props.state.rangeHigh}
          textFormat='Precio: $%d'
          selectionColor="#3df"
          blankColor="#f618"
          onValueChanged={(rangeLow, rangeHigh) => {
            props.changeRangePrice({ rangeLow, rangeHigh })
          }}
        />
      </View>
    </View>
    <View style={styles.actions}>
      <Button
        title="Filtrar"
        onPress={() => props.applyFilters()}
      />
    </View>
  </View>
)

const styles = StyleSheet.create({
  filter: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 50
  },
  filterTitle: {
    fontSize: 30,
    fontWeight: '600',
    fontWeight: 'bold',
    color: '#780F17',
    alignSelf: 'center'
  },
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
  price: {
    height: 120,
    width: '50%',
    justifyContent: 'center'
  },
  values: {
    width: '50%'
  },
  input: {
    height: 40,
    padding: 10,
    borderColor: '#d6d7da',
    borderRadius: 4,
    borderWidth: 1
  },
  valuesPicker: {
    height: 40,
    width: '100%'
  },
  filters: {
    fontSize: 25,
    fontWeight: '600',
    fontWeight: 'bold',
    color: '#577399',
  }
})

export default FiltersComponent