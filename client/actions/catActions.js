import request from 'superagent'

export const receiveCats = (cats) => {
  return {
    type: 'DISPLAY_CATS',
    cats
  }
}

export function getCats () {
  return (dispatch) => {
    request
      .get(`/api/greetings/cats`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveCats(res.body))
      })
  }
}
