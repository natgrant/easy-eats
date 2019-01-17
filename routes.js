const express = require ('express')
const router = express.Router()
//const data = require ('')
const bodyParser = require ('body-parser')
const fs = require ('fs')

const server = express ()
router.use(bodyParser.urlencoded({extended: true}))

var data = {
    name : "test",
    age :"test"
}

router.get('/',function(req,res){
    res.render(__dirname + '/views/home',data)
})








module.exports = router
