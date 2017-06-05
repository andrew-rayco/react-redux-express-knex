import {combineReducers} from 'redux'

import greetings from './greetings'
import farewells from './farewells'

export default combineReducers({
  greetings,
  farewells
})
