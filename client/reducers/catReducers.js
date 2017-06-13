function cats (state = [], action) {
  switch (action.type) {
    case 'DISPLAY_CATS':
      return [...action.cats]

    case 'ADD_CAT':
      return [...state, action.newCat]

    default:
      return state
  }
}

export default cats
