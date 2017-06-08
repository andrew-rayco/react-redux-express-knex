import {combineReducers} from 'redux'

import greetings from './greetings'
import catReducers from './catReducers'

export default combineReducers({
  greetings,
  catReducers
})
