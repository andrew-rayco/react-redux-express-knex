import React from 'react'
import {connect} from 'react-redux'


const AddCat = (props) => {
  console.log(props)
  return (
  <form>
    <field>
      <label htmlFor="name">Name </label>
      <input onChange={handleChange} type="text" name="name" placeholder="name" />
    </field><br />
    <field>
      <label htmlFor="colour">Colour </label>
      <input type="text" name="colour" placeholder="colour" />
    </field><br />
    <field>
      <label htmlFor="about">About </label>
      <input type="text" name="about" placeholder="about" />
    </field><br />
    <input type="submit" />
  </form>
  )
}

function handleChange(e) {
 // not sure how to do this
}

const mapStateToProps = (state) => {
  return {cats: state.catReducers}
}


export default connect(mapStateToProps)(AddCat)
