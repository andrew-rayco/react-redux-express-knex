import request from 'superagent'

export const receiveCats = (cats) => {
  return {
    type: 'DISPLAY_CATS',
    cats
  }
}

export const addNewCat = (newCat) => {
  console.log('action creator', newCat)
  return {
    type: 'ADD_CAT',
    newCat
  }
}

export function getCats () {
  return (dispatch) => {
    request
      .get(`/api/cats`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveCats(res.body))
      })
  }
}

export function addCat (newCat) {
  console.log(newCat)
  return (dispatch) => {
    request
      .post(`/api/cats`)
      .send(newCat)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(addNewCat(newCat))
      })
  }
}
