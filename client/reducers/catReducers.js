function cats (state = [], action) {
  switch (action.type) {
    case 'DISPLAY_CATS':
    console.log(action.cats)
      return [...action.cats]

    case 'ADD_CAT':
    console.log('this is the ADD_CAT reducer', action.newCat)
      return [...state, action.newCat]

    default:
      return state
  }
}

export default cats
