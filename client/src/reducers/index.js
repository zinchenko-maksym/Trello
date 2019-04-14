import { combineReducers } from 'redux'


import boards from './boards'
import cards from './cards'
import lists from './lists'
const combReducers = combineReducers({
	boards,
	cards,
	lists
})

export default combReducers