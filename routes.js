const express = require('express')
const router = express.Router();
const data = require('./data.json')
const bodyParser = require('body-parser')
const fs = require('fs')
module.exports = router
router.use(bodyParser.urlencoded({extended: true}))

router.get('/', (req, res) => {

  console.log(data)
  res.render(__dirname + '/views/index', data)
  
})

router.get('/view/:id', (req, res) => {
  var specialsArray = data.specials

for (var i=0; i < specialsArray.length;i++){ 

  if (Number(req.params.id) === specialsArray[i].id){
    var obj = specialsArray[i]
  
  return res.render(__dirname + '/views/dailydeals', obj)
}
}
res.send('No specials found :(')
})


