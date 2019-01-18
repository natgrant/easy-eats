const app = require ('./server')
var port = process.env.PORT || 3000

app.listen(port, function () {

  console.log('Server is listening on port', port)
})