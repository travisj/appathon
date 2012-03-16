express = require 'express'
rest = require 'restler'
coffeekup = require 'coffeekup'
crypto = require 'crypto'
fs = require 'fs'

port = process.env.PORT || 3000

app = express.createServer()

app.set 'views', __dirname + '/views'
app.use express.methodOverride()
app.use express.bodyParser()
app.use app.router
app.use express.static __dirname + '/public'
app.set 'view engine', 'coffee'
app.register '.coffee', coffeekup.adapters.express

app.get '/', (req, res) ->
	# let's get the user

	#rest.get(req.query.api_url + '/user-verification?user_token=' + req.query.user_id_token,).on 'complete', (data) ->
		#user_id = data.response['user-id']
		#exec 'php create_sig.php ' + user_id, (error, stdout, stdin) ->
			#rest.get(req.query.api_url + '/auth?user_id=' + user_id + '&plugin_id=' + req.query.plugin_id + '&signature=' + stdout).on 'complete', (data) ->
				#token = data.response.token

	res.render 'index',
		qs: req.query

app.listen port
console.log 'listening on ' + port
