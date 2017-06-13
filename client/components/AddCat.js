import React from 'react'
import {connect} from 'react-redux'

import {addCat} from '../actions/catActions'


class AddCat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newCat: {},
      msg: '',
      showForm: false
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.checkEmptyField(e) ? this.emptyFieldMessage() : this.allFieldsPopulated(e)

  }

  allFieldsPopulated(e) {
    this.props.dispatch(addCat(this.state.newCat))
    this.setState({newCat: {}, msg: '', showForm: false})
    e.target.name.value = ''    // There has to be a bitter way to clear the form after submission
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
  changeVisibility(boolean) {
    this.setState({showForm: boolean})
  }
  handleChange(e) {
    let newCat = {...this.state.newCat}
    newCat[e.target.name] = e.target.value
    this.setState({newCat})
  }

  render () {
    return (
      this.state.showForm
        ? (
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
          <button onClick={() => this.changeVisibility(false)}>Cancel</button>
          <p>{this.state.msg}</p>
        </form>
      )
        : <button onClick={() => this.changeVisibility(true)}>Add Cat</button>


    )
  }

}

const mapStateToProps = (state) => {
  return {cats: state.catReducers}
}


export default connect(mapStateToProps)(AddCat)
