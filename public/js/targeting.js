(function() {
  var PutABirdOnIt, Stock, TvShow, Weather, getValues;
  $(function() {
    var putABirdOnIt, server;
    server = ANX.XFServer;
    putABirdOnIt = new PutABirdOnIt();
    server.addRequestHandler('getValues', function(_x, callback) {
      return callback(putABirdOnIt.getValues());
    });
    server.addRequestHandler('setValues', function(data, callback) {
      console.log('data', data);
      return callback('Data set.');
    });
    return ANX.setAsReady();
  });
  getValues = function() {
    var segment;
    return segment = {
      boolean_operator: 'and',
      segment_group_targets: [
        {
          boolean_operator: 'or',
          segments: [
            {
              id: 57415,
              action: 'include'
            }
          ]
        }
      ]
    };
  };
  PutABirdOnIt = function() {
    var init, _$gas, _$stocks, _$tv, _$weather, _getSegs, _getStocks, _getTv, _getWeather, _initStocks, _initTv, _initWeather, _shows, _stocks, _weathers;
    _$weather = $('#weather');
    _$tv = $('#tv');
    _$gas = $('#gas');
    _$stocks = $('#stocks');
    _weathers = [];
    _shows = [];
    _stocks = [];
    init = function() {
      this.segments = {
        weather: {
          coverage: [
            {
              type: "Sunny",
              segment: 59283
            }, {
              type: "Rainy",
              segment: 59284
            }, {
              type: "Cloudy",
              segment: 59285
            }, {
              type: "Snowy",
              segment: 59286
            }
          ],
          temperature: [
            {
              type: "< 30",
              segment: 59287
            }, {
              type: "30s",
              segment: 59288
            }, {
              type: "40s",
              segment: 59289
            }, {
              type: "50s",
              segment: 59290
            }, {
              type: "60s",
              segment: 59291
            }, {
              type: "70s",
              segment: 59292
            }, {
              type: "80s",
              segment: 59293
            }, {
              type: "90s",
              segment: 59294
            }, {
              type: "> 100",
              segment: 59295
            }
          ]
        },
        tv: [
          {
            name: '60 Minutes',
            image_url: 'http://images.zap2it.com/images/tv-EP00000035/60-minutes-5.jpg',
            options: [
              {
                segment: 59423,
                name: 'The show will start within 60 minutes.'
              }, {
                segment: 59424,
                name: 'The show will start within 30 minutes.'
              }, {
                segment: 59425,
                name: 'The show is currently running.'
              }, {
                segment: 59426,
                name: 'The show ended within 30 minutes.'
              }, {
                segment: 59427,
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Austin City Limits',
            image_url: 'http://images.zap2it.com/images/tv-EP00000439/austin-city-limits-5.jpg',
            options: [
              {
                segment: 59428,
                name: 'The show will start within 60 minutes.'
              }, {
                segment: 59429,
                name: 'The show will start within 30 minutes.'
              }, {
                segment: 59430,
                name: 'The show is currently running.'
              }, {
                segment: 59431,
                name: 'The show ended within 30 minutes.'
              }, {
                segment: 59432,
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Babar',
            image_url: 'http://images.zap2it.com/images/tv-EP00000455/babar-2.jpg',
            options: [
              {
                segment: 59433,
                name: 'The show will start within 60 minutes.'
              }, {
                segment: 59434,
                name: 'The show will start within 30 minutes.'
              }, {
                segment: 59435,
                name: 'The show is currently running.'
              }, {
                segment: 59436,
                name: 'The show ended within 30 minutes.'
              }, {
                segment: 59437,
                name: 'The show ended within 60 minutes.'
              }
            ]
          }
        ],
        stocks: [
          {
            name: 'MSFT',
            options: [
              {
                segment: 59297,
                name: 'Up'
              }, {
                segment: 59298,
                name: 'Down'
              }, {
                segment: 59299,
                name: 'No Change'
              }, {
                segment: 59307,
                name: 'Less than -2%'
              }, {
                segment: 59308,
                name: 'Between -2% and -1%'
              }, {
                segment: 59309,
                name: 'Between -1% and 0%'
              }, {
                segment: 59310,
                name: 'No Change'
              }, {
                segment: 59311,
                name: 'Between 0% and 1%'
              }, {
                segment: 59312,
                name: 'Between 1% and 2%'
              }, {
                segment: 59313,
                name: 'Greater than 2%'
              }
            ]
          }, {
            name: 'YHOO',
            options: [
              {
                segment: 59322,
                name: 'Up'
              }, {
                segment: 59323,
                name: 'Down'
              }, {
                segment: 59324,
                name: 'No Change'
              }, {
                segment: 59325,
                name: 'Less than -2%'
              }, {
                segment: 59326,
                name: 'Between -2% and -1%'
              }, {
                segment: 59327,
                name: 'Between -1% and 0%'
              }, {
                segment: 59328,
                name: 'No Change'
              }, {
                segment: 59329,
                name: 'Between 0% and 1%'
              }, {
                segment: 59330,
                name: 'Between 1% and 2%'
              }, {
                segment: 59331,
                name: 'Greater than 2%'
              }
            ]
          }, {
            name: 'GOOG',
            options: [
              {
                segment: 59332,
                name: 'Up'
              }, {
                segment: 59333,
                name: 'Down'
              }, {
                segment: 59334,
                name: 'No Change'
              }, {
                segment: 59335,
                name: 'Less than -2%'
              }, {
                segment: 59336,
                name: 'Between -2% and -1%'
              }, {
                segment: 59337,
                name: 'Between -1% and 0%'
              }, {
                segment: 59338,
                name: 'No Change'
              }, {
                segment: 59339,
                name: 'Between 0% and 1%'
              }, {
                segment: 59340,
                name: 'Between 1% and 2%'
              }, {
                segment: 59341,
                name: 'Greater than 2%'
              }
            ]
          }, {
            name: 'NASDAQ',
            options: [
              {
                segment: 59342,
                name: 'Up'
              }, {
                segment: 59343,
                name: 'Down'
              }, {
                segment: 59344,
                name: 'No Change'
              }, {
                segment: 59345,
                name: 'Less than -2%'
              }, {
                segment: 59346,
                name: 'Between -2% and -1%'
              }, {
                segment: 59347,
                name: 'Between -1% and 0%'
              }, {
                segment: 59348,
                name: 'No Change'
              }, {
                segment: 59349,
                name: 'Between 0% and 1%'
              }, {
                segment: 59350,
                name: 'Between 1% and 2%'
              }, {
                segment: 59351,
                name: 'Greater than 2%'
              }
            ]
          }, {
            name: 'GOLD',
            options: [
              {
                segment: 59352,
                name: 'Up'
              }, {
                segment: 59353,
                name: 'Down'
              }, {
                segment: 59354,
                name: 'No Change'
              }, {
                segment: 59355,
                name: 'Less than -2%'
              }, {
                segment: 59356,
                name: 'Between -2% and -1%'
              }, {
                segment: 59357,
                name: 'Between -1% and 0%'
              }, {
                segment: 59358,
                name: 'No Change'
              }, {
                segment: 59359,
                name: 'Between 0% and 1%'
              }, {
                segment: 59360,
                name: 'Between 1% and 2%'
              }, {
                segment: 59361,
                name: 'Greater than 2%'
              }
            ]
          }
        ]
      };
      _initWeather();
      _initTv();
      return _initStocks();
    };
    _getSegs = function(objs) {
      var segments;
      segments = [];
      _.each(objs, function(obj) {
        var segment_id;
        segment_id = obj.getId();
        if (segment_id) {
          return segments.push({
            id: segment_id,
            action: 'include'
          });
        }
      });
      if (segments.length === 0) {
        return false;
      }
      return {
        boolean_operator: 'or',
        segments: segments
      };
    };
    _getWeather = function() {
      return _getSegs(_weathers);
    };
    _getTv = function() {
      return _getSegs(_shows);
    };
    _getStocks = function() {
      return _getSegs(_stocks);
    };
    _initWeather = function() {
      _.each(this.segments.weather.coverage, function(weather) {
        weather = new Weather(weather);
        _weathers.push(weather);
        return _$weather.append(weather.getDomElement());
      });
      _$weather.append('<div class="clear"></div>');
      _.each(this.segments.weather.temperature, function(weather) {
        weather = new Weather(weather);
        _weathers.push(weather);
        return _$weather.append(weather.getDomElement());
      });
      return _$weather.append('<div class="clear"></div>');
    };
    _initTv = function() {
      _.each(this.segments.tv, function(tv) {
        var show;
        show = new TvShow(tv);
        _shows.push(show);
        return _$tv.append(show.getDomElement());
      });
      return _$tv.append('<div class="clear"></div>');
    };
    _initStocks = function() {
      _.each(this.segments.stocks, function(s) {
        var stock;
        stock = new Stock(s);
        _stocks.push(stock);
        return _$stocks.append(stock.getDomElement());
      });
      return _$stocks.append('<div class="clear"></div>');
    };
    this.getValues = function() {
      var seg_group_targets, segment, stocks_segs, tv_segs, weather_segs;
      seg_group_targets = [];
      weather_segs = _getWeather();
      if (weather_segs) {
        seg_group_targets.push(weather_segs);
      }
      tv_segs = _getTv();
      if (tv_segs) {
        seg_group_targets.push(tv_segs);
      }
      stocks_segs = _getStocks();
      if (stocks_segs) {
        seg_group_targets.push(stocks_segs);
      }
      return segment = {
        boolean_operator: 'and',
        segment_group_targets: seg_group_targets
      };
    };
    init();
    return this;
  };
  Weather = function(data) {
    var _$e, _data, _init, _selected;
    _selected = false;
    _$e = null;
    _data = null;
    _init = function(data) {
      var img;
      img = '';
      if (data.image_url) {
        img = '<img src="' + data.image_url + '">';
      }
      _$e = $('<div class="item"><h3>' + data.type + '</h3>' + img + '</div>');
      _$e.bind('click', function(e) {
        e.preventDefault();
        _selected = _selected ? false : true;
        return _$e.toggleClass('selected', _selected);
      });
      return _data = data;
    };
    this.getDomElement = function() {
      return _$e;
    };
    this.getId = function() {
      if (_selected) {
        return _data.segment;
      } else {
        return false;
      }
    };
    _init(data);
    return this;
  };
  TvShow = function(data) {
    var _$e, _data, _init, _selected;
    _selected = false;
    _$e = null;
    _data = null;
    _init = function(data) {
      var img, select;
      img = '';
      if (data.image_url) {
        img = '<img src="' + data.image_url + '">';
      }
      select = "<select>";
      _.each(data.options, function(option) {
        return select += '<option value="' + option.segment + '">' + option.name + '</option>';
      });
      select += '</select>';
      _$e = $('<div class="item"><h3>' + data.name + '</h3>' + img + select + '</div>');
      _$e.find('select').bind('click', function(e) {
        e.preventDefault();
        return e.stopPropagation();
      });
      _$e.bind('click', function(e) {
        e.preventDefault();
        _selected = _selected ? false : true;
        return _$e.toggleClass('selected', _selected);
      });
      return _data = data;
    };
    this.getDomElement = function() {
      return _$e;
    };
    this.getId = function() {
      if (_selected) {
        return _$e.find('select').val();
      } else {
        return false;
      }
    };
    _init(data);
    return this;
  };
  Stock = function(data) {
    var _$e, _data, _init, _selected;
    _selected = false;
    _$e = null;
    _data = null;
    _init = function(data) {
      var img, select;
      img = '';
      if (data.image_url) {
        img = '<img src="' + data.image_url + '">';
      }
      select = "<select>";
      _.each(data.options, function(option) {
        return select += '<option value="' + option.segment + '">' + option.name + '</option>';
      });
      select += '</select>';
      _$e = $('<div class="item"><h3>' + data.name + '</h3>' + img + select + '</div>');
      _$e.find('select').bind('click', function(e) {
        e.preventDefault();
        return e.stopPropagation();
      });
      _$e.bind('click', function(e) {
        e.preventDefault();
        _selected = _selected ? false : true;
        return _$e.toggleClass('selected', _selected);
      });
      return _data = data;
    };
    this.getDomElement = function() {
      return _$e;
    };
    this.getId = function() {
      if (_selected) {
        return _$e.find('select').val();
      } else {
        return false;
      }
    };
    _init(data);
    return this;
  };
}).call(this);
