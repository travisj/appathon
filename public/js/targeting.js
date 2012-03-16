(function() {
  var Gas, PutABirdOnIt, Stock, TvShow, Weather;
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
  PutABirdOnIt = function() {
    var init, _$gas, _$stocks, _$tv, _$weather, _gasses, _getSegs, _getStocks, _getTv, _getWeather, _initGas, _initStocks, _initTv, _initWeather, _shows, _stocks, _weathers;
    _$weather = $('#weather');
    _$tv = $('#tv');
    _$gas = $('#gas');
    _$stocks = $('#stocks');
    _weathers = [];
    _shows = [];
    _stocks = [];
    _gasses = [];
    init = function() {
      this.segments = {
        weather: {
          coverage: [
            {
              type: "Sunny",
              segment: 59283,
              image_url: '/img/Sunny.png'
            }, {
              type: "Rainy",
              segment: 59284,
              image_url: '/img/Raining.png'
            }, {
              type: "Cloudy",
              segment: 59285,
              image_url: '/img/Cloudy.png'
            }, {
              type: "Snowy",
              segment: 59286,
              image_url: '/img/Snowing.png'
            }
          ],
          temperature: [
            {
              type: "< 30",
              segment: 59287,
              image_url: '/img/1.png'
            }, {
              type: "30s",
              segment: 59288,
              image_url: '/img/1.png'
            }, {
              type: "40s",
              segment: 59289,
              image_url: '/img/2.png'
            }, {
              type: "50s",
              segment: 59290,
              image_url: '/img/3.png'
            }, {
              type: "60s",
              segment: 59291,
              image_url: '/img/4.png'
            }, {
              type: "70s",
              segment: 59292,
              image_url: '/img/5.png'
            }, {
              type: "80s",
              segment: 59293,
              image_url: '/img/6.png'
            }, {
              type: "90s",
              segment: 59294,
              image_url: '/img/7.png'
            }, {
              type: "> 100",
              segment: 59295,
              image_url: '/img/8.png'
            }
          ]
        },
        gas: [
          {
            segment: 1234,
            name: 'Up'
          }
        ],
        stocks: [
          {
            name: 'MSFT',
            image_url: '/img/Windows.png',
            options: [
              {
                segment: 59298,
                name: 'Up'
              }, {
                segment: 59297,
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
            image_url: '/img/Yahoo!.png',
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
            image_url: '/img/Google.png',
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
            image_url: '/img/Nasdaq.png',
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
            image_url: '/img/Gold.png',
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
        ],
        tv: [
          {
            name: '60 Minutes',
            image_url: 'http://images.zap2it.com/images/tv-EP00000035/60-minutes-5.jpg',
            options: [
              {
                segment: '59809',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '59810',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '59811',
                name: 'The show is currently running.'
              }, {
                segment: '59812',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '59813',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Andy Griffith Show',
            image_url: 'http://images.zap2it.com/images/tv-EP00000324/the-andy-griffith-show-1.jpg',
            options: [
              {
                segment: '59814',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '59815',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '59816',
                name: 'The show is currently running.'
              }, {
                segment: '59817',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '59818',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Austin City Limits',
            image_url: 'http://images.zap2it.com/images/tv-EP00000439/austin-city-limits-5.jpg',
            options: [
              {
                segment: '59819',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '59820',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '59821',
                name: 'The show is currently running.'
              }, {
                segment: '59822',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '59823',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Babar',
            image_url: 'http://images.zap2it.com/images/tv-EP00000455/babar-2.jpg',
            options: [
              {
                segment: '59824',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '59825',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '59826',
                name: 'The show is currently running.'
              }, {
                segment: '59827',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '59828',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Barney & Friends',
            image_url: 'http://images.zap2it.com/images/tv-EP00000479/barney-and-friends-7.jpg',
            options: [
              {
                segment: '59829',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '59830',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '59831',
                name: 'The show is currently running.'
              }, {
                segment: '59832',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '59833',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Beverly Hillbillies',
            image_url: 'http://images.zap2it.com/images/tv-EP00000552/the-beverly-hillbillies-4.jpg',
            options: [
              {
                segment: '59834',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '59835',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '59836',
                name: 'The show is currently running.'
              }, {
                segment: '59837',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '59838',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Cheers',
            image_url: 'http://images.zap2it.com/images/tv-EP00000882/cheers-7.jpg',
            options: [
              {
                segment: '59839',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '59840',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '59841',
                name: 'The show is currently running.'
              }, {
                segment: '59842',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '59843',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Days of our Lives',
            image_url: 'http://images.zap2it.com/images/tv-EP00001189/days-of-our-lives-5.jpg',
            options: [
              {
                segment: '59844',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '59845',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '59846',
                name: 'The show is currently running.'
              }, {
                segment: '59847',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '59848',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Entertainment Tonight',
            image_url: 'http://images.zap2it.com/images/tv-EP00001457/entertainment-tonight-3.jpg',
            options: [
              {
                segment: '59849',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '59850',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '59851',
                name: 'The show is currently running.'
              }, {
                segment: '59852',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '59853',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Face the Nation',
            image_url: 'http://images.zap2it.com/images/tv-EP00001522/face-the-nation-6.jpg',
            options: [
              {
                segment: '59854',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '59855',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '59856',
                name: 'The show is currently running.'
              }, {
                segment: '59857',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '59858',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }
        ]
      };
      _initWeather();
      _initTv();
      _initStocks();
      return _initGas();
    };
    _getSegs = function(objs) {
      var segments;
      segments = [];
      _.each(objs, function(obj) {
        var segment_id;
        segment_id = obj.getId();
        if (typeof segment_id === 'string') {
          return _.each(segment_id.split(','), function(id) {
            if (id) {
              return segments.push({
                id: id,
                action: 'include'
              });
            }
          });
        } else {
          if (segment_id) {
            return segments.push({
              id: segment_id,
              action: 'include'
            });
          }
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
    _initGas = function() {
      _.each(this.segments.gas, function(g) {
        var gas;
        gas = new Gas(g);
        _gasses.push(gas);
        return _$gas.append(gas.getDomElement());
      });
      return _$gas.append('<div class="clear"></div>');
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
      var gasses_segs, seg_group_targets, segment, stocks_segs, tv_segs, weather_segs;
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
      gasses_segs = _getSegs(_gasses);
      if (gasses_segs) {
        seg_group_targets.push(gasses_segs);
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
  Gas = function(data) {
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
      _$e = $('<div class="item"><h3>' + data.name + '</h3>' + img + '</div>');
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
