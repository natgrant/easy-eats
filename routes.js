const express = require ('express')
const router = express.Router()
//const data = require ('')
const bodyParser = require ('body-parser')
const fs = require ('fs')

const server = express ()
router.use(bodyParser.urlencoded({extended: true}))

router.get('/',function(req,res){
    res.send('Welcome')
})








module.exports = router
