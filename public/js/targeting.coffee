$ ->
	server = ANX.XFServer
	putABirdOnIt = new PutABirdOnIt()

	server.addRequestHandler 'getValues', (_x, callback) ->
		callback putABirdOnIt.getValues()
	server.addRequestHandler 'setValues', (data, callback) ->
		console.log 'data', data
		callback 'Data set.'

	ANX.setAsReady()

PutABirdOnIt = ->
	_$weather = $ '#weather'
	_$tv = $ '#tv'
	_$gas = $ '#gas'
	_$stocks = $ '#stocks'

	_weathers = []
	_shows = []
	_stocks = []
	_gasses = []

	init = ->
		this.segments =
		 weather:
			 coverage: [
				 {type: "Sunny", segment: 59283, image_url: '/img/Sunny.png'}
				 {type: "Rainy", segment: 59284, image_url: '/img/Raining.png'}
				 {type: "Cloudy", segment: 59285, image_url: '/img/Cloudy.png'}
				 {type: "Snowy", segment: 59286, image_url: '/img/Snowing.png'} ]
			 temperature: [
				 {type: "< 30", segment: 59287, image_url: '/img/1.png'}
				 {type: "30s", segment: 59288, image_url: '/img/1.png'}
				 {type: "40s", segment: 59289, image_url: '/img/2.png'}
				 {type: "50s", segment: 59290, image_url: '/img/3.png'}
				 {type: "60s", segment: 59291, image_url: '/img/4.png'}
				 {type: "70s", segment: 59292, image_url: '/img/5.png'}
				 {type: "80s", segment: 59293, image_url: '/img/6.png'}
				 {type: "90s", segment: 59294, image_url: '/img/7.png'}
				 {type: "> 100", segment: 59295, image_url: '/img/8.png'} ]
			gas: [
				{ segment: 1234, name: 'Up'}
			]
			stocks:[
				{ name: 'MSFT', image_url: '/img/Windows.png', options: [
					{ segment: 59298, name: 'Up' }
					{ segment: 59297, name: 'Down' }
					{ segment: 59299, name: 'No Change' }
					{ segment: 59307, name: 'Less than -2%' }
					{ segment: 59308, name: 'Between -2% and -1%' }
					{ segment: 59309, name: 'Between -1% and 0%' }
					{ segment: 59310, name: 'No Change' }
					{ segment: 59311, name: 'Between 0% and 1%' }
					{ segment: 59312, name: 'Between 1% and 2%' }
					{ segment: 59313, name: 'Greater than 2%' }
				]}
				{ name: 'YHOO', image_url: '/img/Yahoo!.png', options: [
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
				{ name: 'GOOG', image_url: '/img/Google.png', options: [
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
				{ name: 'NASDAQ', image_url: '/img/Nasdaq.png', options: [
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
				{ name: 'GOLD', image_url: '/img/Gold.png', options: [
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
			tv: [
				{name:'60 Minutes', image_url:'http://images.zap2it.com/images/tv-EP00000035/60-minutes-5.jpg', options:[
					{ segment: '59809', name: 'The show will start within 60 minutes.'}
					{ segment: '59810', name: 'The show will start within 30 minutes.'}
					{ segment: '59811', name: 'The show is currently running.'}
					{ segment: '59812', name: 'The show ended within 30 minutes.'}
					{ segment: '59813', name: 'The show ended within 60 minutes.'}
				]}
				{name:'The Andy Griffith Show', image_url:'http://images.zap2it.com/images/tv-EP00000324/the-andy-griffith-show-1.jpg', options:[
					{ segment: '59814', name: 'The show will start within 60 minutes.'}
					{ segment: '59815', name: 'The show will start within 30 minutes.'}
					{ segment: '59816', name: 'The show is currently running.'}
					{ segment: '59817', name: 'The show ended within 30 minutes.'}
					{ segment: '59818', name: 'The show ended within 60 minutes.'}
				]}
				{name:'Austin City Limits', image_url:'http://images.zap2it.com/images/tv-EP00000439/austin-city-limits-5.jpg', options:[
					{ segment: '59819', name: 'The show will start within 60 minutes.'}
					{ segment: '59820', name: 'The show will start within 30 minutes.'}
					{ segment: '59821', name: 'The show is currently running.'}
					{ segment: '59822', name: 'The show ended within 30 minutes.'}
					{ segment: '59823', name: 'The show ended within 60 minutes.'}
				]}
				{name:'Babar', image_url:'http://images.zap2it.com/images/tv-EP00000455/babar-2.jpg', options:[
					{ segment: '59824', name: 'The show will start within 60 minutes.'}
					{ segment: '59825', name: 'The show will start within 30 minutes.'}
					{ segment: '59826', name: 'The show is currently running.'}
					{ segment: '59827', name: 'The show ended within 30 minutes.'}
					{ segment: '59828', name: 'The show ended within 60 minutes.'}
				]}
				{name:'Barney & Friends', image_url:'http://images.zap2it.com/images/tv-EP00000479/barney-and-friends-7.jpg', options:[
					{ segment: '59829', name: 'The show will start within 60 minutes.'}
					{ segment: '59830', name: 'The show will start within 30 minutes.'}
					{ segment: '59831', name: 'The show is currently running.'}
					{ segment: '59832', name: 'The show ended within 30 minutes.'}
					{ segment: '59833', name: 'The show ended within 60 minutes.'}
				]}
				{name:'The Beverly Hillbillies', image_url:'http://images.zap2it.com/images/tv-EP00000552/the-beverly-hillbillies-4.jpg', options:[
					{ segment: '59834', name: 'The show will start within 60 minutes.'}
					{ segment: '59835', name: 'The show will start within 30 minutes.'}
					{ segment: '59836', name: 'The show is currently running.'}
					{ segment: '59837', name: 'The show ended within 30 minutes.'}
					{ segment: '59838', name: 'The show ended within 60 minutes.'}
				]}
				{name:'Cheers', image_url:'http://images.zap2it.com/images/tv-EP00000882/cheers-7.jpg', options:[
					{ segment: '59839', name: 'The show will start within 60 minutes.'}
					{ segment: '59840', name: 'The show will start within 30 minutes.'}
					{ segment: '59841', name: 'The show is currently running.'}
					{ segment: '59842', name: 'The show ended within 30 minutes.'}
					{ segment: '59843', name: 'The show ended within 60 minutes.'}
				]}
				{name:'Days of our Lives', image_url:'http://images.zap2it.com/images/tv-EP00001189/days-of-our-lives-5.jpg', options:[
					{ segment: '59844', name: 'The show will start within 60 minutes.'}
					{ segment: '59845', name: 'The show will start within 30 minutes.'}
					{ segment: '59846', name: 'The show is currently running.'}
					{ segment: '59847', name: 'The show ended within 30 minutes.'}
					{ segment: '59848', name: 'The show ended within 60 minutes.'}
				]}
				{name:'Entertainment Tonight', image_url:'http://images.zap2it.com/images/tv-EP00001457/entertainment-tonight-3.jpg', options:[
					{ segment: '59849', name: 'The show will start within 60 minutes.'}
					{ segment: '59850', name: 'The show will start within 30 minutes.'}
					{ segment: '59851', name: 'The show is currently running.'}
					{ segment: '59852', name: 'The show ended within 30 minutes.'}
					{ segment: '59853', name: 'The show ended within 60 minutes.'}
				]}
				{name:'Face the Nation', image_url:'http://images.zap2it.com/images/tv-EP00001522/face-the-nation-6.jpg', options:[
					{ segment: '59854', name: 'The show will start within 60 minutes.'}
					{ segment: '59855', name: 'The show will start within 30 minutes.'}
					{ segment: '59856', name: 'The show is currently running.'}
					{ segment: '59857', name: 'The show ended within 30 minutes.'}
					{ segment: '59858', name: 'The show ended within 60 minutes.'}
				]}
			]

		_initWeather()
		_initTv()
		_initStocks()
		_initGas()

	_getSegs = (objs) ->
		segments = []
		_.each objs, (obj) ->
			segment_id = obj.getId()
			if typeof segment_id == 'string'
				_.each segment_id.split(','), (id) ->
					segments.push { id: id, action: 'include' } if id
			else
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

	_initGas = ->
		_.each this.segments.gas, (g) ->
			gas = new Gas g
			_gasses.push gas
			_$gas.append gas.getDomElement()
		_$gas.append '<div class="clear"></div>'

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

		gasses_segs = _getSegs(_gasses)
		seg_group_targets.push gasses_segs if gasses_segs

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

Gas = (data) ->
	_selected = false
	_$e = null
	_data = null
	_init = (data) ->
		img = ''
		img = '<img src="' + data.image_url + '">' if data.image_url
		_$e = $('<div class="item"><h3>' + data.name + '</h3>' + img + '</div>')

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
