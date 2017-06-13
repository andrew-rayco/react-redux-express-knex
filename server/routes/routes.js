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
  console.log('from server/routes: ', req)
  let db = req.app.get('db')
  return db('cats')
    .insert(req.body)
    .then(() => {
      res.sendStatus(201)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })

})

module.exports = router
