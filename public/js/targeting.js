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
              image_url: '/img/Sunny.jpg'
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
              image_url: '/img/Snowing.jpg'
            }
          ],
          temperature: [
            {
              type: "< 30",
              segment: 59287,
              image_url: '/img/less30s.jpg'
            }, {
              type: "30s",
              segment: 59288,
              image_url: '/img/30s.jpg'
            }, {
              type: "40s",
              segment: 59289,
              image_url: '/img/40s.jpg'
            }, {
              type: "50s",
              segment: 59290,
              image_url: '/img/50s.jpg'
            }, {
              type: "60s",
              segment: 59291,
              image_url: '/img/60s.jpg'
            }, {
              type: "70s",
              segment: 59292,
              image_url: '/img/70s.jpg'
            }, {
              type: "80s",
              segment: 59293,
              image_url: '/img/80s.jpg'
            }, {
              type: "90s",
              segment: 59294,
              image_url: '/img/90s.jpg'
            }, {
              type: "> 100",
              segment: 59295,
              image_url: '/img/100s.jpg'
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
                segment: '60214',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60215',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60216',
                name: 'The show is currently running.'
              }, {
                segment: '60217',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60218',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Andy Griffith Show',
            image_url: 'http://images.zap2it.com/images/tv-EP00000324/the-andy-griffith-show-1.jpg',
            options: [
              {
                segment: '60219',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60220',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60221',
                name: 'The show is currently running.'
              }, {
                segment: '60222',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60223',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Austin City Limits',
            image_url: 'http://images.zap2it.com/images/tv-EP00000439/austin-city-limits-5.jpg',
            options: [
              {
                segment: '60224',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60225',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60226',
                name: 'The show is currently running.'
              }, {
                segment: '60227',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60228',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Babar',
            image_url: 'http://images.zap2it.com/images/tv-EP00000455/babar-2.jpg',
            options: [
              {
                segment: '60229',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60230',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60231',
                name: 'The show is currently running.'
              }, {
                segment: '60232',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60233',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Barney & Friends',
            image_url: 'http://images.zap2it.com/images/tv-EP00000479/barney-and-friends-7.jpg',
            options: [
              {
                segment: '60234',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60235',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60236',
                name: 'The show is currently running.'
              }, {
                segment: '60237',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60238',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Beverly Hillbillies',
            image_url: 'http://images.zap2it.com/images/tv-EP00000552/the-beverly-hillbillies-4.jpg',
            options: [
              {
                segment: '60239',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60240',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60241',
                name: 'The show is currently running.'
              }, {
                segment: '60242',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60243',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Cheers',
            image_url: 'http://images.zap2it.com/images/tv-EP00000882/cheers-7.jpg',
            options: [
              {
                segment: '60244',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60245',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60246',
                name: 'The show is currently running.'
              }, {
                segment: '60247',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60248',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Days of our Lives',
            image_url: 'http://images.zap2it.com/images/tv-EP00001189/days-of-our-lives-5.jpg',
            options: [
              {
                segment: '60249',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60250',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60251',
                name: 'The show is currently running.'
              }, {
                segment: '60252',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60253',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Entertainment Tonight',
            image_url: 'http://images.zap2it.com/images/tv-EP00001457/entertainment-tonight-3.jpg',
            options: [
              {
                segment: '60254',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60255',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60256',
                name: 'The show is currently running.'
              }, {
                segment: '60257',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60258',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Face the Nation',
            image_url: 'http://images.zap2it.com/images/tv-EP00001522/face-the-nation-6.jpg',
            options: [
              {
                segment: '60259',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60260',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60261',
                name: 'The show is currently running.'
              }, {
                segment: '60262',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60263',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Frontline',
            image_url: 'http://images.zap2it.com/images/tv-EP00001762/frontline-3.jpg',
            options: [
              {
                segment: '60264',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60265',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60266',
                name: 'The show is currently running.'
              }, {
                segment: '60267',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60268',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'General Hospital',
            image_url: 'http://images.zap2it.com/images/tv-EP00001807/general-hospital-1.jpg',
            options: [
              {
                segment: '60269',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60270',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60271',
                name: 'The show is currently running.'
              }, {
                segment: '60272',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60273',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Get Smart',
            image_url: 'http://images.zap2it.com/images/tv-EP00001826/get-smart-2.jpg',
            options: [
              {
                segment: '60274',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60275',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60276',
                name: 'The show is currently running.'
              }, {
                segment: '60277',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60278',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Good Morning America',
            image_url: 'http://images.zap2it.com/images/tv-EP00001893/good-morning-america-1.jpg',
            options: [
              {
                segment: '60279',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60280',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60281',
                name: 'The show is currently running.'
              }, {
                segment: '60282',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60283',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Hawaii Five-0',
            image_url: 'http://images.zap2it.com/images/tv-EP00002014/hawaii-five-0-7.jpg',
            options: [
              {
                segment: '60284',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60285',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60286',
                name: 'The show is currently running.'
              }, {
                segment: '60287',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60288',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Home Improvement',
            image_url: 'http://images.zap2it.com/images/tv-EP00002120/home-improvement-1.jpg',
            options: [
              {
                segment: '60289',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60290',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60291',
                name: 'The show is currently running.'
              }, {
                segment: '60292',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60293',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Hometime',
            image_url: 'http://images.zap2it.com/images/tv-EP00002130/hometime-3.jpg',
            options: [
              {
                segment: '60294',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60295',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60296',
                name: 'The show is currently running.'
              }, {
                segment: '60297',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60298',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Meet the Press',
            image_url: 'http://images.zap2it.com/images/tv-EP00002866/meet-the-press-6.jpg',
            options: [
              {
                segment: '60299',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60300',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60301',
                name: 'The show is currently running.'
              }, {
                segment: '60302',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60303',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Mission: Impossible',
            image_url: 'http://images.zap2it.com/images/tv-EP00002928/mission-impossible-4.jpg',
            options: [
              {
                segment: '60304',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60305',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60306',
                name: 'The show is currently running.'
              }, {
                segment: '60307',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60308',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Nature',
            image_url: 'http://images.zap2it.com/images/tv-EP00003054/nature-6.jpg',
            options: [
              {
                segment: '60309',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60310',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60311',
                name: 'The show is currently running.'
              }, {
                segment: '60312',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60313',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'NBC Nightly News',
            image_url: 'http://images.zap2it.com/images/tv-EP00003061/nbc-nightly-news-4.jpg',
            options: [
              {
                segment: '60314',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60315',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60316',
                name: 'The show is currently running.'
              }, {
                segment: '60317',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60318',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Nightline',
            image_url: 'http://images.zap2it.com/images/tv-EP00003138/nightline-1.jpg',
            options: [
              {
                segment: '60319',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60320',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60321',
                name: 'The show is currently running.'
              }, {
                segment: '60322',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60323',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Nightly Business Report',
            image_url: 'http://images.zap2it.com/images/tv-EP00003139/nightly-business-report-7.jpg',
            options: [
              {
                segment: '60324',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60325',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60326',
                name: 'The show is currently running.'
              }, {
                segment: '60327',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60328',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'NOVA',
            image_url: 'http://images.zap2it.com/images/tv-EP00003163/nova-5.jpg',
            options: [
              {
                segment: '60329',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60330',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60331',
                name: 'The show is currently running.'
              }, {
                segment: '60332',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60333',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Odd Couple',
            image_url: 'http://images.zap2it.com/images/tv-EP00003177/the-odd-couple-6.jpg',
            options: [
              {
                segment: '60334',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60335',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60336',
                name: 'The show is currently running.'
              }, {
                segment: '60337',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60338',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Roseanne',
            image_url: 'http://images.zap2it.com/images/tv-EP00003671/roseanne-1.jpg',
            options: [
              {
                segment: '60339',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60340',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60341',
                name: 'The show is currently running.'
              }, {
                segment: '60342',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60343',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Saturday Night Live',
            image_url: 'http://images.zap2it.com/images/tv-EP00003710/saturday-night-live-7.jpg',
            options: [
              {
                segment: '60344',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60345',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60346',
                name: 'The show is currently running.'
              }, {
                segment: '60347',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60348',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Sesame Street',
            image_url: 'http://images.zap2it.com/images/tv-EP00003786/sesame-street-5.jpg',
            options: [
              {
                segment: '60349',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60350',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60351',
                name: 'The show is currently running.'
              }, {
                segment: '60352',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60353',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Star Trek',
            image_url: 'http://images.zap2it.com/images/tv-EP00003985/star-trek-2.jpg',
            options: [
              {
                segment: '60354',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60355',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60356',
                name: 'The show is currently running.'
              }, {
                segment: '60357',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60358',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Starsky and Hutch',
            image_url: 'http://images.zap2it.com/images/tv-EP00003990/starsky-and-hutch-1.jpg',
            options: [
              {
                segment: '60359',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60360',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60361',
                name: 'The show is currently running.'
              }, {
                segment: '60362',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60363',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Streets of San Francisco',
            image_url: 'http://images.zap2it.com/images/tv-EP00004028/streets-of-san-francisco-1.jpg',
            options: [
              {
                segment: '60364',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60365',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60366',
                name: 'The show is currently running.'
              }, {
                segment: '60367',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60368',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'American Experience',
            image_url: 'http://images.zap2it.com/images/tv-EP00004188/american-experience-4.jpg',
            options: [
              {
                segment: '60369',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60370',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60371',
                name: 'The show is currently running.'
              }, {
                segment: '60372',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60373',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Bold and the Beautiful',
            image_url: 'http://images.zap2it.com/images/tv-EP00004217/the-bold-and-the-beautiful-7.jpg',
            options: [
              {
                segment: '60374',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60375',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60376',
                name: 'The show is currently running.'
              }, {
                segment: '60377',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60378',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Monkees',
            image_url: 'http://images.zap2it.com/images/tv-EP00004342/the-monkees-3.jpg',
            options: [
              {
                segment: '60379',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60380',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60381',
                name: 'The show is currently running.'
              }, {
                segment: '60382',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60383',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Price Is Right',
            image_url: 'http://images.zap2it.com/images/tv-EP00004372/the-price-is-right-2.jpg',
            options: [
              {
                segment: '60384',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60385',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60386',
                name: 'The show is currently running.'
              }, {
                segment: '60387',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60388',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Tonight Show With Jay Leno',
            image_url: 'http://images.zap2it.com/images/tv-EP00004397/the-tonight-show-with-jay-leno-1.jpg',
            options: [
              {
                segment: '60389',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60390',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60391',
                name: 'The show is currently running.'
              }, {
                segment: '60392',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60393',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Young and the Restless',
            image_url: 'http://images.zap2it.com/images/tv-EP00004422/the-young-and-the-restless-2.jpg',
            options: [
              {
                segment: '60394',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60395',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60396',
                name: 'The show is currently running.'
              }, {
                segment: '60397',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60398',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'This Old House',
            image_url: 'http://images.zap2it.com/images/tv-EP00004444/this-old-house-3.jpg',
            options: [
              {
                segment: '60399',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60400',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60401',
                name: 'The show is currently running.'
              }, {
                segment: '60402',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60403',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Waiting for God',
            image_url: 'http://images.zap2it.com/images/tv-EP00004697/waiting-for-god-9.jpg',
            options: [
              {
                segment: '60404',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60405',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60406',
                name: 'The show is currently running.'
              }, {
                segment: '60407',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60408',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Wall Street Journal Report With Maria Bartiromo',
            image_url: 'http://images.zap2it.com/images/tv-EP00004702/wall-street-journal-report-with-maria-bartiromo-1.jpg',
            options: [
              {
                segment: '60409',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60410',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60411',
                name: 'The show is currently running.'
              }, {
                segment: '60412',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60413',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Wheel of Fortune',
            image_url: 'http://images.zap2it.com/images/tv-EP00004762/wheel-of-fortune-1.jpg',
            options: [
              {
                segment: '60414',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60415',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60416',
                name: 'The show is currently running.'
              }, {
                segment: '60417',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60418',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Wild America',
            image_url: 'http://images.zap2it.com/images/tv-EP00004784/wild-america-2.jpg',
            options: [
              {
                segment: '60419',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60420',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60421',
                name: 'The show is currently running.'
              }, {
                segment: '60422',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60423',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Seinfeld',
            image_url: 'http://images.zap2it.com/images/tv-EP00016916/seinfeld-1.jpg',
            options: [
              {
                segment: '60424',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60425',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60426',
                name: 'The show is currently running.'
              }, {
                segment: '60427',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60428',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Cops',
            image_url: 'http://images.zap2it.com/images/tv-EP00017070/cops-6.jpg',
            options: [
              {
                segment: '60429',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60430',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60431',
                name: 'The show is currently running.'
              }, {
                segment: '60432',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60433',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Cosby Show',
            image_url: 'http://images.zap2it.com/images/tv-EP00017073/the-cosby-show-2.jpg',
            options: [
              {
                segment: '60434',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60435',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60436',
                name: 'The show is currently running.'
              }, {
                segment: '60437',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60438',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Fresh Prince of Bel-Air',
            image_url: 'http://images.zap2it.com/images/tv-EP00017413/the-fresh-prince-of-bel-air-2.jpg',
            options: [
              {
                segment: '60439',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60440',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60441',
                name: 'The show is currently running.'
              }, {
                segment: '60442',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60443',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Law & Order',
            image_url: 'http://images.zap2it.com/images/tv-EP00017617/law-and-order-3.jpg',
            options: [
              {
                segment: '60444',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60445',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60446',
                name: 'The show is currently running.'
              }, {
                segment: '60447',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60448',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Simpsons',
            image_url: 'http://images.zap2it.com/images/tv-EP00018693/the-simpsons-1.jpg',
            options: [
              {
                segment: '60449',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60450',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60451',
                name: 'The show is currently running.'
              }, {
                segment: '60452',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60453',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'ABC World News Now',
            image_url: 'http://images.zap2it.com/images/tv-EP00019116/abc-world-news-now-5.jpg',
            options: [
              {
                segment: '60454',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60455',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60456',
                name: 'The show is currently running.'
              }, {
                segment: '60457',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60458',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'CBS News Sunday Morning',
            image_url: 'http://images.zap2it.com/images/tv-EP00019128/cbs-news-sunday-morning-13.jpg',
            options: [
              {
                segment: '60459',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60460',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60461',
                name: 'The show is currently running.'
              }, {
                segment: '60462',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60463',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Up to the Minute',
            image_url: 'http://images.zap2it.com/images/tv-EP00019130/up-to-the-minute-5.jpg',
            options: [
              {
                segment: '60464',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60465',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60466',
                name: 'The show is currently running.'
              }, {
                segment: '60467',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60468',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'CBS Morning News',
            image_url: 'http://images.zap2it.com/images/tv-EP00019131/cbs-morning-news-2.jpg',
            options: [
              {
                segment: '60469',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60470',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60471',
                name: 'The show is currently running.'
              }, {
                segment: '60472',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60473',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Today',
            image_url: 'http://images.zap2it.com/images/tv-EP00019150/today-7.jpg',
            options: [
              {
                segment: '60474',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60475',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60476',
                name: 'The show is currently running.'
              }, {
                segment: '60477',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60478',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Dateline NBC',
            image_url: 'http://images.zap2it.com/images/tv-EP00019155/dateline-nbc-2.jpg',
            options: [
              {
                segment: '60479',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60480',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60481',
                name: 'The show is currently running.'
              }, {
                segment: '60482',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60483',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Charlie Rose',
            image_url: 'http://images.zap2it.com/images/tv-EP00019177/charlie-rose-6.jpg',
            options: [
              {
                segment: '60484',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60485',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60486',
                name: 'The show is currently running.'
              }, {
                segment: '60487',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60488',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Jerry Springer',
            image_url: 'http://images.zap2it.com/images/tv-EP00019186/jerry-springer-5.jpg',
            options: [
              {
                segment: '60489',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60490',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60491',
                name: 'The show is currently running.'
              }, {
                segment: '60492',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60493',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Inside Edition',
            image_url: 'http://images.zap2it.com/images/tv-EP00019190/inside-edition-10.jpg',
            options: [
              {
                segment: '60494',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60495',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60496',
                name: 'The show is currently running.'
              }, {
                segment: '60497',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60498',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'SportsCenter',
            image_url: 'http://images.zap2it.com/images/tv-EP00019917/sportscenter-1.jpg',
            options: [
              {
                segment: '60499',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60500',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60501',
                name: 'The show is currently running.'
              }, {
                segment: '60502',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60503',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Busytown Mysteries',
            image_url: 'http://images.zap2it.com/images/tv-EP00023729/busytown-mysteries-4.jpg',
            options: [
              {
                segment: '60504',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60505',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60506',
                name: 'The show is currently running.'
              }, {
                segment: '60507',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60508',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Outside the Lines',
            image_url: 'http://images.zap2it.com/images/tv-EP00029653/outside-the-lines-4.jpg',
            options: [
              {
                segment: '60509',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60510',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60511',
                name: 'The show is currently running.'
              }, {
                segment: '60512',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60513',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Inside Edition Weekend',
            image_url: 'http://images.zap2it.com/images/tv-EP00040457/inside-edition-weekend-3.jpg',
            options: [
              {
                segment: '60514',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60515',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60516',
                name: 'The show is currently running.'
              }, {
                segment: '60517',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60518',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Arthur',
            image_url: 'http://images.zap2it.com/images/tv-EP00044107/arthur-1.jpg',
            options: [
              {
                segment: '60519',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60520',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60521',
                name: 'The show is currently running.'
              }, {
                segment: '60522',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60523',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Inside the NBA',
            image_url: 'http://images.zap2it.com/images/tv-EP00047232/inside-the-nba-8.jpg',
            options: [
              {
                segment: '60524',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60525',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60526',
                name: 'The show is currently running.'
              }, {
                segment: '60527',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60528',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'WWE Monday Night RAW',
            image_url: 'http://images.zap2it.com/images/tv-EP00056512/wwe-monday-night-raw-3.jpg',
            options: [
              {
                segment: '60529',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60530',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60531',
                name: 'The show is currently running.'
              }, {
                segment: '60532',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60533',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Baseball Tonight',
            image_url: 'http://images.zap2it.com/images/tv-EP00062434/baseball-tonight-2.jpg',
            options: [
              {
                segment: '60534',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60535',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60536',
                name: 'The show is currently running.'
              }, {
                segment: '60537',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60538',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Late Show With David Letterman',
            image_url: 'http://images.zap2it.com/images/tv-EP00076838/late-show-with-david-letterman-2.jpg',
            options: [
              {
                segment: '60539',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60540',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60541',
                name: 'The show is currently running.'
              }, {
                segment: '60542',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60543',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Frasier',
            image_url: 'http://images.zap2it.com/images/tv-EP00080939/frasier-1.jpg',
            options: [
              {
                segment: '60544',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60545',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60546',
                name: 'The show is currently running.'
              }, {
                segment: '60547',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60548',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Friends',
            image_url: 'http://images.zap2it.com/images/tv-EP00115127/friends-3.jpg',
            options: [
              {
                segment: '60549',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60550',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60551',
                name: 'The show is currently running.'
              }, {
                segment: '60552',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60553',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Extra',
            image_url: 'http://images.zap2it.com/images/tv-EP00115264/extra-6.jpg',
            options: [
              {
                segment: '60554',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60555',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60556',
                name: 'The show is currently running.'
              }, {
                segment: '60557',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60558',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'REAL Sports With Bryant Gumbel',
            image_url: 'http://images.zap2it.com/images/tv-EP00136527/real-sports-with-bryant-gumbel-6.jpg',
            options: [
              {
                segment: '60559',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60560',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60561',
                name: 'The show is currently running.'
              }, {
                segment: '60562',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60563',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'NewsRadio',
            image_url: 'http://images.zap2it.com/images/tv-EP00137194/newsradio-2.jpg',
            options: [
              {
                segment: '60564',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60565',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60566',
                name: 'The show is currently running.'
              }, {
                segment: '60567',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60568',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'FOX News Sunday With Chris Wallace',
            image_url: 'http://images.zap2it.com/images/tv-EP00177790/fox-news-sunday-with-chris-wallace-4.jpg',
            options: [
              {
                segment: '60569',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60570',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60571',
                name: 'The show is currently running.'
              }, {
                segment: '60572',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60573',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Access Hollywood',
            image_url: 'http://images.zap2it.com/images/tv-EP00188707/access-hollywood-13.jpg',
            options: [
              {
                segment: '60574',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60575',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60576',
                name: 'The show is currently running.'
              }, {
                segment: '60577',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60578',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Judge Judy',
            image_url: 'http://images.zap2it.com/images/tv-EP00188710/judge-judy-6.jpg',
            options: [
              {
                segment: '60579',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60580',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60581',
                name: 'The show is currently running.'
              }, {
                segment: '60582',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60583',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Everybody Loves Raymond',
            image_url: 'http://images.zap2it.com/images/tv-EP00190061/everybody-loves-raymond-2.jpg',
            options: [
              {
                segment: '60584',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60585',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60586',
                name: 'The show is currently running.'
              }, {
                segment: '60587',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60588',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Antiques Roadshow',
            image_url: 'http://images.zap2it.com/images/tv-EP00203652/antiques-roadshow-4.jpg',
            options: [
              {
                segment: '60589',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60590',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60591',
                name: 'The show is currently running.'
              }, {
                segment: '60592',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60593',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'King of the Hill',
            image_url: 'http://images.zap2it.com/images/tv-EP00207002/king-of-the-hill-2.jpg',
            options: [
              {
                segment: '60594',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60595',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60596',
                name: 'The show is currently running.'
              }, {
                segment: '60597',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60598',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The View',
            image_url: 'http://images.zap2it.com/images/tv-EP00225395/the-view-3.jpg',
            options: [
              {
                segment: '60599',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60600',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60601',
                name: 'The show is currently running.'
              }, {
                segment: '60602',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60603',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'South Park',
            image_url: 'http://images.zap2it.com/images/tv-EP00229827/south-park-4.jpg',
            options: [
              {
                segment: '60604',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60605',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60606',
                name: 'The show is currently running.'
              }, {
                segment: '60607',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60608',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Caillou',
            image_url: 'http://images.zap2it.com/images/tv-EP00233549/caillou-3.jpg',
            options: [
              {
                segment: '60609',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60610',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60611',
                name: 'The show is currently running.'
              }, {
                segment: '60612',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60613',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Decorating Cents',
            image_url: 'http://images.zap2it.com/images/tv-EP00234783/decorating-cents-10.jpg',
            options: [
              {
                segment: '60614',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60615',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60616',
                name: 'The show is currently running.'
              }, {
                segment: '60617',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60618',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'True Life',
            image_url: 'http://images.zap2it.com/images/tv-EP00254620/true-life-4.jpg',
            options: [
              {
                segment: '60619',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60620',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60621',
                name: 'The show is currently running.'
              }, {
                segment: '60622',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60623',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Good Eats',
            image_url: 'http://images.zap2it.com/images/tv-EP00273928/good-eats-7.jpg',
            options: [
              {
                segment: '60624',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60625',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60626',
                name: 'The show is currently running.'
              }, {
                segment: '60627',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60628',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Charmed',
            image_url: 'http://images.zap2it.com/images/tv-EP00274172/charmed-7.jpg',
            options: [
              {
                segment: '60629',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60630',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60631',
                name: 'The show is currently running.'
              }, {
                segment: '60632',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60633',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Judge Joe Brown',
            image_url: 'http://images.zap2it.com/images/tv-EP00277579/judge-joe-brown-8.jpg',
            options: [
              {
                segment: '60634',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60635',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60636',
                name: 'The show is currently running.'
              }, {
                segment: '60637',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60638',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The King of Queens',
            image_url: 'http://images.zap2it.com/images/tv-EP00277610/the-king-of-queens-2.jpg',
            options: [
              {
                segment: '60639',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60640',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60641',
                name: 'The show is currently running.'
              }, {
                segment: '60642',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60643',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'If Walls Could Talk',
            image_url: 'http://images.zap2it.com/images/tv-EP00277665/if-walls-could-talk-1.jpg',
            options: [
              {
                segment: '60644',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60645',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60646',
                name: 'The show is currently running.'
              }, {
                segment: '60647',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60648',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Joel Osteen',
            image_url: 'http://images.zap2it.com/images/tv-EP00283079/joel-osteen-9.jpg',
            options: [
              {
                segment: '60649',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60650',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60651',
                name: 'The show is currently running.'
              }, {
                segment: '60652',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60653',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Maury',
            image_url: 'http://images.zap2it.com/images/tv-EP00283083/maury-2.jpg',
            options: [
              {
                segment: '60654',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60655',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60656',
                name: 'The show is currently running.'
              }, {
                segment: '60657',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60658',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Comedy Central Presents',
            image_url: 'http://images.zap2it.com/images/tv-EP00288638/comedy-central-presents-4.jpg',
            options: [
              {
                segment: '60659',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60660',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60661',
                name: 'The show is currently running.'
              }, {
                segment: '60662',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60663',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Daily Show With Jon Stewart',
            image_url: 'http://images.zap2it.com/images/tv-EP00293053/the-daily-show-with-jon-stewart-2.jpg',
            options: [
              {
                segment: '60664',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60665',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60666',
                name: 'The show is currently running.'
              }, {
                segment: '60667',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60668',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Family Guy',
            image_url: 'http://images.zap2it.com/images/tv-EP00296001/family-guy-4.jpg',
            options: [
              {
                segment: '60669',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60670',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60671',
                name: 'The show is currently running.'
              }, {
                segment: '60672',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60673',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Futurama',
            image_url: 'http://images.zap2it.com/images/tv-EP00303483/futurama-3.jpg',
            options: [
              {
                segment: '60674',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60675',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60676',
                name: 'The show is currently running.'
              }, {
                segment: '60677',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60678',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Burt Wolf: Travels & Traditions',
            image_url: 'http://images.zap2it.com/images/tv-EP00303599/burt-wolf-travels-and-traditions-3.jpg',
            options: [
              {
                segment: '60679',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60680',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60681',
                name: 'The show is currently running.'
              }, {
                segment: '60682',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60683',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'DragonFlyTV',
            image_url: 'http://images.zap2it.com/images/tv-EP00308760/dragonflytv-4.jpg',
            options: [
              {
                segment: '60684',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60685',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60686',
                name: 'The show is currently running.'
              }, {
                segment: '60687',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60688',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Law & Order: Special Victims Unit',
            image_url: 'http://images.zap2it.com/images/tv-EP00316978/law-and-order-special-victims-unit-1.jpg',
            options: [
              {
                segment: '60689',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60690',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60691',
                name: 'The show is currently running.'
              }, {
                segment: '60692',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60693',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Angel',
            image_url: 'http://images.zap2it.com/images/tv-EP00317395/angel-2.jpg',
            options: [
              {
                segment: '60694',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60695',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60696',
                name: 'The show is currently running.'
              }, {
                segment: '60697',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60698',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Independent Lens',
            image_url: 'http://images.zap2it.com/images/tv-EP00317756/independent-lens-2.jpg',
            options: [
              {
                segment: '60699',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60700',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60701',
                name: 'The show is currently running.'
              }, {
                segment: '60702',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60703',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Judge Mathis',
            image_url: 'http://images.zap2it.com/images/tv-EP00324230/judge-mathis-3.jpg',
            options: [
              {
                segment: '60704',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60705',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60706',
                name: 'The show is currently running.'
              }, {
                segment: '60707',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60708',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Early Today',
            image_url: 'http://images.zap2it.com/images/tv-EP00324829/early-today-1.jpg',
            options: [
              {
                segment: '60709',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60710',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60711',
                name: 'The show is currently running.'
              }, {
                segment: '60712',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60713',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Bob the Builder',
            image_url: 'http://images.zap2it.com/images/tv-EP00326087/bob-the-builder-1.jpg',
            options: [
              {
                segment: '60714',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60715',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60716',
                name: 'The show is currently running.'
              }, {
                segment: '60717',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60718',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Curb Appeal',
            image_url: 'http://images.zap2it.com/images/tv-EP00326732/curb-appeal-5.jpg',
            options: [
              {
                segment: '60719',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60720',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60721',
                name: 'The show is currently running.'
              }, {
                segment: '60722',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60723',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'House Hunters',
            image_url: 'http://images.zap2it.com/images/tv-EP00326733/house-hunters-6.jpg',
            options: [
              {
                segment: '60724',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60725',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60726',
                name: 'The show is currently running.'
              }, {
                segment: '60727',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60728',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Cyberchase',
            image_url: 'http://images.zap2it.com/images/tv-EP00361880/cyberchase-4.jpg',
            options: [
              {
                segment: '60729',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60730',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60731',
                name: 'The show is currently running.'
              }, {
                segment: '60732',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60733',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Mexico: One Plate at a Time With Rick Bayless',
            image_url: 'http://images.zap2it.com/images/tv-EP00373256/mexico-one-plate-at-a-time-with-rick-bayless-3.jpg',
            options: [
              {
                segment: '60734',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60735',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60736',
                name: 'The show is currently running.'
              }, {
                segment: '60737',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60738',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'CSI: Crime Scene Investigation',
            image_url: 'http://images.zap2it.com/images/tv-EP00380341/csi-crime-scene-investigation-6.jpg',
            options: [
              {
                segment: '60739',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60740',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60741',
                name: 'The show is currently running.'
              }, {
                segment: '60742',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60743',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Clifford the Big Red Dog',
            image_url: 'http://images.zap2it.com/images/tv-EP00387968/clifford-the-big-red-dog-1.jpg',
            options: [
              {
                segment: '60744',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60745',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60746',
                name: 'The show is currently running.'
              }, {
                segment: '60747',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60748',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Cheaters',
            image_url: 'http://images.zap2it.com/images/tv-EP00395460/cheaters-4.jpg',
            options: [
              {
                segment: '60749',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60750',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60751',
                name: 'The show is currently running.'
              }, {
                segment: '60752',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60753',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Washington Week',
            image_url: 'http://images.zap2it.com/images/tv-EP00428005/washington-week-2.jpg',
            options: [
              {
                segment: '60754',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60755',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60756',
                name: 'The show is currently running.'
              }, {
                segment: '60757',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60758',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'According to Jim',
            image_url: 'http://images.zap2it.com/images/tv-EP00445691/according-to-jim-2.jpg',
            options: [
              {
                segment: '60759',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60760',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60761',
                name: 'The show is currently running.'
              }, {
                segment: '60762',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60763',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Scrubs',
            image_url: 'http://images.zap2it.com/images/tv-EP00446160/scrubs-1.jpg',
            options: [
              {
                segment: '60764',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60765',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60766',
                name: 'The show is currently running.'
              }, {
                segment: '60767',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60768',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Law & Order: Criminal Intent',
            image_url: 'http://images.zap2it.com/images/tv-EP00446173/law-and-order-criminal-intent-6.jpg',
            options: [
              {
                segment: '60769',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60770',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60771',
                name: 'The show is currently running.'
              }, {
                segment: '60772',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60773',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Unwrapped',
            image_url: 'http://images.zap2it.com/images/tv-EP00446477/unwrapped-1.jpg',
            options: [
              {
                segment: '60774',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60775',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60776',
                name: 'The show is currently running.'
              }, {
                segment: '60777',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60778',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Amazing Race',
            image_url: 'http://images.zap2it.com/images/tv-EP00446853/the-amazing-race-1.jpg',
            options: [
              {
                segment: '60779',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60780',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60781',
                name: 'The show is currently running.'
              }, {
                segment: '60782',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60783',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Cubix: Robots for Everyone',
            image_url: 'http://images.zap2it.com/images/tv-EP00455902/cubix-robots-for-everyone-5.jpg',
            options: [
              {
                segment: '60784',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60785',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60786',
                name: 'The show is currently running.'
              }, {
                segment: '60787',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60788',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: '30-Minute Meals',
            image_url: 'http://images.zap2it.com/images/tv-EP00455938/30-minute-meals-8.jpg',
            options: [
              {
                segment: '60789',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60790',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60791',
                name: 'The show is currently running.'
              }, {
                segment: '60792',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60793',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Smallville',
            image_url: 'http://images.zap2it.com/images/tv-EP00462144/smallville-1.jpg',
            options: [
              {
                segment: '60794',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60795',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60796',
                name: 'The show is currently running.'
              }, {
                segment: '60797',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60798',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Pardon the Interruption',
            image_url: 'http://images.zap2it.com/images/tv-EP00462474/pardon-the-interruption-3.jpg',
            options: [
              {
                segment: '60799',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60800',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60801',
                name: 'The show is currently running.'
              }, {
                segment: '60802',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60803',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'In Wine Country',
            image_url: 'http://images.zap2it.com/images/tv-EP00483557/in-wine-country-5.jpg',
            options: [
              {
                segment: '60804',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60805',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60806',
                name: 'The show is currently running.'
              }, {
                segment: '60807',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60808',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Last Call With Carson Daly',
            image_url: 'http://images.zap2it.com/images/tv-EP00484723/last-call-with-carson-daly-3.jpg',
            options: [
              {
                segment: '60809',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60810',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60811',
                name: 'The show is currently running.'
              }, {
                segment: '60812',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60813',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Crank Yankers',
            image_url: 'http://images.zap2it.com/images/tv-EP00490936/crank-yankers-4.jpg',
            options: [
              {
                segment: '60814',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60815',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60816',
                name: 'The show is currently running.'
              }, {
                segment: '60817',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60818',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Globe Trekker',
            image_url: 'http://images.zap2it.com/images/tv-EP00493710/globe-trekker-2.jpg',
            options: [
              {
                segment: '60819',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60820',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60821',
                name: 'The show is currently running.'
              }, {
                segment: '60822',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60823',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Cold Case Files',
            image_url: 'http://images.zap2it.com/images/tv-EP00508651/cold-case-files-3.jpg',
            options: [
              {
                segment: '60824',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60825',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60826',
                name: 'The show is currently running.'
              }, {
                segment: '60827',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60828',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Monk',
            image_url: 'http://images.zap2it.com/images/tv-EP00511651/monk-5.jpg',
            options: [
              {
                segment: '60829',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60830',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60831',
                name: 'The show is currently running.'
              }, {
                segment: '60832',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60833',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Who Wants to Be a Millionaire',
            image_url: 'http://images.zap2it.com/images/tv-EP00520094/who-wants-to-be-a-millionaire-4.jpg',
            options: [
              {
                segment: '60834',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60835',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60836',
                name: 'The show is currently running.'
              }, {
                segment: '60837',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60838',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Thomas & Friends',
            image_url: 'http://images.zap2it.com/images/tv-EP00523634/thomas-and-friends-7.jpg',
            options: [
              {
                segment: '60839',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60840',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60841',
                name: 'The show is currently running.'
              }, {
                segment: '60842',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60843',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'CSI: Miami',
            image_url: 'http://images.zap2it.com/images/tv-EP00524061/csi-miami-6.jpg',
            options: [
              {
                segment: '60844',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60845',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60846',
                name: 'The show is currently running.'
              }, {
                segment: '60847',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60848',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Without a Trace',
            image_url: 'http://images.zap2it.com/images/tv-EP00524080/without-a-trace-1.jpg',
            options: [
              {
                segment: '60849',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60850',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60851',
                name: 'The show is currently running.'
              }, {
                segment: '60852',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60853',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Around the Horn',
            image_url: 'http://images.zap2it.com/images/tv-EP00524434/around-the-horn-4.jpg',
            options: [
              {
                segment: '60854',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60855',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60856',
                name: 'The show is currently running.'
              }, {
                segment: '60857',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60858',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'This Week With George Stephanopoulos',
            image_url: 'http://images.zap2it.com/images/tv-EP00526784/this-week-with-george-stephanopoulos-7.jpg',
            options: [
              {
                segment: '60859',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60860',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60861',
                name: 'The show is currently running.'
              }, {
                segment: '60862',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60863',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Daily Buzz',
            image_url: 'http://images.zap2it.com/images/tv-EP00530254/the-daily-buzz-3.jpg',
            options: [
              {
                segment: '60864',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60865',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60866',
                name: 'The show is currently running.'
              }, {
                segment: '60867',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60868',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Chris Matthews Show',
            image_url: 'http://images.zap2it.com/images/tv-EP00534829/the-chris-matthews-show-4.jpg',
            options: [
              {
                segment: '60869',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60870',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60871',
                name: 'The show is currently running.'
              }, {
                segment: '60872',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60873',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Barefoot Contessa',
            image_url: 'http://images.zap2it.com/images/tv-EP00536629/barefoot-contessa-6.jpg',
            options: [
              {
                segment: '60874',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60875',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60876',
                name: 'The show is currently running.'
              }, {
                segment: '60877',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60878',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Design on a Dime',
            image_url: 'http://images.zap2it.com/images/tv-EP00545291/design-on-a-dime-3.jpg',
            options: [
              {
                segment: '60879',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60880',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60881',
                name: 'The show is currently running.'
              }, {
                segment: '60882',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60883',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Jimmy Kimmel Live',
            image_url: 'http://images.zap2it.com/images/tv-EP00545579/jimmy-kimmel-live-4.jpg',
            options: [
              {
                segment: '60884',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60885',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60886',
                name: 'The show is currently running.'
              }, {
                segment: '60887',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60888',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Storm Stories',
            image_url: 'http://images.zap2it.com/images/tv-EP00550642/storm-stories-6.jpg',
            options: [
              {
                segment: '60889',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60890',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60891',
                name: 'The show is currently running.'
              }, {
                segment: '60892',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60893',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'American Idol',
            image_url: 'http://images.zap2it.com/images/tv-EP00552080/american-idol-6.jpg',
            options: [
              {
                segment: '60894',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60895',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60896',
                name: 'The show is currently running.'
              }, {
                segment: '60897',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60898',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Made',
            image_url: 'http://images.zap2it.com/images/tv-EP00552974/made-1.jpg',
            options: [
              {
                segment: '60899',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60900',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60901',
                name: 'The show is currently running.'
              }, {
                segment: '60902',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60903',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Real Time With Bill Maher',
            image_url: 'http://images.zap2it.com/images/tv-EP00553722/real-time-with-bill-maher-2.jpg',
            options: [
              {
                segment: '60904',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60905',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60906',
                name: 'The show is currently running.'
              }, {
                segment: '60907',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60908',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'MythBusters',
            image_url: 'http://images.zap2it.com/images/tv-EP00557678/mythbusters-3.jpg',
            options: [
              {
                segment: '60909',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60910',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60911',
                name: 'The show is currently running.'
              }, {
                segment: '60912',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60913',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Holmes on Homes',
            image_url: 'http://images.zap2it.com/images/tv-EP00564974/holmes-on-homes-6.jpg',
            options: [
              {
                segment: '60914',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60915',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60916',
                name: 'The show is currently running.'
              }, {
                segment: '60917',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60918',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'American Chopper',
            image_url: 'http://images.zap2it.com/images/tv-EP00565783/american-chopper-4.jpg',
            options: [
              {
                segment: '60919',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60920',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60921',
                name: 'The show is currently running.'
              }, {
                segment: '60922',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60923',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'New Tricks',
            image_url: 'http://images.zap2it.com/images/tv-EP00572393/new-tricks-5.jpg',
            options: [
              {
                segment: '60924',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60925',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60926',
                name: 'The show is currently running.'
              }, {
                segment: '60927',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60928',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Sports Reporters',
            image_url: 'http://images.zap2it.com/images/tv-EP00578678/sports-reporters-6.jpg',
            options: [
              {
                segment: '60929',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60930',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60931',
                name: 'The show is currently running.'
              }, {
                segment: '60932',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60933',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: '48 Hours Mystery',
            image_url: 'http://images.zap2it.com/images/tv-EP00586260/48-hours-mystery-7.jpg',
            options: [
              {
                segment: '60934',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60935',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60936',
                name: 'The show is currently running.'
              }, {
                segment: '60937',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60938',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Sonic X',
            image_url: 'http://images.zap2it.com/images/tv-EP00587586/sonic-x-3.jpg',
            options: [
              {
                segment: '60939',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60940',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60941',
                name: 'The show is currently running.'
              }, {
                segment: '60942',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60943',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'NFL Live',
            image_url: 'http://images.zap2it.com/images/tv-EP00591081/nfl-live-3.jpg',
            options: [
              {
                segment: '60944',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60945',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60946',
                name: 'The show is currently running.'
              }, {
                segment: '60947',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60948',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Las Vegas',
            image_url: 'http://images.zap2it.com/images/tv-EP00592616/las-vegas-1.jpg',
            options: [
              {
                segment: '60949',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60950',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60951',
                name: 'The show is currently running.'
              }, {
                segment: '60952',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60953',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Cold Case',
            image_url: 'http://images.zap2it.com/images/tv-EP00592727/cold-case-1.jpg',
            options: [
              {
                segment: '60954',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60955',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60956',
                name: 'The show is currently running.'
              }, {
                segment: '60957',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60958',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Two and a Half Men',
            image_url: 'http://images.zap2it.com/images/tv-EP00592733/two-and-a-half-men-4.jpg',
            options: [
              {
                segment: '60959',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60960',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60961',
                name: 'The show is currently running.'
              }, {
                segment: '60962',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60963',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'One Tree Hill',
            image_url: 'http://images.zap2it.com/images/tv-EP00596702/one-tree-hill-1.jpg',
            options: [
              {
                segment: '60964',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60965',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60966',
                name: 'The show is currently running.'
              }, {
                segment: '60967',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60968',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Ellen DeGeneres Show',
            image_url: 'http://images.zap2it.com/images/tv-EP00599270/the-ellen-degeneres-show-8.jpg',
            options: [
              {
                segment: '60969',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60970',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60971',
                name: 'The show is currently running.'
              }, {
                segment: '60972',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60973',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Semi-Homemade Cooking With Sandra Lee',
            image_url: 'http://images.zap2it.com/images/tv-EP00605356/semi-homemade-cooking-with-sandra-lee-2.jpg',
            options: [
              {
                segment: '60974',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60975',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60976',
                name: 'The show is currently running.'
              }, {
                segment: '60977',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60978',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Tavis Smiley',
            image_url: 'http://images.zap2it.com/images/tv-EP00622869/tavis-smiley-7.jpg',
            options: [
              {
                segment: '60979',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60980',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60981',
                name: 'The show is currently running.'
              }, {
                segment: '60982',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60983',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Designed to Sell',
            image_url: 'http://images.zap2it.com/images/tv-EP00625603/designed-to-sell-1.jpg',
            options: [
              {
                segment: '60984',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60985',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60986',
                name: 'The show is currently running.'
              }, {
                segment: '60987',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60988',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Iron Chef America',
            image_url: 'http://images.zap2it.com/images/tv-EP00647153/iron-chef-america-1.jpg',
            options: [
              {
                segment: '60989',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60990',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60991',
                name: 'The show is currently running.'
              }, {
                segment: '60992',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60993',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Entourage',
            image_url: 'http://images.zap2it.com/images/tv-EP00665420/entourage-9.jpg',
            options: [
              {
                segment: '60994',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '60995',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '60996',
                name: 'The show is currently running.'
              }, {
                segment: '60997',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '60998',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Stargate Atlantis',
            image_url: 'http://images.zap2it.com/images/tv-EP00666541/stargate-atlantis-2.jpg',
            options: [
              {
                segment: '60999',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61000',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61001',
                name: 'The show is currently running.'
              }, {
                segment: '61002',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61003',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Rescue Me',
            image_url: 'http://images.zap2it.com/images/tv-EP00669353/rescue-me-7.jpg',
            options: [
              {
                segment: '61004',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61005',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61006',
                name: 'The show is currently running.'
              }, {
                segment: '61007',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61008',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Desperate Housewives',
            image_url: 'http://images.zap2it.com/images/tv-EP00672318/desperate-housewives-6.jpg',
            options: [
              {
                segment: '61009',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61010',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61011',
                name: 'The show is currently running.'
              }, {
                segment: '61012',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61013',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Insider',
            image_url: 'http://images.zap2it.com/images/tv-EP00672449/the-insider-8.jpg',
            options: [
              {
                segment: '61014',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61015',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61016',
                name: 'The show is currently running.'
              }, {
                segment: '61017',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61018',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Dog the Bounty Hunter',
            image_url: 'http://images.zap2it.com/images/tv-EP00675082/dog-the-bounty-hunter-3.jpg',
            options: [
              {
                segment: '61019',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61020',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61021',
                name: 'The show is currently running.'
              }, {
                segment: '61022',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61023',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'CSI: NY',
            image_url: 'http://images.zap2it.com/images/tv-EP00679714/csi-ny-5.jpg',
            options: [
              {
                segment: '61024',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61025',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61026',
                name: 'The show is currently running.'
              }, {
                segment: '61027',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61028',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'NCIS',
            image_url: 'http://images.zap2it.com/images/tv-EP00681911/ncis-6.jpg',
            options: [
              {
                segment: '61029',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61030',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61031',
                name: 'The show is currently running.'
              }, {
                segment: '61032',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61033',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'American Latino TV',
            image_url: 'http://images.zap2it.com/images/tv-EP00687708/american-latino-tv-1.jpg',
            options: [
              {
                segment: '61034',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61035',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61036',
                name: 'The show is currently running.'
              }, {
                segment: '61037',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61038',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'House',
            image_url: 'http://images.zap2it.com/images/tv-EP00688359/house-8.jpg',
            options: [
              {
                segment: '61039',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61040',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61041',
                name: 'The show is currently running.'
              }, {
                segment: '61042',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61043',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Biggest Loser',
            image_url: 'http://images.zap2it.com/images/tv-EP00696201/the-biggest-loser-6.jpg',
            options: [
              {
                segment: '61044',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61045',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61046',
                name: 'The show is currently running.'
              }, {
                segment: '61047',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61048',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'College GameDay',
            image_url: 'http://images.zap2it.com/images/tv-EP00710668/college-gameday-1.jpg',
            options: [
              {
                segment: '61049',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61050',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61051',
                name: 'The show is currently running.'
              }, {
                segment: '61052',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61053',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'NUMB3RS',
            image_url: 'http://images.zap2it.com/images/tv-EP00712872/numb3rs-2.jpg',
            options: [
              {
                segment: '61054',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61055',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61056',
                name: 'The show is currently running.'
              }, {
                segment: '61057',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61058',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Late Late Show With Craig Ferguson',
            image_url: 'http://images.zap2it.com/images/tv-EP00715123/the-late-late-show-with-craig-ferguson-3.jpg',
            options: [
              {
                segment: '61059',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61060',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61061',
                name: 'The show is currently running.'
              }, {
                segment: '61062',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61063',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'American Dad',
            image_url: 'http://images.zap2it.com/images/tv-EP00716445/american-dad-2.jpg',
            options: [
              {
                segment: '61064',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61065',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61066',
                name: 'The show is currently running.'
              }, {
                segment: '61067',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61068',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Doodlebops',
            image_url: 'http://images.zap2it.com/images/tv-EP00717327/doodlebops-6.jpg',
            options: [
              {
                segment: '61069',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61070',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61071',
                name: 'The show is currently running.'
              }, {
                segment: '61072',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61073',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Office',
            image_url: 'http://images.zap2it.com/images/tv-EP00726133/the-office-1.jpg',
            options: [
              {
                segment: '61074',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61075',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61076',
                name: 'The show is currently running.'
              }, {
                segment: '61077',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61078',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Deadliest Catch',
            image_url: 'http://images.zap2it.com/images/tv-EP00733129/deadliest-catch-1.jpg',
            options: [
              {
                segment: '61079',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61080',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61081',
                name: 'The show is currently running.'
              }, {
                segment: '61082',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61083',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Closer',
            image_url: 'http://images.zap2it.com/images/tv-EP00745376/the-closer-7.jpg',
            options: [
              {
                segment: '61084',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61085',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61086',
                name: 'The show is currently running.'
              }, {
                segment: '61087',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61088',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Dancing With the Stars',
            image_url: 'http://images.zap2it.com/images/tv-EP00747366/dancing-with-the-stars-3.jpg',
            options: [
              {
                segment: '61089',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61090',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61091',
                name: 'The show is currently running.'
              }, {
                segment: '61092',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61093',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Criminal Minds',
            image_url: 'http://images.zap2it.com/images/tv-EP00753791/criminal-minds-11.jpg',
            options: [
              {
                segment: '61094',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61095',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61096',
                name: 'The show is currently running.'
              }, {
                segment: '61097',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61098',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Unit',
            image_url: 'http://images.zap2it.com/images/tv-EP00753792/the-unit-2.jpg',
            options: [
              {
                segment: '61099',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61100',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61101',
                name: 'The show is currently running.'
              }, {
                segment: '61102',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61103',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'How I Met Your Mother',
            image_url: 'http://images.zap2it.com/images/tv-EP00753796/how-i-met-your-mother-1.jpg',
            options: [
              {
                segment: '61104',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61105',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61106',
                name: 'The show is currently running.'
              }, {
                segment: '61107',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61108',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'My Name Is Earl',
            image_url: 'http://images.zap2it.com/images/tv-EP00753860/my-name-is-earl-1.jpg',
            options: [
              {
                segment: '61109',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61110',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61111',
                name: 'The show is currently running.'
              }, {
                segment: '61112',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61113',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Bones',
            image_url: 'http://images.zap2it.com/images/tv-EP00754201/bones-1.jpg',
            options: [
              {
                segment: '61114',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61115',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61116',
                name: 'The show is currently running.'
              }, {
                segment: '61117',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61118',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Everybody Hates Chris',
            image_url: 'http://images.zap2it.com/images/tv-EP00754225/everybody-hates-chris-2.jpg',
            options: [
              {
                segment: '61119',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61120',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61121',
                name: 'The show is currently running.'
              }, {
                segment: '61122',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61123',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Supernatural',
            image_url: 'http://images.zap2it.com/images/tv-EP00754231/supernatural-2.jpg',
            options: [
              {
                segment: '61124',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61125',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61126',
                name: 'The show is currently running.'
              }, {
                segment: '61127',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61128',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The New Adventures of Old Christine',
            image_url: 'http://images.zap2it.com/images/tv-EP00763398/the-new-adventures-of-old-christine-7.jpg',
            options: [
              {
                segment: '61129',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61130',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61131',
                name: 'The show is currently running.'
              }, {
                segment: '61132',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61133',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Cash Cab',
            image_url: 'http://images.zap2it.com/images/tv-EP00767013/cash-cab-2.jpg',
            options: [
              {
                segment: '61134',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61135',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61136',
                name: 'The show is currently running.'
              }, {
                segment: '61137',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61138',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Cash in the Attic',
            image_url: 'http://images.zap2it.com/images/tv-EP00767118/cash-in-the-attic-1.jpg',
            options: [
              {
                segment: '61139',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61140',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61141',
                name: 'The show is currently running.'
              }, {
                segment: '61142',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61143',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Judge Alex',
            image_url: 'http://images.zap2it.com/images/tv-EP00767305/judge-alex-6.jpg',
            options: [
              {
                segment: '61144',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61145',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61146',
                name: 'The show is currently running.'
              }, {
                segment: '61147',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61148',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Zula Patrol',
            image_url: 'http://images.zap2it.com/images/tv-EP00768108/zula-patrol-6.jpg',
            options: [
              {
                segment: '61149',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61150',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61151',
                name: 'The show is currently running.'
              }, {
                segment: '61152',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61153',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Made in Hollywood',
            image_url: 'http://images.zap2it.com/images/tv-EP00770143/made-in-hollywood-7.jpg',
            options: [
              {
                segment: '61154',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61155',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61156',
                name: 'The show is currently running.'
              }, {
                segment: '61157',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61158',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'My First Place',
            image_url: 'http://images.zap2it.com/images/tv-EP00773953/my-first-place-4.jpg',
            options: [
              {
                segment: '61159',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61160',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61161',
                name: 'The show is currently running.'
              }, {
                segment: '61162',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61163',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Colbert Report',
            image_url: 'http://images.zap2it.com/images/tv-EP00774699/the-colbert-report-6.jpg',
            options: [
              {
                segment: '61164',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61165',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61166',
                name: 'The show is currently running.'
              }, {
                segment: '61167',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61168',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Seasoned Traveler',
            image_url: 'http://images.zap2it.com/images/tv-EP00775250/the-seasoned-traveler-4.jpg',
            options: [
              {
                segment: '61169',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61170',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61171',
                name: 'The show is currently running.'
              }, {
                segment: '61172',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61173',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Jane and the Dragon',
            image_url: 'http://images.zap2it.com/images/tv-EP00779972/jane-and-the-dragon-6.jpg',
            options: [
              {
                segment: '61174',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61175',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61176',
                name: 'The show is currently running.'
              }, {
                segment: '61177',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61178',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'FreeStyle',
            image_url: 'http://images.zap2it.com/images/tv-EP00782460/freestyle-1.jpg',
            options: [
              {
                segment: '61179',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61180',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61181',
                name: 'The show is currently running.'
              }, {
                segment: '61182',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61183',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'House Hunters International',
            image_url: 'http://images.zap2it.com/images/tv-EP00804863/house-hunters-international-12.jpg',
            options: [
              {
                segment: '61184',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61185',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61186',
                name: 'The show is currently running.'
              }, {
                segment: '61187',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61188',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Joyce Meyer: Enjoying Everyday Life',
            image_url: 'http://images.zap2it.com/images/tv-EP00809154/joyce-meyer-enjoying-everyday-life-2.jpg',
            options: [
              {
                segment: '61189',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61190',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61191',
                name: 'The show is currently running.'
              }, {
                segment: '61192',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61193',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Power Yoga: Mind and Body',
            image_url: 'http://images.zap2it.com/images/tv-EP00814133/power-yoga-mind-and-body-3.jpg',
            options: [
              {
                segment: '61194',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61195',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61196',
                name: 'The show is currently running.'
              }, {
                segment: '61197',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61198',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Real Housewives of Orange County',
            image_url: 'http://images.zap2it.com/images/tv-EP00815126/the-real-housewives-of-orange-county-4.jpg',
            options: [
              {
                segment: '61199',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61200',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61201',
                name: 'The show is currently running.'
              }, {
                segment: '61202',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61203',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Psych',
            image_url: 'http://images.zap2it.com/images/tv-EP00837834/psych-4.jpg',
            options: [
              {
                segment: '61204',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61205',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61206',
                name: 'The show is currently running.'
              }, {
                segment: '61207',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61208',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Throwdown With Bobby Flay',
            image_url: 'http://images.zap2it.com/images/tv-EP00841501/throwdown-with-bobby-flay-1.jpg',
            options: [
              {
                segment: '61209',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61210',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61211',
                name: 'The show is currently running.'
              }, {
                segment: '61212',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61213',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Outside the Lines First Report',
            image_url: 'http://images.zap2it.com/images/tv-EP00844383/outside-the-lines-first-report-9.jpg',
            options: [
              {
                segment: '61214',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61215',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61216',
                name: 'The show is currently running.'
              }, {
                segment: '61217',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61218',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Curious George',
            image_url: 'http://images.zap2it.com/images/tv-EP00846678/curious-george-2.jpg',
            options: [
              {
                segment: '61219',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61220',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61221',
                name: 'The show is currently running.'
              }, {
                segment: '61222',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61223',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Rachael Ray',
            image_url: 'http://images.zap2it.com/images/tv-EP00847333/rachael-ray-5.jpg',
            options: [
              {
                segment: '61224',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61225',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61226',
                name: 'The show is currently running.'
              }, {
                segment: '61227',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61228',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Ace of Cakes',
            image_url: 'http://images.zap2it.com/images/tv-EP00847517/ace-of-cakes-1.jpg',
            options: [
              {
                segment: '61229',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61230',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61231',
                name: 'The show is currently running.'
              }, {
                segment: '61232',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61233',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: '30 Rock',
            image_url: 'http://images.zap2it.com/images/tv-EP00848357/30-rock-7.jpg',
            options: [
              {
                segment: '61234',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61235',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61236',
                name: 'The show is currently running.'
              }, {
                segment: '61237',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61238',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Brothers & Sisters',
            image_url: 'http://images.zap2it.com/images/tv-EP00848709/brothers-and-sisters-1.jpg',
            options: [
              {
                segment: '61239',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61240',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61241',
                name: 'The show is currently running.'
              }, {
                segment: '61242',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61243',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Ugly Betty',
            image_url: 'http://images.zap2it.com/images/tv-EP00848723/ugly-betty-5.jpg',
            options: [
              {
                segment: '61244',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61245',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61246',
                name: 'The show is currently running.'
              }, {
                segment: '61247',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61248',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Property Virgins',
            image_url: 'http://images.zap2it.com/images/tv-EP00854514/property-virgins-2.jpg',
            options: [
              {
                segment: '61249',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61250',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61251',
                name: 'The show is currently running.'
              }, {
                segment: '61252',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61253',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Horseland',
            image_url: 'http://images.zap2it.com/images/tv-EP00854970/horseland-3.jpg',
            options: [
              {
                segment: '61254',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61255',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61256',
                name: 'The show is currently running.'
              }, {
                segment: '61257',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61258',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Comics Unleashed With Byron Allen',
            image_url: 'http://images.zap2it.com/images/tv-EP00855656/comics-unleashed-with-byron-allen-4.jpg',
            options: [
              {
                segment: '61259',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61260',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61261',
                name: 'The show is currently running.'
              }, {
                segment: '61262',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61263',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Hidden Potential',
            image_url: 'http://images.zap2it.com/images/tv-EP00860665/hidden-potential-3.jpg',
            options: [
              {
                segment: '61264',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61265',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61267',
                name: 'The show is currently running.'
              }, {
                segment: '61269',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61271',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Made in Hollywood: Teen Edition',
            image_url: 'http://images.zap2it.com/images/tv-EP00862275/made-in-hollywood-teen-edition-1.jpg',
            options: [
              {
                segment: '61273',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61275',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61278',
                name: 'The show is currently running.'
              }, {
                segment: '61280',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61282',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Rob & Big',
            image_url: 'http://images.zap2it.com/images/tv-EP00869741/rob-and-big-1.jpg',
            options: [
              {
                segment: '61284',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61286',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61288',
                name: 'The show is currently running.'
              }, {
                segment: '61290',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61292',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Challenge',
            image_url: 'http://images.zap2it.com/images/tv-EP00876404/challenge-2.jpg',
            options: [
              {
                segment: '61294',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61296',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61298',
                name: 'The show is currently running.'
              }, {
                segment: '61300',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61302',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'America This Morning',
            image_url: 'http://images.zap2it.com/images/tv-EP00877699/america-this-morning-3.jpg',
            options: [
              {
                segment: '61304',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61306',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61308',
                name: 'The show is currently running.'
              }, {
                segment: '61310',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61312',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Dinner: Impossible',
            image_url: 'http://images.zap2it.com/images/tv-EP00883566/dinner-impossible-2.jpg',
            options: [
              {
                segment: '61314',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61316',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61318',
                name: 'The show is currently running.'
              }, {
                segment: '61320',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61322',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Disaster DIY',
            image_url: 'http://images.zap2it.com/images/tv-EP00884080/disaster-diy-1.jpg',
            options: [
              {
                segment: '61324',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61326',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61328',
                name: 'The show is currently running.'
              }, {
                segment: '61330',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61332',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'NASCAR Countdown',
            image_url: 'http://images.zap2it.com/images/tv-EP00892082/nascar-countdown-2.jpg',
            options: [
              {
                segment: '61334',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61336',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61338',
                name: 'The show is currently running.'
              }, {
                segment: '61340',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61342',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Color Splash',
            image_url: 'http://images.zap2it.com/images/tv-EP00901593/color-splash-4.jpg',
            options: [
              {
                segment: '61344',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61346',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61348',
                name: 'The show is currently running.'
              }, {
                segment: '61350',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61352',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Spice Up My Kitchen',
            image_url: 'http://images.zap2it.com/images/tv-EP00916863/spice-up-my-kitchen-7.jpg',
            options: [
              {
                segment: '61354',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61356',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61358',
                name: 'The show is currently running.'
              }, {
                segment: '61360',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61362',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Flight of the Conchords',
            image_url: 'http://images.zap2it.com/images/tv-EP00923943/flight-of-the-conchords-4.jpg',
            options: [
              {
                segment: '61364',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61366',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61368',
                name: 'The show is currently running.'
              }, {
                segment: '61370',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61372',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Burn Notice',
            image_url: 'http://images.zap2it.com/images/tv-EP00924844/burn-notice-3.jpg',
            options: [
              {
                segment: '61374',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61376',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61378',
                name: 'The show is currently running.'
              }, {
                segment: '61380',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61381',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Private Practice',
            image_url: 'http://images.zap2it.com/images/tv-EP00930971/private-practice-1.jpg',
            options: [
              {
                segment: '61383',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61385',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61388',
                name: 'The show is currently running.'
              }, {
                segment: '61390',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61392',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Big Bang Theory',
            image_url: 'http://images.zap2it.com/images/tv-EP00931182/the-big-bang-theory-1.jpg',
            options: [
              {
                segment: '61394',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61396',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61398',
                name: 'The show is currently running.'
              }, {
                segment: '61400',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61402',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Color Correction',
            image_url: 'http://images.zap2it.com/images/tv-EP00934673/color-correction-5.jpg',
            options: [
              {
                segment: '61404',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61406',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61408',
                name: 'The show is currently running.'
              }, {
                segment: '61410',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61412',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Mad Men',
            image_url: 'http://images.zap2it.com/images/tv-EP00935777/mad-men-7.jpg',
            options: [
              {
                segment: '61413',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61416',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61418',
                name: 'The show is currently running.'
              }, {
                segment: '61419',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61422',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Californication',
            image_url: 'http://images.zap2it.com/images/tv-EP00942836/californication-4.jpg',
            options: [
              {
                segment: '61424',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61425',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61427',
                name: 'The show is currently running.'
              }, {
                segment: '61429',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61431',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'LA Ink',
            image_url: 'http://images.zap2it.com/images/tv-EP00944226/la-ink-1.jpg',
            options: [
              {
                segment: '61433',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61435',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61437',
                name: 'The show is currently running.'
              }, {
                segment: '61439',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61441',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Private Sessions',
            image_url: 'http://images.zap2it.com/images/tv-EP00945900/private-sessions-2.jpg',
            options: [
              {
                segment: '61443',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61445',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61447',
                name: 'The show is currently running.'
              }, {
                segment: '61449',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61451',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'WordWorld',
            image_url: 'http://images.zap2it.com/images/tv-EP00948818/wordworld-1.jpg',
            options: [
              {
                segment: '61453',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61455',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61457',
                name: 'The show is currently running.'
              }, {
                segment: '61459',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61461',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'WordGirl',
            image_url: 'http://images.zap2it.com/images/tv-EP00948842/wordgirl-1.jpg',
            options: [
              {
                segment: '61463',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61465',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61467',
                name: 'The show is currently running.'
              }, {
                segment: '61469',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61471',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Animal Exploration With Jarod Miller',
            image_url: 'http://images.zap2it.com/images/tv-EP00948852/animal-exploration-with-jarod-miller-1.jpg',
            options: [
              {
                segment: '61473',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61475',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61477',
                name: 'The show is currently running.'
              }, {
                segment: '61479',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61481',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Steve Wilkos Show',
            image_url: 'http://images.zap2it.com/images/tv-EP00951139/the-steve-wilkos-show-1.jpg',
            options: [
              {
                segment: '61483',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61485',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61486',
                name: 'The show is currently running.'
              }, {
                segment: '61487',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61488',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Better',
            image_url: 'http://images.zap2it.com/images/tv-EP00951636/better-3.jpg',
            options: [
              {
                segment: '61489',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61490',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61491',
                name: 'The show is currently running.'
              }, {
                segment: '61492',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61493',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Deserving Design',
            image_url: 'http://images.zap2it.com/images/tv-EP00952701/deserving-design-4.jpg',
            options: [
              {
                segment: '61494',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61495',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61496',
                name: 'The show is currently running.'
              }, {
                segment: '61497',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61498',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'TMZ',
            image_url: 'http://images.zap2it.com/images/tv-EP00952828/tmz-6.jpg',
            options: [
              {
                segment: '61499',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61500',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61501',
                name: 'The show is currently running.'
              }, {
                segment: '61502',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61503',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Heartland',
            image_url: 'http://images.zap2it.com/images/tv-EP00959462/heartland-2.jpg',
            options: [
              {
                segment: '61504',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61505',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61506',
                name: 'The show is currently running.'
              }, {
                segment: '61507',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61508',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Celebrity Apprentice',
            image_url: 'http://images.zap2it.com/images/tv-EP01008334/the-celebrity-apprentice-5.jpg',
            options: [
              {
                segment: '61509',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61510',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61511',
                name: 'The show is currently running.'
              }, {
                segment: '61512',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61513',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Whacked Out Videos',
            image_url: 'http://images.zap2it.com/images/tv-EP01011942/whacked-out-videos-5.jpg',
            options: [
              {
                segment: '61514',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61515',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61516',
                name: 'The show is currently running.'
              }, {
                segment: '61517',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61518',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Millionaire Matchmaker',
            image_url: 'http://images.zap2it.com/images/tv-EP01017571/the-millionaire-matchmaker-2.jpg',
            options: [
              {
                segment: '61519',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61520',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61521',
                name: 'The show is currently running.'
              }, {
                segment: '61522',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61523',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Down Home With the Neelys',
            image_url: 'http://images.zap2it.com/images/tv-EP01020363/down-home-with-the-neelys-3.jpg',
            options: [
              {
                segment: '61524',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61525',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61526',
                name: 'The show is currently running.'
              }, {
                segment: '61527',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61528',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Rescue Chef',
            image_url: 'http://images.zap2it.com/images/tv-EP01029629/rescue-chef-5.jpg',
            options: [
              {
                segment: '61529',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61530',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61531',
                name: 'The show is currently running.'
              }, {
                segment: '61532',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61533',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'In Plain Sight',
            image_url: 'http://images.zap2it.com/images/tv-EP01035785/in-plain-sight-7.jpg',
            options: [
              {
                segment: '61534',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61535',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61536',
                name: 'The show is currently running.'
              }, {
                segment: '61537',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61538',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Yard Crashers',
            image_url: 'http://images.zap2it.com/images/tv-EP01037152/yard-crashers-2.jpg',
            options: [
              {
                segment: '61539',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61540',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61541',
                name: 'The show is currently running.'
              }, {
                segment: '61542',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61543',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Cooking for Real',
            image_url: 'http://images.zap2it.com/images/tv-EP01037460/cooking-for-real-3.jpg',
            options: [
              {
                segment: '61544',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61545',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61546',
                name: 'The show is currently running.'
              }, {
                segment: '61547',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61548',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Secrets of a Restaurant Chef',
            image_url: 'http://images.zap2it.com/images/tv-EP01050719/secrets-of-a-restaurant-chef-1.jpg',
            options: [
              {
                segment: '61549',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61550',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61551',
                name: 'The show is currently running.'
              }, {
                segment: '61552',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61553',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Rate My Space',
            image_url: 'http://images.zap2it.com/images/tv-EP01050724/rate-my-space-2.jpg',
            options: [
              {
                segment: '61554',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61555',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61556',
                name: 'The show is currently running.'
              }, {
                segment: '61557',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61558',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Goode Family',
            image_url: 'http://images.zap2it.com/images/tv-EP01058285/the-goode-family-6.jpg',
            options: [
              {
                segment: '61559',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61560',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61561',
                name: 'The show is currently running.'
              }, {
                segment: '61562',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61563',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: '90210',
            image_url: 'http://images.zap2it.com/images/tv-EP01058729/90210-7.jpg',
            options: [
              {
                segment: '61564',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61565',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61566',
                name: 'The show is currently running.'
              }, {
                segment: '61567',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61568',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Cleveland Show',
            image_url: 'http://images.zap2it.com/images/tv-EP01059110/the-cleveland-show-2.jpg',
            options: [
              {
                segment: '61569',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61570',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61571',
                name: 'The show is currently running.'
              }, {
                segment: '61572',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61573',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Wendy Williams Show',
            image_url: 'http://images.zap2it.com/images/tv-EP01061654/the-wendy-williams-show-6.jpg',
            options: [
              {
                segment: '61574',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61575',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61576',
                name: 'The show is currently running.'
              }, {
                segment: '61577',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61578',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Martha Speaks',
            image_url: 'http://images.zap2it.com/images/tv-EP01072773/martha-speaks-3.jpg',
            options: [
              {
                segment: '61579',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61580',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61581',
                name: 'The show is currently running.'
              }, {
                segment: '61582',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61583',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Sid the Science Kid',
            image_url: 'http://images.zap2it.com/images/tv-EP01072778/sid-the-science-kid-1.jpg',
            options: [
              {
                segment: '61584',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61585',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61586',
                name: 'The show is currently running.'
              }, {
                segment: '61587',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61588',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Doctors',
            image_url: 'http://images.zap2it.com/images/tv-EP01074571/the-doctors-1.jpg',
            options: [
              {
                segment: '61589',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61590',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61591',
                name: 'The show is currently running.'
              }, {
                segment: '61592',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61593',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Income Property',
            image_url: 'http://images.zap2it.com/images/tv-EP01076427/income-property-2.jpg',
            options: [
              {
                segment: '61594',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61595',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61596',
                name: 'The show is currently running.'
              }, {
                segment: '61597',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61598',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Love It or List It',
            image_url: 'http://images.zap2it.com/images/tv-EP01078339/love-it-or-list-it-2.jpg',
            options: [
              {
                segment: '61599',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61600',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61601',
                name: 'The show is currently running.'
              }, {
                segment: '61602',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61603',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Real Housewives of Atlanta',
            image_url: 'http://images.zap2it.com/images/tv-EP01083032/the-real-housewives-of-atlanta-5.jpg',
            options: [
              {
                segment: '61604',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61605',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61606',
                name: 'The show is currently running.'
              }, {
                segment: '61607',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61608',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Castle',
            image_url: 'http://images.zap2it.com/images/tv-EP01085588/castle-9.jpg',
            options: [
              {
                segment: '61609',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61610',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61611',
                name: 'The show is currently running.'
              }, {
                segment: '61612',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61613',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Giada at Home',
            image_url: 'http://images.zap2it.com/images/tv-EP01086460/giada-at-home-2.jpg',
            options: [
              {
                segment: '61614',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61615',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61616',
                name: 'The show is currently running.'
              }, {
                segment: '61617',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61618',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Leverage',
            image_url: 'http://images.zap2it.com/images/tv-EP01087016/leverage-4.jpg',
            options: [
              {
                segment: '61619',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61620',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61621',
                name: 'The show is currently running.'
              }, {
                segment: '61622',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61623',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Dear Genevieve',
            image_url: 'http://images.zap2it.com/images/tv-EP01107322/dear-genevieve-8.jpg',
            options: [
              {
                segment: '61624',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61625',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61626',
                name: 'The show is currently running.'
              }, {
                segment: '61627',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61628',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'For Rent',
            image_url: 'http://images.zap2it.com/images/tv-EP01111330/for-rent-4.jpg',
            options: [
              {
                segment: '61629',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61630',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61631',
                name: 'The show is currently running.'
              }, {
                segment: '61632',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61633',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Chopped',
            image_url: 'http://images.zap2it.com/images/tv-EP01111785/chopped-5.jpg',
            options: [
              {
                segment: '61634',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61635',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61636',
                name: 'The show is currently running.'
              }, {
                segment: '61637',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61638',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Eastbound & Down',
            image_url: 'http://images.zap2it.com/images/tv-EP01118413/eastbound-and-down-8.jpg',
            options: [
              {
                segment: '61639',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61640',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61641',
                name: 'The show is currently running.'
              }, {
                segment: '61642',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61643',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Best Thing I Ever Ate',
            image_url: 'http://images.zap2it.com/images/tv-EP01125503/the-best-thing-i-ever-ate-3.jpg',
            options: [
              {
                segment: '61644',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61645',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61646',
                name: 'The show is currently running.'
              }, {
                segment: '61647',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61648',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Southland',
            image_url: 'http://images.zap2it.com/images/tv-EP01126288/southland-5.jpg',
            options: [
              {
                segment: '61649',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61650',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61651',
                name: 'The show is currently running.'
              }, {
                segment: '61652',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61653',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Late Night With Jimmy Fallon',
            image_url: 'http://images.zap2it.com/images/tv-EP01126304/late-night-with-jimmy-fallon-6.jpg',
            options: [
              {
                segment: '61654',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61655',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61656',
                name: 'The show is currently running.'
              }, {
                segment: '61657',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61658',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Kitchen Impossible',
            image_url: 'http://images.zap2it.com/images/tv-EP01130705/kitchen-impossible-4.jpg',
            options: [
              {
                segment: '61659',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61660',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61661',
                name: 'The show is currently running.'
              }, {
                segment: '61662',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61663',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Bang for Your Buck',
            image_url: 'http://images.zap2it.com/images/tv-EP01131026/bang-for-your-buck-6.jpg',
            options: [
              {
                segment: '61664',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61665',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61666',
                name: 'The show is currently running.'
              }, {
                segment: '61667',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61668',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Closet Cases',
            image_url: 'http://images.zap2it.com/images/tv-EP01138080/closet-cases-6.jpg',
            options: [
              {
                segment: '61669',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61670',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61671',
                name: 'The show is currently running.'
              }, {
                segment: '61672',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61673',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Community',
            image_url: 'http://images.zap2it.com/images/tv-EP01154162/community-5.jpg',
            options: [
              {
                segment: '61674',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61675',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61676',
                name: 'The show is currently running.'
              }, {
                segment: '61677',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61678',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Real Estate Intervention',
            image_url: 'http://images.zap2it.com/images/tv-EP01155760/real-estate-intervention-6.jpg',
            options: [
              {
                segment: '61679',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61680',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61681',
                name: 'The show is currently running.'
              }, {
                segment: '61682',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61683',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: '16 and Pregnant',
            image_url: 'http://images.zap2it.com/images/tv-EP01157246/16-and-pregnant-3.jpg',
            options: [
              {
                segment: '61684',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61685',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61686',
                name: 'The show is currently running.'
              }, {
                segment: '61687',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61688',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Cougar Town',
            image_url: 'http://images.zap2it.com/images/tv-EP01158082/cougar-town-2.jpg',
            options: [
              {
                segment: '61689',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61690',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61691',
                name: 'The show is currently running.'
              }, {
                segment: '61692',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61693',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Middle',
            image_url: 'http://images.zap2it.com/images/tv-EP01158119/the-middle-1.jpg',
            options: [
              {
                segment: '61694',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61695',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61696',
                name: 'The show is currently running.'
              }, {
                segment: '61697',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61698',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Modern Family',
            image_url: 'http://images.zap2it.com/images/tv-EP01158124/modern-family-1.jpg',
            options: [
              {
                segment: '61699',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61700',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61701',
                name: 'The show is currently running.'
              }, {
                segment: '61702',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61703',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Shark Tank',
            image_url: 'http://images.zap2it.com/images/tv-EP01158129/shark-tank-11.jpg',
            options: [
              {
                segment: '61704',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61705',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61706',
                name: 'The show is currently running.'
              }, {
                segment: '61707',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61708',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'NCIS: Los Angeles',
            image_url: 'http://images.zap2it.com/images/tv-EP01158361/ncis-los-angeles-7.jpg',
            options: [
              {
                segment: '61709',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61710',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61711',
                name: 'The show is currently running.'
              }, {
                segment: '61712',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61713',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Good Wife',
            image_url: 'http://images.zap2it.com/images/tv-EP01158384/the-good-wife-8.jpg',
            options: [
              {
                segment: '61714',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61715',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61716',
                name: 'The show is currently running.'
              }, {
                segment: '61717',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61718',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Vampire Diaries',
            image_url: 'http://images.zap2it.com/images/tv-EP01158752/the-vampire-diaries-6.jpg',
            options: [
              {
                segment: '61719',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61720',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61721',
                name: 'The show is currently running.'
              }, {
                segment: '61722',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61723',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'House Crashers',
            image_url: 'http://images.zap2it.com/images/tv-EP01168181/house-crashers-1.jpg',
            options: [
              {
                segment: '61724',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61725',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61726',
                name: 'The show is currently running.'
              }, {
                segment: '61727',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61728',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Dinosaur Train',
            image_url: 'http://images.zap2it.com/images/tv-EP01170249/dinosaur-train-3.jpg',
            options: [
              {
                segment: '61729',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61730',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61731',
                name: 'The show is currently running.'
              }, {
                segment: '61732',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61733',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Holmes Inspection',
            image_url: 'http://images.zap2it.com/images/tv-EP01171695/holmes-inspection-3.jpg',
            options: [
              {
                segment: '61734',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61735',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61736',
                name: 'The show is currently running.'
              }, {
                segment: '61737',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61738',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Pranked',
            image_url: 'http://images.zap2it.com/images/tv-EP01174373/pranked-7.jpg',
            options: [
              {
                segment: '61739',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61740',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61741',
                name: 'The show is currently running.'
              }, {
                segment: '61742',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61743',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Pearlie',
            image_url: 'http://images.zap2it.com/images/tv-EP01183572/pearlie-7.jpg',
            options: [
              {
                segment: '61744',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61745',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61746',
                name: 'The show is currently running.'
              }, {
                segment: '61747',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61748',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Stargate Universe',
            image_url: 'http://images.zap2it.com/images/tv-EP01183982/stargate-universe-5.jpg',
            options: [
              {
                segment: '61749',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61750',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61751',
                name: 'The show is currently running.'
              }, {
                segment: '61752',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61753',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Disaster Date',
            image_url: 'http://images.zap2it.com/images/tv-EP01186248/disaster-date-2.jpg',
            options: [
              {
                segment: '61754',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61755',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61756',
                name: 'The show is currently running.'
              }, {
                segment: '61757',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61758',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'PBS NewsHour',
            image_url: 'http://images.zap2it.com/images/tv-EP01196307/pbs-newshour-4.jpg',
            options: [
              {
                segment: '61759',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61760',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61761',
                name: 'The show is currently running.'
              }, {
                segment: '61762',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61763',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Antonio Treatment',
            image_url: 'http://images.zap2it.com/images/tv-EP01207060/antonio-treatment-4.jpg',
            options: [
              {
                segment: '61764',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61765',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61766',
                name: 'The show is currently running.'
              }, {
                segment: '61767',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61768',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Jersey Shore',
            image_url: 'http://images.zap2it.com/images/tv-EP01207999/jersey-shore-7.jpg',
            options: [
              {
                segment: '61769',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61770',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61771',
                name: 'The show is currently running.'
              }, {
                segment: '61772',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61773',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Curb Appeal: The Block',
            image_url: 'http://images.zap2it.com/images/tv-EP01208055/curb-appeal-the-block-9.jpg',
            options: [
              {
                segment: '61774',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61775',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61776',
                name: 'The show is currently running.'
              }, {
                segment: '61777',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61778',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Outdoor Room With Jamie Durie',
            image_url: 'http://images.zap2it.com/images/tv-EP01208086/the-outdoor-room-with-jamie-durie-2.jpg',
            options: [
              {
                segment: '61779',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61780',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61781',
                name: 'The show is currently running.'
              }, {
                segment: '61782',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61783',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Splurge and Save',
            image_url: 'http://images.zap2it.com/images/tv-EP01209856/splurge-and-save-6.jpg',
            options: [
              {
                segment: '61784',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61785',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61786',
                name: 'The show is currently running.'
              }, {
                segment: '61787',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61788',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'ABC World News With Diane Sawyer',
            image_url: 'http://images.zap2it.com/images/tv-EP01210972/abc-world-news-with-diane-sawyer-2.jpg',
            options: [
              {
                segment: '61789',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61790',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61791',
                name: 'The show is currently running.'
              }, {
                segment: '61792',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61793',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Mexican Made Easy',
            image_url: 'http://images.zap2it.com/images/tv-EP01214888/mexican-made-easy-7.jpg',
            options: [
              {
                segment: '61794',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61795',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61796',
                name: 'The show is currently running.'
              }, {
                segment: '61797',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61798',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Worst Cooks in America',
            image_url: 'http://images.zap2it.com/images/tv-EP01215042/worst-cooks-in-america-7.jpg',
            options: [
              {
                segment: '61799',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61800',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61801',
                name: 'The show is currently running.'
              }, {
                segment: '61802',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61803',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Archer',
            image_url: 'http://images.zap2it.com/images/tv-EP01216702/archer-11.jpg',
            options: [
              {
                segment: '61804',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61805',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61806',
                name: 'The show is currently running.'
              }, {
                segment: '61807',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61808',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Cupcake Wars',
            image_url: 'http://images.zap2it.com/images/tv-EP01217400/cupcake-wars-9.jpg',
            options: [
              {
                segment: '61809',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61810',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61811',
                name: 'The show is currently running.'
              }, {
                segment: '61812',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61813',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Private Chefs of Beverly Hills',
            image_url: 'http://images.zap2it.com/images/tv-EP01217403/private-chefs-of-beverly-hills-6.jpg',
            options: [
              {
                segment: '61814',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61815',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61816',
                name: 'The show is currently running.'
              }, {
                segment: '61817',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61818',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Bath Crashers',
            image_url: 'http://images.zap2it.com/images/tv-EP01228001/bath-crashers-6.jpg',
            options: [
              {
                segment: '61819',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61820',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61821',
                name: 'The show is currently running.'
              }, {
                segment: '61822',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61823',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Destination Design',
            image_url: 'http://images.zap2it.com/images/tv-EP01230394/destination-design-1.jpg',
            options: [
              {
                segment: '61824',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61825',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61826',
                name: 'The show is currently running.'
              }, {
                segment: '61827',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61828',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Selling New York',
            image_url: 'http://images.zap2it.com/images/tv-EP01231570/selling-new-york-3.jpg',
            options: [
              {
                segment: '61829',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61830',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61831',
                name: 'The show is currently running.'
              }, {
                segment: '61832',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61833',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'My First Sale',
            image_url: 'http://images.zap2it.com/images/tv-EP01233785/my-first-sale-4.jpg',
            options: [
              {
                segment: '61834',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61835',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61836',
                name: 'The show is currently running.'
              }, {
                segment: '61837',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61838',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Ugly Americans',
            image_url: 'http://images.zap2it.com/images/tv-EP01234067/ugly-americans-6.jpg',
            options: [
              {
                segment: '61839',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61840',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61841',
                name: 'The show is currently running.'
              }, {
                segment: '61842',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61843',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Justified',
            image_url: 'http://images.zap2it.com/images/tv-EP01236296/justified-7.jpg',
            options: [
              {
                segment: '61844',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61845',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61846',
                name: 'The show is currently running.'
              }, {
                segment: '61847',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61848',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Need to Know',
            image_url: 'http://images.zap2it.com/images/tv-EP01240339/need-to-know-2.jpg',
            options: [
              {
                segment: '61849',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61850',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61851',
                name: 'The show is currently running.'
              }, {
                segment: '61852',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61853',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: '10 on Top',
            image_url: 'http://images.zap2it.com/images/tv-EP01246385/10-on-top-5.jpg',
            options: [
              {
                segment: '61854',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61855',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61856',
                name: 'The show is currently running.'
              }, {
                segment: '61857',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61858',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'When I Was 17',
            image_url: 'http://images.zap2it.com/images/tv-EP01246386/when-i-was-17-1.jpg',
            options: [
              {
                segment: '61859',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61860',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61861',
                name: 'The show is currently running.'
              }, {
                segment: '61862',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61863',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Dual Survival',
            image_url: 'http://images.zap2it.com/images/tv-EP01253182/dual-survival-6.jpg',
            options: [
              {
                segment: '61864',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61865',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61866',
                name: 'The show is currently running.'
              }, {
                segment: '61867',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61868',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Dragon Ball Z Kai',
            image_url: 'http://images.zap2it.com/images/tv-EP01264737/dragon-ball-z-kai-3.jpg',
            options: [
              {
                segment: '61869',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61870',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61871',
                name: 'The show is currently running.'
              }, {
                segment: '61872',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61873',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Louie',
            image_url: 'http://images.zap2it.com/images/tv-EP01266243/louie-5.jpg',
            options: [
              {
                segment: '61874',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61875',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61876',
                name: 'The show is currently running.'
              }, {
                segment: '61877',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61878',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Raising Hope',
            image_url: 'http://images.zap2it.com/images/tv-EP01279218/raising-hope-4.jpg',
            options: [
              {
                segment: '61879',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61880',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61881',
                name: 'The show is currently running.'
              }, {
                segment: '61882',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61883',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Rizzoli & Isles',
            image_url: 'http://images.zap2it.com/images/tv-EP01279465/rizzoli-and-isles-7.jpg',
            options: [
              {
                segment: '61884',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61885',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61886',
                name: 'The show is currently running.'
              }, {
                segment: '61887',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61888',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Body of Proof',
            image_url: 'http://images.zap2it.com/images/tv-EP01279541/body-of-proof-2.jpg',
            options: [
              {
                segment: '61889',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61890',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61891',
                name: 'The show is currently running.'
              }, {
                segment: '61892',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61893',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Happy Endings',
            image_url: 'http://images.zap2it.com/images/tv-EP01279666/happy-endings-2.jpg',
            options: [
              {
                segment: '61894',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61895',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61896',
                name: 'The show is currently running.'
              }, {
                segment: '61897',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61898',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Food Feuds',
            image_url: 'http://images.zap2it.com/images/tv-EP01279906/food-feuds-2.jpg',
            options: [
              {
                segment: '61899',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61900',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61901',
                name: 'The show is currently running.'
              }, {
                segment: '61902',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61903',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Mike & Molly',
            image_url: 'http://images.zap2it.com/images/tv-EP01280040/mike-and-molly-1.jpg',
            options: [
              {
                segment: '61904',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61905',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61906',
                name: 'The show is currently running.'
              }, {
                segment: '61907',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61908',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Hawaii Five-0',
            image_url: 'http://images.zap2it.com/images/tv-EP01280063/hawaii-five-0-3.jpg',
            options: [
              {
                segment: '61909',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61910',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61911',
                name: 'The show is currently running.'
              }, {
                segment: '61912',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61913',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Nikita',
            image_url: 'http://images.zap2it.com/images/tv-EP01280597/nikita-6.jpg',
            options: [
              {
                segment: '61914',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61915',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61916',
                name: 'The show is currently running.'
              }, {
                segment: '61917',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61918',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Professional Grade',
            image_url: 'http://images.zap2it.com/images/tv-EP01282574/professional-grade-6.jpg',
            options: [
              {
                segment: '61919',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61920',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61921',
                name: 'The show is currently running.'
              }, {
                segment: '61922',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61923',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Talk',
            image_url: 'http://images.zap2it.com/images/tv-EP01307855/the-talk-9.jpg',
            options: [
              {
                segment: '61924',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61925',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61926',
                name: 'The show is currently running.'
              }, {
                segment: '61927',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61928',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Access Hollywood Live',
            image_url: 'http://images.zap2it.com/images/tv-EP01309967/access-hollywood-live-1.jpg',
            options: [
              {
                segment: '61929',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61930',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61931',
                name: 'The show is currently running.'
              }, {
                segment: '61932',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61933',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Nate Berkus Show',
            image_url: 'http://images.zap2it.com/images/tv-EP01310039/the-nate-berkus-show-3.jpg',
            options: [
              {
                segment: '61934',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61935',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61936',
                name: 'The show is currently running.'
              }, {
                segment: '61937',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61938',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Walking Dead',
            image_url: 'http://images.zap2it.com/images/tv-EP01324002/the-walking-dead-6.jpg',
            options: [
              {
                segment: '61939',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61940',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61941',
                name: 'The show is currently running.'
              }, {
                segment: '61942',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61943',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Auction Kings',
            image_url: 'http://images.zap2it.com/images/tv-EP01324374/auction-kings-1.jpg',
            options: [
              {
                segment: '61944',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61945',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61946',
                name: 'The show is currently running.'
              }, {
                segment: '61947',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61948',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Outrageous Food',
            image_url: 'http://images.zap2it.com/images/tv-EP01325097/outrageous-food-2.jpg',
            options: [
              {
                segment: '61949',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61950',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61951',
                name: 'The show is currently running.'
              }, {
                segment: '61952',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61953',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Family Feud',
            image_url: 'http://images.zap2it.com/images/tv-EP01332055/family-feud-6.jpg',
            options: [
              {
                segment: '61954',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61955',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61956',
                name: 'The show is currently running.'
              }, {
                segment: '61957',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61958',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Conan',
            image_url: 'http://images.zap2it.com/images/tv-EP01332392/conan-7.jpg',
            options: [
              {
                segment: '61959',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61960',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61961',
                name: 'The show is currently running.'
              }, {
                segment: '61962',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61963',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Wild Kratts',
            image_url: 'http://images.zap2it.com/images/tv-EP01345188/wild-kratts-1.jpg',
            options: [
              {
                segment: '61964',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61965',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61966',
                name: 'The show is currently running.'
              }, {
                segment: '61967',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61968',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Shameless',
            image_url: 'http://images.zap2it.com/images/tv-EP01347868/shameless-3.jpg',
            options: [
              {
                segment: '61969',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61970',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61971',
                name: 'The show is currently running.'
              }, {
                segment: '61972',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61973',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Fairly Legal',
            image_url: 'http://images.zap2it.com/images/tv-EP01354806/fairly-legal-10.jpg',
            options: [
              {
                segment: '61974',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61975',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61976',
                name: 'The show is currently running.'
              }, {
                segment: '61977',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61978',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Cash & Cari',
            image_url: 'http://images.zap2it.com/images/tv-EP01355845/cash-and-cari-6.jpg',
            options: [
              {
                segment: '61979',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61980',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61981',
                name: 'The show is currently running.'
              }, {
                segment: '61982',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61983',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Property Brothers',
            image_url: 'http://images.zap2it.com/images/tv-EP01360054/property-brothers-6.jpg',
            options: [
              {
                segment: '61984',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61985',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61986',
                name: 'The show is currently running.'
              }, {
                segment: '61987',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61988',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Hungry Girl',
            image_url: 'http://images.zap2it.com/images/tv-EP01360656/hungry-girl-7.jpg',
            options: [
              {
                segment: '61989',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61990',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61991',
                name: 'The show is currently running.'
              }, {
                segment: '61992',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61993',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Sons of Guns',
            image_url: 'http://images.zap2it.com/images/tv-EP01361285/sons-of-guns-1.jpg',
            options: [
              {
                segment: '61994',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61995',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61996',
                name: 'The show is currently running.'
              }, {
                segment: '61997',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61998',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Voice',
            image_url: 'http://images.zap2it.com/images/tv-EP01365756/the-voice-7.jpg',
            options: [
              {
                segment: '61999',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62000',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62001',
                name: 'The show is currently running.'
              }, {
                segment: '62002',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62003',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Secrets From a Stylist',
            image_url: 'http://images.zap2it.com/images/tv-EP01374010/secrets-from-a-stylist-3.jpg',
            options: [
              {
                segment: '62004',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62005',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62006',
                name: 'The show is currently running.'
              }, {
                segment: '62007',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62008',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Bethenny Ever After',
            image_url: 'http://images.zap2it.com/images/tv-EP01376255/bethenny-ever-after-1.jpg',
            options: [
              {
                segment: '62009',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62010',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62011',
                name: 'The show is currently running.'
              }, {
                segment: '62012',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62013',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Ice Brigade',
            image_url: 'http://images.zap2it.com/images/tv-EP01382057/ice-brigade-2.jpg',
            options: [
              {
                segment: '62014',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62015',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62016',
                name: 'The show is currently running.'
              }, {
                segment: '62017',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62018',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Homewreckers',
            image_url: 'http://images.zap2it.com/images/tv-EP01383452/homewreckers-8.jpg',
            options: [
              {
                segment: '62019',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62020',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62021',
                name: 'The show is currently running.'
              }, {
                segment: '62022',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62023',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'FBI: Criminal Pursuit',
            image_url: 'http://images.zap2it.com/images/tv-EP01383634/fbi-criminal-pursuit-2.jpg',
            options: [
              {
                segment: '62024',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62025',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62026',
                name: 'The show is currently running.'
              }, {
                segment: '62027',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62028',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'ABC World News With David Muir',
            image_url: 'http://images.zap2it.com/images/tv-EP01387208/abc-world-news-with-david-muir-3.jpg',
            options: [
              {
                segment: '62029',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62030',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62031',
                name: 'The show is currently running.'
              }, {
                segment: '62032',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62033',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Game of Thrones',
            image_url: 'http://images.zap2it.com/images/tv-EP01389809/game-of-thrones-6.jpg',
            options: [
              {
                segment: '62034',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62035',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62036',
                name: 'The show is currently running.'
              }, {
                segment: '62037',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62038',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Breaking In',
            image_url: 'http://images.zap2it.com/images/tv-EP01392206/breaking-in-6.jpg',
            options: [
              {
                segment: '62039',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62040',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62041',
                name: 'The show is currently running.'
              }, {
                segment: '62042',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62043',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Vine Talk',
            image_url: 'http://images.zap2it.com/images/tv-EP01393953/vine-talk-4.jpg',
            options: [
              {
                segment: '62044',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62045',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62046',
                name: 'The show is currently running.'
              }, {
                segment: '62047',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62048',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Killing',
            image_url: 'http://images.zap2it.com/images/tv-EP01394263/the-killing-5.jpg',
            options: [
              {
                segment: '62049',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62050',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62051',
                name: 'The show is currently running.'
              }, {
                segment: '62052',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62053',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Ridiculousness',
            image_url: 'http://images.zap2it.com/images/tv-EP01400066/ridiculousness-1.jpg',
            options: [
              {
                segment: '62054',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62055',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62056',
                name: 'The show is currently running.'
              }, {
                segment: '62057',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62058',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Falling Skies',
            image_url: 'http://images.zap2it.com/images/tv-EP01400193/falling-skies-6.jpg',
            options: [
              {
                segment: '62059',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62060',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62061',
                name: 'The show is currently running.'
              }, {
                segment: '62062',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62063',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Fashion Star',
            image_url: 'http://images.zap2it.com/images/tv-EP01403526/fashion-star-6.jpg',
            options: [
              {
                segment: '62064',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62065',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62066',
                name: 'The show is currently running.'
              }, {
                segment: '62067',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62068',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Room Crashers',
            image_url: 'http://images.zap2it.com/images/tv-EP01407270/room-crashers-2.jpg',
            options: [
              {
                segment: '62069',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62070',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62071',
                name: 'The show is currently running.'
              }, {
                segment: '62072',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62073',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The High Low Project',
            image_url: 'http://images.zap2it.com/images/tv-EP01407625/the-high-low-project-4.jpg',
            options: [
              {
                segment: '62074',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62075',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62076',
                name: 'The show is currently running.'
              }, {
                segment: '62077',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62078',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Selling LA',
            image_url: 'http://images.zap2it.com/images/tv-EP01407628/selling-la-1.jpg',
            options: [
              {
                segment: '62079',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62080',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62081',
                name: 'The show is currently running.'
              }, {
                segment: '62082',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62083',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Suits',
            image_url: 'http://images.zap2it.com/images/tv-EP01407658/suits-3.jpg',
            options: [
              {
                segment: '62084',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62085',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62086',
                name: 'The show is currently running.'
              }, {
                segment: '62087',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62088',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Home by Novogratz',
            image_url: 'http://images.zap2it.com/images/tv-EP01409272/home-by-novogratz-4.jpg',
            options: [
              {
                segment: '62089',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62090',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62091',
                name: 'The show is currently running.'
              }, {
                segment: '62092',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62093',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Revolution',
            image_url: 'http://images.zap2it.com/images/tv-EP01409286/the-revolution-6.jpg',
            options: [
              {
                segment: '62094',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62095',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62096',
                name: 'The show is currently running.'
              }, {
                segment: '62097',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62098',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Chew',
            image_url: 'http://images.zap2it.com/images/tv-EP01409290/the-chew-3.jpg',
            options: [
              {
                segment: '62099',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62100',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62101',
                name: 'The show is currently running.'
              }, {
                segment: '62102',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62103',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Big Rich Texas',
            image_url: 'http://images.zap2it.com/images/tv-EP01409295/big-rich-texas-3.jpg',
            options: [
              {
                segment: '62104',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62105',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62106',
                name: 'The show is currently running.'
              }, {
                segment: '62107',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62108',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Crave',
            image_url: 'http://images.zap2it.com/images/tv-EP01411423/crave-3.jpg',
            options: [
              {
                segment: '62109',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62110',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62111',
                name: 'The show is currently running.'
              }, {
                segment: '62112',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62113',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'CBS Evening News With Scott Pelley',
            image_url: 'http://images.zap2it.com/images/tv-EP01414532/cbs-evening-news-with-scott-pelley-2.jpg',
            options: [
              {
                segment: '62114',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62115',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62116',
                name: 'The show is currently running.'
              }, {
                segment: '62117',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62118',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Smash',
            image_url: 'http://images.zap2it.com/images/tv-EP01418959/smash-3.jpg',
            options: [
              {
                segment: '62119',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62120',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62121',
                name: 'The show is currently running.'
              }, {
                segment: '62122',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62123',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Grimm',
            image_url: 'http://images.zap2it.com/images/tv-EP01418971/grimm-2.jpg',
            options: [
              {
                segment: '62124',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62125',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62126',
                name: 'The show is currently running.'
              }, {
                segment: '62127',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62128',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Awake',
            image_url: 'http://images.zap2it.com/images/tv-EP01419003/awake-3.jpg',
            options: [
              {
                segment: '62129',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62130',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62131',
                name: 'The show is currently running.'
              }, {
                segment: '62132',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62133',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Whitney',
            image_url: 'http://images.zap2it.com/images/tv-EP01419048/whitney-3.jpg',
            options: [
              {
                segment: '62134',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62135',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62136',
                name: 'The show is currently running.'
              }, {
                segment: '62137',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62138',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Up All Night',
            image_url: 'http://images.zap2it.com/images/tv-EP01419057/up-all-night-6.jpg',
            options: [
              {
                segment: '62139',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62140',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62141',
                name: 'The show is currently running.'
              }, {
                segment: '62142',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62143',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Bent',
            image_url: 'http://images.zap2it.com/images/tv-EP01419133/bent-2.jpg',
            options: [
              {
                segment: '62144',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62145',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62146',
                name: 'The show is currently running.'
              }, {
                segment: '62147',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62148',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'I Hate My Teenage Daughter',
            image_url: 'http://images.zap2it.com/images/tv-EP01419188/i-hate-my-teenage-daughter-3.jpg',
            options: [
              {
                segment: '62149',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62150',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62151',
                name: 'The show is currently running.'
              }, {
                segment: '62152',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62153',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'New Girl',
            image_url: 'http://images.zap2it.com/images/tv-EP01419203/new-girl-6.jpg',
            options: [
              {
                segment: '62154',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62155',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62156',
                name: 'The show is currently running.'
              }, {
                segment: '62157',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62158',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Alcatraz',
            image_url: 'http://images.zap2it.com/images/tv-EP01419230/alcatraz-6.jpg',
            options: [
              {
                segment: '62159',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62160',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62161',
                name: 'The show is currently running.'
              }, {
                segment: '62162',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62163',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Touch',
            image_url: 'http://images.zap2it.com/images/tv-EP01419237/touch-3.jpg',
            options: [
              {
                segment: '62164',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62165',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62166',
                name: 'The show is currently running.'
              }, {
                segment: '62167',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62168',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'GCB',
            image_url: 'http://images.zap2it.com/images/tv-EP01419419/gcb-5.jpg',
            options: [
              {
                segment: '62169',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62170',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62171',
                name: 'The show is currently running.'
              }, {
                segment: '62172',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62173',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Missing',
            image_url: 'http://images.zap2it.com/images/tv-EP01419442/missing-8.jpg',
            options: [
              {
                segment: '62174',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62175',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62176',
                name: 'The show is currently running.'
              }, {
                segment: '62177',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62178',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Once Upon a Time',
            image_url: 'http://images.zap2it.com/images/tv-EP01419478/once-upon-a-time-3.jpg',
            options: [
              {
                segment: '62179',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62180',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62181',
                name: 'The show is currently running.'
              }, {
                segment: '62182',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62183',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The River',
            image_url: 'http://images.zap2it.com/images/tv-EP01419530/the-river-1.jpg',
            options: [
              {
                segment: '62184',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62185',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62186',
                name: 'The show is currently running.'
              }, {
                segment: '62187',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62188',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Last Man Standing',
            image_url: 'http://images.zap2it.com/images/tv-EP01419581/last-man-standing-1.jpg',
            options: [
              {
                segment: '62189',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62190',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62191',
                name: 'The show is currently running.'
              }, {
                segment: '62192',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62193',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Suburgatory',
            image_url: 'http://images.zap2it.com/images/tv-EP01419601/suburgatory-3.jpg',
            options: [
              {
                segment: '62194',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62195',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62196',
                name: 'The show is currently running.'
              }, {
                segment: '62197',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62198',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Unforgettable',
            image_url: 'http://images.zap2it.com/images/tv-EP01419807/unforgettable-6.jpg',
            options: [
              {
                segment: '62199',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62200',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62201',
                name: 'The show is currently running.'
              }, {
                segment: '62202',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62203',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: '2 Broke Girls',
            image_url: 'http://images.zap2it.com/images/tv-EP01419872/2-broke-girls-6.jpg',
            options: [
              {
                segment: '62204',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62205',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62206',
                name: 'The show is currently running.'
              }, {
                segment: '62207',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62208',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Hart of Dixie',
            image_url: 'http://images.zap2it.com/images/tv-EP01420283/hart-of-dixie-6.jpg',
            options: [
              {
                segment: '62209',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62210',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62211',
                name: 'The show is currently running.'
              }, {
                segment: '62212',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62213',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Secret Circle',
            image_url: 'http://images.zap2it.com/images/tv-EP01420363/the-secret-circle-2.jpg',
            options: [
              {
                segment: '62214',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62215',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62216',
                name: 'The show is currently running.'
              }, {
                segment: '62217',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62218',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Design Wars',
            image_url: 'http://images.zap2it.com/images/tv-EP01423092/design-wars-3.jpg',
            options: [
              {
                segment: '62219',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62220',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62221',
                name: 'The show is currently running.'
              }, {
                segment: '62222',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62223',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Heat Seekers',
            image_url: 'http://images.zap2it.com/images/tv-EP01423988/heat-seekers-4.jpg',
            options: [
              {
                segment: '62224',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62225',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62226',
                name: 'The show is currently running.'
              }, {
                segment: '62227',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62228',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Anderson',
            image_url: 'http://images.zap2it.com/images/tv-EP01432474/anderson-1.jpg',
            options: [
              {
                segment: '62229',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62230',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62231',
                name: 'The show is currently running.'
              }, {
                segment: '62232',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62233',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Sugar High',
            image_url: 'http://images.zap2it.com/images/tv-EP01432661/sugar-high-3.jpg',
            options: [
              {
                segment: '62234',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62235',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62236',
                name: 'The show is currently running.'
              }, {
                segment: '62237',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62238',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Sandwich King',
            image_url: 'http://images.zap2it.com/images/tv-EP01432865/sandwich-king-1.jpg',
            options: [
              {
                segment: '62239',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62240',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62241',
                name: 'The show is currently running.'
              }, {
                segment: '62242',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62243',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Pioneer Woman',
            image_url: 'http://images.zap2it.com/images/tv-EP01432871/the-pioneer-woman-4.jpg',
            options: [
              {
                segment: '62244',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62245',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62246',
                name: 'The show is currently running.'
              }, {
                segment: '62247',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62248',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Jeremy Kyle Show',
            image_url: 'http://images.zap2it.com/images/tv-EP01434256/the-jeremy-kyle-show-2.jpg',
            options: [
              {
                segment: '62249',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62250',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62251',
                name: 'The show is currently running.'
              }, {
                segment: '62252',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62253',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Swift Justice With Jackie Glass',
            image_url: 'http://images.zap2it.com/images/tv-EP01437234/swift-justice-with-jackie-glass-1.jpg',
            options: [
              {
                segment: '62254',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62255',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62256',
                name: 'The show is currently running.'
              }, {
                segment: '62257',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62258',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Bill Cunningham Show',
            image_url: 'http://images.zap2it.com/images/tv-EP01440811/the-bill-cunningham-show-1.jpg',
            options: [
              {
                segment: '62259',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62260',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62261',
                name: 'The show is currently running.'
              }, {
                segment: '62262',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62263',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'RightThisMinute',
            image_url: 'http://images.zap2it.com/images/tv-EP01442240/rightthisminute-3.jpg',
            options: [
              {
                segment: '62264',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62265',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62266',
                name: 'The show is currently running.'
              }, {
                segment: '62267',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62268',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Sweet Genius',
            image_url: 'http://images.zap2it.com/images/tv-EP01443663/sweet-genius-3.jpg',
            options: [
              {
                segment: '62269',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62270',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62271',
                name: 'The show is currently running.'
              }, {
                segment: '62272',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62273',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'I Just Want My Pants Back',
            image_url: 'http://images.zap2it.com/images/tv-EP01444851/i-just-want-my-pants-back-4.jpg',
            options: [
              {
                segment: '62274',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62275',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62276',
                name: 'The show is currently running.'
              }, {
                segment: '62277',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62278',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Homeland',
            image_url: 'http://images.zap2it.com/images/tv-EP01466171/homeland-9.jpg',
            options: [
              {
                segment: '62279',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62280',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62281',
                name: 'The show is currently running.'
              }, {
                segment: '62282',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62283',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Tai Chi Chasers',
            image_url: 'http://images.zap2it.com/images/tv-EP01467552/tai-chi-chasers-3.jpg',
            options: [
              {
                segment: '62284',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62285',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62286',
                name: 'The show is currently running.'
              }, {
                segment: '62287',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62288',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Gold Rush',
            image_url: 'http://images.zap2it.com/images/tv-EP01470706/gold-rush-3.jpg',
            options: [
              {
                segment: '62289',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62290',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62291',
                name: 'The show is currently running.'
              }, {
                segment: '62292',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62293',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Rock Center With Brian Williams',
            image_url: 'http://images.zap2it.com/images/tv-EP01475083/rock-center-with-brian-williams-1.jpg',
            options: [
              {
                segment: '62294',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62295',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62296',
                name: 'The show is currently running.'
              }, {
                segment: '62297',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62298',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Talking Dead',
            image_url: 'http://images.zap2it.com/images/tv-EP01477481/talking-dead-8.jpg',
            options: [
              {
                segment: '62299',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62300',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62301',
                name: 'The show is currently running.'
              }, {
                segment: '62302',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62303',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Unsupervised',
            image_url: 'http://images.zap2it.com/images/tv-EP01481213/unsupervised-4.jpg',
            options: [
              {
                segment: '62304',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62305',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62306',
                name: 'The show is currently running.'
              }, {
                segment: '62307',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62308',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'House of Lies',
            image_url: 'http://images.zap2it.com/images/tv-EP01481218/house-of-lies-1.jpg',
            options: [
              {
                segment: '62309',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62310',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62311',
                name: 'The show is currently running.'
              }, {
                segment: '62312',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62313',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Kitchen Cousins',
            image_url: 'http://images.zap2it.com/images/tv-EP01481484/kitchen-cousins-3.jpg',
            options: [
              {
                segment: '62314',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62315',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62316',
                name: 'The show is currently running.'
              }, {
                segment: '62317',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62318',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Luck',
            image_url: 'http://images.zap2it.com/images/tv-EP01489744/luck-6.jpg',
            options: [
              {
                segment: '62319',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62320',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62321',
                name: 'The show is currently running.'
              }, {
                segment: '62322',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62323',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Key & Peele',
            image_url: 'http://images.zap2it.com/images/tv-EP01504017/key-and-peele-6.jpg',
            options: [
              {
                segment: '62324',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62325',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62326',
                name: 'The show is currently running.'
              }, {
                segment: '62327',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62328',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'First Week In',
            image_url: 'http://images.zap2it.com/images/tv-EP01504041/first-week-in-4.jpg',
            options: [
              {
                segment: '62329',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62330',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62331',
                name: 'The show is currently running.'
              }, {
                segment: '62332',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62333',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Bering Sea Gold',
            image_url: 'http://images.zap2it.com/images/tv-EP01504044/bering-sea-gold-3.jpg',
            options: [
              {
                segment: '62334',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62335',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62336',
                name: 'The show is currently running.'
              }, {
                segment: '62337',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62338',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Interior Therapy With Jeff Lewis',
            image_url: 'http://images.zap2it.com/images/tv-EP01505465/interior-therapy-with-jeff-lewis-3.jpg',
            options: [
              {
                segment: '62339',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62340',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62341',
                name: 'The show is currently running.'
              }, {
                segment: '62342',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62343',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Inside Comedy',
            image_url: 'http://images.zap2it.com/images/tv-EP01505503/inside-comedy-1.jpg',
            options: [
              {
                segment: '62344',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62345',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62346',
                name: 'The show is currently running.'
              }, {
                segment: '62347',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62348',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'CBS This Morning',
            image_url: 'http://images.zap2it.com/images/tv-EP01505788/cbs-this-morning-2.jpg',
            options: [
              {
                segment: '62349',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62350',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62351',
                name: 'The show is currently running.'
              }, {
                segment: '62352',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62353',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Tabatha Takes Over',
            image_url: 'http://images.zap2it.com/images/tv-EP01507996/tabatha-takes-over-6.jpg',
            options: [
              {
                segment: '62354',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62355',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62356',
                name: 'The show is currently running.'
              }, {
                segment: '62357',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62358',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Alaska: The Last Frontier',
            image_url: 'http://images.zap2it.com/images/tv-EP01510371/alaska-the-last-frontier-3.jpg',
            options: [
              {
                segment: '62359',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62360',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62361',
                name: 'The show is currently running.'
              }, {
                segment: '62362',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62363',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Comic Book Men',
            image_url: 'http://images.zap2it.com/images/tv-EP01515702/comic-book-men-1.jpg',
            options: [
              {
                segment: '62364',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62365',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62366',
                name: 'The show is currently running.'
              }, {
                segment: '62367',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62368',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Challenge: Battle of the Exes',
            image_url: 'http://images.zap2it.com/images/tv-EP01516808/the-challenge-battle-of-the-exes-1.jpg',
            options: [
              {
                segment: '62369',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62370',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62371',
                name: 'The show is currently running.'
              }, {
                segment: '62372',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62373',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'CBS Evening News',
            image_url: 'http://images.zap2it.com/images/tv-EP01519012/cbs-evening-news-3.jpg',
            options: [
              {
                segment: '62374',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62375',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62376',
                name: 'The show is currently running.'
              }, {
                segment: '62377',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62378',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Shahs of Sunset',
            image_url: 'http://images.zap2it.com/images/tv-EP01521908/shahs-of-sunset-2.jpg',
            options: [
              {
                segment: '62379',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62380',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62381',
                name: 'The show is currently running.'
              }, {
                segment: '62382',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62383',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Million Dollar Listing New York',
            image_url: 'http://images.zap2it.com/images/tv-EP01521926/million-dollar-listing-new-york-3.jpg',
            options: [
              {
                segment: '62384',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62385',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62386',
                name: 'The show is currently running.'
              }, {
                segment: '62387',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62388',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Survivor: One World',
            image_url: 'http://images.zap2it.com/images/tv-EP01522541/survivor-one-world-6.jpg',
            options: [
              {
                segment: '62389',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62390',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62391',
                name: 'The show is currently running.'
              }, {
                segment: '62392',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62393',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Frozen Planet',
            image_url: 'http://images.zap2it.com/images/tv-EP01523600/frozen-planet-4.jpg',
            options: [
              {
                segment: '62394',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62395',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62396',
                name: 'The show is currently running.'
              }, {
                segment: '62397',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62398',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Unchained Reaction',
            image_url: 'http://images.zap2it.com/images/tv-EP01525592/unchained-reaction-4.jpg',
            options: [
              {
                segment: '62399',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62400',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62401',
                name: 'The show is currently running.'
              }, {
                segment: '62402',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62403',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Restaurant Stakeout',
            image_url: 'http://images.zap2it.com/images/tv-EP01525984/restaurant-stakeout-3.jpg',
            options: [
              {
                segment: '62404',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62405',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62406',
                name: 'The show is currently running.'
              }, {
                segment: '62407',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62408',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Ultimate Fighter Live',
            image_url: 'http://images.zap2it.com/images/tv-EP01539372/the-ultimate-fighter-live-1.jpg',
            options: [
              {
                segment: '62409',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '62410',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '62411',
                name: 'The show is currently running.'
              }, {
                segment: '62412',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '62413',
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
      var search, searchTimer;
      searchTimer = null;
      search = $('<input placeholder="Search...">').bind('keydown', function(e) {
        search = e.currentTarget.value.toLowerCase();
        clearTimeout(searchTimer);
        return searchTimer = setTimeout(function() {
          return _.each(_shows, function(show) {
            return show.search(search);
          });
        }, 100);
      });
      _$tv.append(search);
      _$tv.append('<div class="clear"></div>');
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
      select = "<select class='input-medium'>";
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
    this.search = function(search) {
      var show;
      show = _selected || search === '' || _data.name.toLowerCase().indexOf(search) !== -1;
      if (show) {
        return _$e.show();
      } else {
        return _$e.hide();
      }
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
      select = "<select class='input-medium'>";
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
