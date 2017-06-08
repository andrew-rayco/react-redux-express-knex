import React from 'react'
import {connect} from 'react-redux'

import {getCats} from '../actions/catActions'

const renderCats = (cat, key) => {
  return (
    <div key={key}>
      <h2>{cat.name}</h2>
      <ul>
        <li>{cat.colour}</li>
        <li>{cat.about}</li>
      </ul>
    </div>
  )
}

const showCats = ({cats, dispatch}) => (
  <div>
    <button onClick={() => dispatch(getCats())}>Show cats</button>
    {cats.map(renderCats)}
  </div>

)

const mapStateToProps = (state) => {
  return {cats: state.catReducers}
}


export default connect(mapStateToProps)(showCats)
