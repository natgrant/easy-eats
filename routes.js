const express = require('express')
const router = express.Router();
const data = require('./data.json')
const bodyParser = require('body-parser')
const fs = require('fs')
module.exports = router
router.use(bodyParser.urlencoded({extended: true}))

router.get('/', (req, res) => {

  res.render('index',data)
})




router.get('/?/:id', (req, res) => {
  var result = data.?.find(function (item) {
    return item.id == req.params.id
  })
  res.render('index/view', result)
})
