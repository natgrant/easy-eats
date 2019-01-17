const express = require ('express')
const hbs = require ('express-handlebars')
const routes = require('./routes')
const server = express ()

// Middleware
server.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs',
    layoutsDir: __dirname + '/views/layouts/'
}))
  server.set('view engine', 'hbs')
  server.use(express.static('public'))
  server.use(express.urlencoded({extended: false}))
  server.use('/',routes)
  server.set('views', __dirname + '/views');


  module.exports = server