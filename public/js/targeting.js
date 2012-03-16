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
        ]
      };
      ({
        tv: [
          {
            name: 'NBC Nightly News',
            image_url: 'http://images.zap2it.com/images/tv-EP00003061/nbc-nightly-news-4.jpg',
            options: [
              {
                segment: '61266',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61268',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61270',
                name: 'The show is currently running.'
              }, {
                segment: '61272',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61274',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Simpsons',
            image_url: 'http://images.zap2it.com/images/tv-EP00018693/the-simpsons-1.jpg',
            options: [
              {
                segment: '61276',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61277',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61279',
                name: 'The show is currently running.'
              }, {
                segment: '61281',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61283',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Friends',
            image_url: 'http://images.zap2it.com/images/tv-EP00115127/friends-3.jpg',
            options: [
              {
                segment: '61285',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61287',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61289',
                name: 'The show is currently running.'
              }, {
                segment: '61291',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61293',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Extra',
            image_url: 'http://images.zap2it.com/images/tv-EP00115264/extra-6.jpg',
            options: [
              {
                segment: '61295',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61297',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61299',
                name: 'The show is currently running.'
              }, {
                segment: '61301',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61303',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The King of Queens',
            image_url: 'http://images.zap2it.com/images/tv-EP00277610/the-king-of-queens-2.jpg',
            options: [
              {
                segment: '61305',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61307',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61309',
                name: 'The show is currently running.'
              }, {
                segment: '61311',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61313',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Family Guy',
            image_url: 'http://images.zap2it.com/images/tv-EP00296001/family-guy-4.jpg',
            options: [
              {
                segment: '61315',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61317',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61319',
                name: 'The show is currently running.'
              }, {
                segment: '61321',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61323',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Futurama',
            image_url: 'http://images.zap2it.com/images/tv-EP00303483/futurama-3.jpg',
            options: [
              {
                segment: '61325',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61327',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61329',
                name: 'The show is currently running.'
              }, {
                segment: '61331',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61333',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Law & Order: Special Victims Unit',
            image_url: 'http://images.zap2it.com/images/tv-EP00316978/law-and-order-special-victims-unit-1.jpg',
            options: [
              {
                segment: '61335',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61337',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61339',
                name: 'The show is currently running.'
              }, {
                segment: '61341',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61343',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'CSI: Miami',
            image_url: 'http://images.zap2it.com/images/tv-EP00524061/csi-miami-6.jpg',
            options: [
              {
                segment: '61345',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61347',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61349',
                name: 'The show is currently running.'
              }, {
                segment: '61351',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61353',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Barefoot Contessa',
            image_url: 'http://images.zap2it.com/images/tv-EP00536629/barefoot-contessa-6.jpg',
            options: [
              {
                segment: '61355',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61357',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61359',
                name: 'The show is currently running.'
              }, {
                segment: '61361',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61363',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'Two and a Half Men',
            image_url: 'http://images.zap2it.com/images/tv-EP00592733/two-and-a-half-men-4.jpg',
            options: [
              {
                segment: '61365',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61367',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61369',
                name: 'The show is currently running.'
              }, {
                segment: '61371',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61373',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Ellen DeGeneres Show',
            image_url: 'http://images.zap2it.com/images/tv-EP00599270/the-ellen-degeneres-show-8.jpg',
            options: [
              {
                segment: '61375',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61377',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61379',
                name: 'The show is currently running.'
              }, {
                segment: '61382',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61384',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'How I Met Your Mother',
            image_url: 'http://images.zap2it.com/images/tv-EP00753796/how-i-met-your-mother-1.jpg',
            options: [
              {
                segment: '61386',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61387',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61389',
                name: 'The show is currently running.'
              }, {
                segment: '61391',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61393',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'My Name Is Earl',
            image_url: 'http://images.zap2it.com/images/tv-EP00753860/my-name-is-earl-1.jpg',
            options: [
              {
                segment: '61395',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61397',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61399',
                name: 'The show is currently running.'
              }, {
                segment: '61401',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61403',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'The Colbert Report',
            image_url: 'http://images.zap2it.com/images/tv-EP00774699/the-colbert-report-6.jpg',
            options: [
              {
                segment: '61405',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61407',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61409',
                name: 'The show is currently running.'
              }, {
                segment: '61411',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61414',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
            name: 'House Hunters International',
            image_url: 'http://images.zap2it.com/images/tv-EP00804863/house-hunters-international-12.jpg',
            options: [
              {
                segment: '61415',
                name: 'The show will start within 60 minutes.'
              }, {
                segment: '61417',
                name: 'The show will start within 30 minutes.'
              }, {
                segment: '61420',
                name: 'The show is currently running.'
              }, {
                segment: '61421',
                name: 'The show ended within 30 minutes.'
              }, {
                segment: '61423',
                name: 'The show ended within 60 minutes.'
              }
            ]
          }, {
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
          }
        ]
      });
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
