import { combineReducers } from 'redux'
import dataPokedex from './GetPokemon'

export default combineReducers({
  getStorePokedex: dataPokedex
})
