const express = require ('express')
const hbs = require ('express-handlebars')
const routes = require('./routes')
const server = express ()

// Middleware
server.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'default',
    
  }))
  server.set('view engine', 'hbs')
  server.use(express.static('public'))
  server.use(express.urlencoded({extended: false}))
  server.use('/',routes)
  

  module.exports = server