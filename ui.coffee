express = require 'express'
coffeekup = require 'coffeekup'

app = express.createServer()

app.set 'views', __dirname + '/views'
app.use express.methodOverride()
app.use express.bodyParser()
app.use app.router
app.use express.static __dirname + '/public'
app.set 'view engine', 'coffee'
app.register '.coffee', coffeekup.adapters.express

app.get '/', (req, res) ->
	res.render 'index',
		qs: req.query

app.listen 3000
console.log 'listening on 3000'
