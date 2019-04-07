import { combineReducers } from 'redux'


import boards from './boards'
import cards from './cards'

const combReducers = combineReducers({
	boards,
	cards
})

export default combReducers