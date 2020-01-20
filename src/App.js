import React from 'react'
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import { connect } from 'react-redux'

import Icon from 'react-native-vector-icons/FontAwesome';

import * as actions from './store/actions'

import Categories from './widgets/categories/containers/categories'
import Filters from './widgets/filters/containers/filters'
import Shopping from './widgets/shopping/containers/shopping'

const App: () => React$Node = (props) => {
	return (
		<>
			<StatusBar barStyle='light-content' />
			<SafeAreaView>
				<ScrollView
					contentInsetAdjustmentBehavior='automatic'>
					<View>
						<View style={styles.sectionContainer}>
							<View style={styles.sectionTitle}>
								<Icon name="rocket" size={30} color="#780F17" style={styles.iconTitle} />
								<Text style={styles.title}>El Baratón</Text>
							</View>
							<View style={styles.sectionShoppingBasket}>
								<Text>({props.data.cart.length})</Text>
								<Icon name="shopping-basket" onPress={() => props.shopping(true)} size={30} color="#E54B4B" style={styles.iconsectionShoppingBasket} />
							</View>
							{
								props.data.filter ? (
									<Filters
										{...props}
									/>
								) : props.data.shopping ? (
									<Shopping
										{...props}
									/>
								) : (
											<View>
												<View style={styles.sectionFilter}>
													<Icon.Button name="filter" onPress={() => props.filter(true)} size={25} color="#FFFFFF" backgroundColor='#4F6A7A' style={styles.iconFilter}>
														<Text style={styles.textFilter}>Filtrar</Text>
													</Icon.Button>
												</View>
												<Categories
													{...props}
												/>
											</View>
										)
							}
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</>
	)
}

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 30
	},
	iconTitle: {
		marginRight: 10
	},
	sectionShoppingBasket: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginBottom: 20
	},
	iconsectionShoppingBasket: {
		margin: 10
	},
	title: {
		fontSize: 40,
		fontWeight: '600',
		fontWeight: 'bold',
		color: '#780F17',
	},
	sectionFilter: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginBottom: 10
	},
	iconFilter: {
		paddingLeft: 10,
		paddingRight: 10
	},
	textFilter: {
		fontWeight: 'bold',
		fontSize: 17,
		color: '#FFFFFF'
	}
})

const mapStateToProps = state => {
	return {
		data: state.data
	}
}

const mapDispatchToProps = dispatch => {
	return {
		selectCategory: (category) => dispatch(actions.selectCategory(category)),
		filter: (value) => dispatch(actions.filter(value)),
		shopping: (value) => dispatch(actions.shopping(value)),
		applyFilters: (filters) => dispatch(actions.applyFilters(filters)),
		addToCart: (product) => dispatch(actions.addToCart(product)),
		purchase: () => dispatch(actions.purchase()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
