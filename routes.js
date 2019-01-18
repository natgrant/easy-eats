const express = require('express')
const router = express.Router();
const data = require('./data.json')
const bodyParser = require('body-parser')
const fs = require('fs')
module.exports = router
router.use(bodyParser.urlencoded({extended: true}))

router.get('/', (req, res) => {

  res.render(__dirname + '/views/index',data)
  
})

router.get('/view', (req, res) => {

  res.render(__dirname + '/views/view', data)
})

router.get('/view/:id', (req, res) => {
  res.render(__dirname + '/views/dailydeals', data)
})



