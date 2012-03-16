$ ->
	server = ANX.XFServer
	putABirdOnIt = new PutABirdOnIt()

	server.addRequestHandler 'getValues', (_x, callback) ->
		callback putABirdOnIt.getValues()
	server.addRequestHandler 'setValues', (data, callback) ->
		console.log 'data', data
		callback 'Data set.'

	ANX.setAsReady()

getValues = ->
	segment =
		boolean_operator: 'and'
		segment_group_targets: [ {
			boolean_operator: 'or'
			segments: [ { id: 57415, action: 'include' } ]
		} ]


PutABirdOnIt = ->
	_$weather = $ '#weather'
	_$tv = $ '#tv'
	_$gas = $ '#gas'
	_$stocks = $ '#stocks'

	_weathers = []
	_shows = []
	_stocks = []

	init = ->
		this.segments =
		 weather:
			 coverage: [
				 {type: "Sunny", segment: 59283}
				 {type: "Rainy", segment: 59284}
				 {type: "Cloudy", segment: 59285}
				 {type: "Snowy", segment: 59286} ]
			 temperature: [
				 {type: "< 30", segment: 59287}
				 {type: "30s", segment: 59288}
				 {type: "40s", segment: 59289}
				 {type: "50s", segment: 59290}
				 {type: "60s", segment: 59291}
				 {type: "70s", segment: 59292}
				 {type: "80s", segment: 59293}
				 {type: "90s", segment: 59294}
				 {type: "> 100", segment: 59295} ]
			 tv: [
					{name:'60 Minutes', image_url:'http://images.zap2it.com/images/tv-EP00000035/60-minutes-5.jpg', options:[
						{ segment: '59545', name: 'The show will start within 60 minutes.'}
						{ segment: '59546', name: 'The show will start within 30 minutes.'}
						{ segment: '59547', name: 'The show is currently running.'}
						{ segment: '59548', name: 'The show ended within 30 minutes.'}
						{ segment: '59549', name: 'The show ended within 60 minutes.'}
					]}
					{name:'The Andy Griffith Show', image_url:'http://images.zap2it.com/images/tv-EP00000324/the-andy-griffith-show-1.jpg', options:[
						{ segment: '59550', name: 'The show will start within 60 minutes.'}
						{ segment: '59551', name: 'The show will start within 30 minutes.'}
						{ segment: '59552', name: 'The show is currently running.'}
						{ segment: '59553', name: 'The show ended within 30 minutes.'}
						{ segment: '59554', name: 'The show ended within 60 minutes.'}
					]}
					{name:'Austin City Limits', image_url:'http://images.zap2it.com/images/tv-EP00000439/austin-city-limits-5.jpg', options:[
						{ segment: '59555', name: 'The show will start within 60 minutes.'}
						{ segment: '59556', name: 'The show will start within 30 minutes.'}
						{ segment: '59557', name: 'The show is currently running.'}
						{ segment: '59558', name: 'The show ended within 30 minutes.'}
						{ segment: '59559', name: 'The show ended within 60 minutes.'}
					]}
					{name:'Babar', image_url:'http://images.zap2it.com/images/tv-EP00000455/babar-2.jpg', options:[
						{ segment: '59560', name: 'The show will start within 60 minutes.'}
						{ segment: '59561', name: 'The show will start within 30 minutes.'}
						{ segment: '59562', name: 'The show is currently running.'}
						{ segment: '59563', name: 'The show ended within 30 minutes.'}
						{ segment: '59564', name: 'The show ended within 60 minutes.'}
					]}
					{name:'Barney & Friends', image_url:'http://images.zap2it.com/images/tv-EP00000479/barney-and-friends-7.jpg', options:[
						{ segment: '59565', name: 'The show will start within 60 minutes.'}
						{ segment: '59566', name: 'The show will start within 30 minutes.'}
						{ segment: '59567', name: 'The show is currently running.'}
						{ segment: '59568', name: 'The show ended within 30 minutes.'}
						{ segment: '59569', name: 'The show ended within 60 minutes.'}
					]}
				]
			stocks:[
				{ name: 'MSFT', options: [
					{ segment: 59297, name: 'Up' }
					{ segment: 59298, name: 'Down' }
					{ segment: 59299, name: 'No Change' }
					{ segment: 59307, name: 'Less than -2%' }
					{ segment: 59308, name: 'Between -2% and -1%' }
					{ segment: 59309, name: 'Between -1% and 0%' }
					{ segment: 59310, name: 'No Change' }
					{ segment: 59311, name: 'Between 0% and 1%' }
					{ segment: 59312, name: 'Between 1% and 2%' }
					{ segment: 59313, name: 'Greater than 2%' }
				]}
				{ name: 'YHOO', options: [
					{ segment: 59322, name: 'Up' }
					{ segment: 59323, name: 'Down' }
					{ segment: 59324, name: 'No Change' }
					{ segment: 59325, name: 'Less than -2%' }
					{ segment: 59326, name: 'Between -2% and -1%' }
					{ segment: 59327, name: 'Between -1% and 0%' }
					{ segment: 59328, name: 'No Change' }
					{ segment: 59329, name: 'Between 0% and 1%' }
					{ segment: 59330, name: 'Between 1% and 2%' }
					{ segment: 59331, name: 'Greater than 2%' }
				]}
				{ name: 'GOOG', options: [
					{ segment: 59332, name: 'Up' }
					{ segment: 59333, name: 'Down' }
					{ segment: 59334, name: 'No Change' }
					{ segment: 59335, name: 'Less than -2%' }
					{ segment: 59336, name: 'Between -2% and -1%' }
					{ segment: 59337, name: 'Between -1% and 0%' }
					{ segment: 59338, name: 'No Change' }
					{ segment: 59339, name: 'Between 0% and 1%' }
					{ segment: 59340, name: 'Between 1% and 2%' }
					{ segment: 59341, name: 'Greater than 2%' }
				]}
				{ name: 'NASDAQ', options: [
					{ segment: 59342, name: 'Up' }
					{ segment: 59343, name: 'Down' }
					{ segment: 59344, name: 'No Change' }
					{ segment: 59345, name: 'Less than -2%' }
					{ segment: 59346, name: 'Between -2% and -1%' }
					{ segment: 59347, name: 'Between -1% and 0%' }
					{ segment: 59348, name: 'No Change' }
					{ segment: 59349, name: 'Between 0% and 1%' }
					{ segment: 59350, name: 'Between 1% and 2%' }
					{ segment: 59351, name: 'Greater than 2%' }
				]}
				{ name: 'GOLD', options: [
					{ segment: 59352, name: 'Up' }
					{ segment: 59353, name: 'Down' }
					{ segment: 59354, name: 'No Change' }
					{ segment: 59355, name: 'Less than -2%' }
					{ segment: 59356, name: 'Between -2% and -1%' }
					{ segment: 59357, name: 'Between -1% and 0%' }
					{ segment: 59358, name: 'No Change' }
					{ segment: 59359, name: 'Between 0% and 1%' }
					{ segment: 59360, name: 'Between 1% and 2%' }
					{ segment: 59361, name: 'Greater than 2%' }
				]}
			]

		_initWeather()
		_initTv()
		_initStocks()

	_getSegs = (objs) ->
		segments = []
		_.each objs, (obj) ->
			segment_id = obj.getId()
			segments.push { id: segment_id, action: 'include' } if segment_id

		return false if segments.length == 0
		return {
			boolean_operator: 'or',
			segments: segments
		}

	_getWeather = ->
		_getSegs _weathers

	_getTv = ->
		_getSegs _shows
	
	_getStocks = ->
		_getSegs _stocks

	_initWeather = ->
		_.each this.segments.weather.coverage, (weather) ->
			weather = new Weather weather
			_weathers.push weather
			_$weather.append weather.getDomElement()
		_$weather.append '<div class="clear"></div>'
		_.each this.segments.weather.temperature, (weather) ->
			weather = new Weather weather
			_weathers.push weather
			_$weather.append weather.getDomElement()
		_$weather.append '<div class="clear"></div>'

	_initTv = ->
		_.each this.segments.tv, (tv) ->
			show = new TvShow tv
			_shows.push show
			_$tv.append show.getDomElement()
		_$tv.append '<div class="clear"></div>'

	_initStocks = ->
		_.each this.segments.stocks, (s) ->
			stock = new Stock s
			_stocks.push stock
			_$stocks.append stock.getDomElement()
		_$stocks.append '<div class="clear"></div>'


	this.getValues = ->
		seg_group_targets = []

		weather_segs = _getWeather()
		seg_group_targets.push weather_segs if weather_segs

		tv_segs = _getTv()
		seg_group_targets.push tv_segs if tv_segs

		stocks_segs = _getStocks()
		seg_group_targets.push stocks_segs if stocks_segs

		segment =
			boolean_operator: 'and'
			segment_group_targets: seg_group_targets
	
	init()
	this

Weather = (data) ->
	_selected = false
	_$e = null
	_data = null
	_init = (data) ->
		img = ''
		img = '<img src="' + data.image_url + '">' if data.image_url
		_$e = $('<div class="item"><h3>' + data.type + '</h3>' + img + '</div>')

		_$e.bind 'click', (e) ->
			e.preventDefault()
			_selected = if _selected then false else true
			_$e.toggleClass 'selected', _selected

		_data = data

	this.getDomElement = ->
		_$e
	this.getId = ->
		if _selected then _data.segment else false

	_init data
	this

TvShow = (data) ->
	_selected = false
	_$e = null
	_data = null
	_init = (data) ->
		img = ''
		img = '<img src="' + data.image_url + '">' if data.image_url
		select = "<select>"
		_.each data.options, (option) ->
			select += '<option value="' + option.segment + '">' + option.name + '</option>'
		select += '</select>'
		_$e = $('<div class="item"><h3>' + data.name + '</h3>' + img + select + '</div>')

		_$e.find('select').bind 'click', (e) ->
			e.preventDefault()
			e.stopPropagation()

		_$e.bind 'click', (e) ->
			e.preventDefault()
			_selected = if _selected then false else true
			_$e.toggleClass 'selected', _selected

		_data = data

	this.getDomElement = ->
		_$e
	this.getId = ->
		if _selected then _$e.find('select').val() else false

	_init data
	this

Stock = (data) ->
	_selected = false
	_$e = null
	_data = null
	_init = (data) ->
		img = ''
		img = '<img src="' + data.image_url + '">' if data.image_url
		select = "<select>"
		_.each data.options, (option) ->
			select += '<option value="' + option.segment + '">' + option.name + '</option>'
		select += '</select>'
		_$e = $('<div class="item"><h3>' + data.name + '</h3>' + img + select + '</div>')

		_$e.find('select').bind 'click', (e) ->
			e.preventDefault()
			e.stopPropagation()

		_$e.bind 'click', (e) ->
			e.preventDefault()
			_selected = if _selected then false else true
			_$e.toggleClass 'selected', _selected

		_data = data

	this.getDomElement = ->
		_$e
	this.getId = ->
		if _selected then _$e.find('select').val() else false

	_init data
	this
