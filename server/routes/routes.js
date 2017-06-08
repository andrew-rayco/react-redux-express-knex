var express = require('express')
var router = express.Router()

router.get('/cats', (req, res) => {
  let db = req.app.get('db')
  return db('cats')
    .select('*')
    .then(cats => {
      res.json(cats)
    })
})

router.post('/cats', (req, res) => {
  let db = req.app.get('db')
  return db('cats')
    .select('*')
    .then(cats => {
      res.send(res.body)
    })

})

module.exports = router
