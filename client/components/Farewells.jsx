import React from 'react'
import {connect} from 'react-redux'

import {getFarewells} from '../actions/farewells'

const renderFarewell = (farewell, key) => (
  <h1 key={key}>{farewell.text}</h1>
)

const Farewells = ({farewells, dispatch}) => (
  <div>
    <button onClick={() => dispatch(getFarewells())}>Show Farewells</button>
    {farewells.map(renderFarewell)}
  </div>
)

const mapStateToProps = (state) => {
  return {farewells: state.farewells}
}

export default connect (mapStateToProps)(Farewells)
