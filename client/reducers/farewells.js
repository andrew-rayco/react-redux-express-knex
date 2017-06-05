function farewells (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_FAREWELLS':
    console.log(action);
      return [...action.farewells]
    default:
    console.log(action);
      return state
  }
}

export default farewells
