function cats (state = [], action) {
  switch (action.type) {
    case 'DISPLAY_CATS':
    console.log(action.cats)
      return [...action.cats]
    default:
      return state
  }
}

export default cats
