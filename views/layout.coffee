doctype 5
html lang: 'en', ->
	head ->
		link rel: 'stylesheet', href: '/css/bootstrap.min.css', type: 'text/css'

		title -> 'appathon!'

		script type: 'text/javascript', src: '/js/jquery-1.7.1.min.js'
		script type: 'text/javascript', src: '/js/underscore-min.js'
		script type: 'text/javascript', src: '/js/backbone-min.js'
		script type: 'text/javascript', src: @qs.js_api_url if @qs.js_api_url

		script type: 'text/javascript', ->
			'ANX.setConfig(' + JSON.stringify(@qs.config_object) + ');'

	body ->
		div -> @body
