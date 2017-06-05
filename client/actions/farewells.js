import request from 'superagent'

export const receiveFarewells = (farewells) => {
  return {
    type: 'RECEIVE_FAREWELLS',
    farewells
  }
}

export function getFarewells () {
  return (dispatch) => {
    request
    .get('/api/farewells')
    .end((err, res) => {
      if (err) {
        console.log(err.message)
        return
      }
      console.log(res.body);
      dispatch(receiveFarewells(res.body))
    })
  }
}
