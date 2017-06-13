function cats (state = [], action) {
  switch (action.type) {
    case 'DISPLAY_CATS':
    console.log(action.cats)
      return [...action.cats]

    case 'ADD_CAT':
    console.log('this is the ADD_CAT reducer', action.newCat)
      // let newState = [...state]
      // newState = {
      //   name: action.newCat.name,
      //   colour: action.newCat.colour,
      //   about: action.newCat.about
      // }
      return [...state, action.newCat]

    default:
      return state
  }
}

export default cats
