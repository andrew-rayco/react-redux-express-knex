import React from 'react'
import {connect} from 'react-redux'

import {addCat} from '../actions/catActions'


class AddCat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newCat: {},
      msg: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.checkEmptyField(e) ? this.emptyFieldMessage() : this.allFieldsPopulated(e)
  }

  allFieldsPopulated(e) {
    this.props.dispatch(addCat(this.state.newCat))
    this.setState({newCat: '', msg: ''})
    e.target.name.value = ''    // There has to be a btter way to clear the form after submission
    e.target.colour.value = ''
    e.target.about.value = ''
  }

  checkEmptyField(e) {
    if (e.target.name.value == '' || e.target.colour.value == '' || e.target.about.value == '') {
      return true
    }
  }

  emptyFieldMessage() {
    this.setState({
      msg: 'you must complete all fields'
    })
  }

  handleChange(e) {
    let newCat = {...this.state.newCat}
    newCat[e.target.name] = e.target.value
    this.setState({newCat})
  }

  render () {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <field>
          <label htmlFor="name">Name </label>
          <input onChange={(e) => this.handleChange(e)} type="text" name="name" placeholder="name" />
        </field><br />
        <field>
          <label htmlFor="colour">Colour </label>
          <input onChange={(e) => this.handleChange(e)} type="text" name="colour" placeholder="colour" />
        </field><br />
        <field>
          <label htmlFor="about">About </label>
          <input onChange={(e) => this.handleChange(e)} type="text" name="about" placeholder="about" />
        </field><br />
        <input type="submit" />
        <p>{this.state.msg}</p>
      </form>
    )
  }

}

const mapStateToProps = (state) => {
  return {cats: state.catReducers}
}


export default connect(mapStateToProps)(AddCat)
