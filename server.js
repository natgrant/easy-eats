const express = require ('express')
//const hbs = require ('express-handlebars')
const routes = require('./routes')
const app = express ()

// Middleware
// app.engine('hbs', hbs({
//   extname: 'hbs',
//   defaultLayout: 'main',
    
//   }))
  app.set('view engine', 'hbs')
  app.use(express.static('public'))
  app.use(express.urlencoded({extended: false}))
  app.use('/',routes)
  

  var exphbs = require('express-handlebars');
  var hbsHelpers = exphbs.create({
      helpers: require("./helpers/handlebars.js").helpers,
      defaultLayout: 'main',
      extname: '.hbs'
  });
  
  app.engine('.hbs', hbsHelpers.engine);
  app.set('view engine', '.hbs');

  hbs.registerHelper('for', function(from, to, incr, block) {
    var accum = '';
    for(var i = from; i < to; i += incr)
        accum += block.fn(i);
    return accum;
});

  module.exports = app