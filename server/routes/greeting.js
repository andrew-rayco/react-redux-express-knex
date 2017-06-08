var express = require('express')
var router = express.Router()

var greetingsDb = require('../db/greeting')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  greetingsDb.getGreetings(db)
    .then(greetings => {
      res.json(greetings)
    })
})

router.get('/cats', (req, res) => {
  let db = req.app.get('db')
  return db('cats')
    .select('*')
    .then(cats => {
      res.json(cats)
    })
})

module.exports = router
