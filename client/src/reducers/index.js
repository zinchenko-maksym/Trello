import { combineReducers } from 'redux'


import boards from './boards'
import cards from './cards'
import lists from './lists'
import auth from './auth'
const combReducers = combineReducers({
	boards,
	cards,
	lists,
	auth
})

export default combReducers