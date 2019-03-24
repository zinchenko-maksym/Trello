import { combineReducers } from 'redux'

import placeInformation from './placeInformation'
import selectedPlaces from './selectedPlaces'


const combPlaces = combineReducers({
  placeInformation,
  selectedPlaces
})

export default combPlaces