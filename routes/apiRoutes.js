var db = require("../models");
const igdb = require('igdb-api-node').default;

// import igdb from "igdb-api-node";
global.IGDB_API_KEY = '9523774d23d4b569be20b7bbe7cc6315';
const client = igdb();

var product;





module.exports = function (app) {



  // Get all examples
  // app.get("/api/search/:game", function (req, res) {
  //   client.games({
  //     search: req.params.game,
  //     fields: '*', // Return all fields
  //     limit: 1, // Limit to 5 results

  //     // offset: 15 // Index offset for results
  //   }).then(response => {
  //     // console.log("RESPONSE: ", JSON.stringify(response, null, 2));
  //     //product = (response.body);
  //     db.Product.create({
  //       name: response.body[0].name,
  //       summary: response.body[0].summary,
  //       category: response.body[0].category,
  //       image: response.body[0].cover.url,
  //     })
  //       .then(function (productdb) {
  //         // console.log("=======: ", productdb);
  //         res.json(productdb);
  //       });
  //     // console.log(response.body);
  //     // response.body contains the parsed JSON response to this query

  // Create a new example
  app.post("/api/games", function (req, res) {
    client.games({
      fields: '*', // Return all fields
      limit: 31, // Limit to 50 results
      // filters: { 
      //   "release_dates.date-gt": "2015-12-31",
      // }

      // offset: 15 // Index offset for results
    }).then(response => {
      for (var i =0; i<response.body.length; i++){
      if(response.body[i].cover != null) {
        console.log(response.body[i].cover.url);
         db.Product.create({
                name: response.body[i].name,
                summary: response.body[i].summary,
                category: response.body[i].category,
                image: (response.body[i].cover.url)
              });
      }
      }
      // console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
      // for (var i = 0; i < 8; i++) {
      //   console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++")
      //      db.Product.create({
      //     name: response.body[i].name,
      //     summary: response.body[i].summary,
      //     category: response.body[i].category,
      //     image: response.body[0].cover.url
      //   }).then(function (productdb) {
      //     console.log(productdb);
      //     res.json("productdb");
      //   }).catch(error => {
      //   throw error;
      // });
      // }
    
  }

    );
  });

};

  // Delete an example by id
//   app.delete("/api/products/:id", function(req, res) {
//     db.Product.destroy({ where: { id: req.params.id } }).then(function(dbProduct) {
//       res.json(dbProducts);
//     });
//   });



var test = {
  "body": [
    {
      "id": 8173,
      "name": "Overwatch",
      "slug": "overwatch",
      "url": "https://www.igdb.com/games/overwatch",
      "created_at": 1415390671692,
      "updated_at": 1537023572886,
      "summary": `In Overwatch, you control one of several heroes in competitive 6-person team shooting matches. Battle over objectives, take down the other team, and achieve victory. \n \nIn Overwatch, heroes do battle in diverse locations around the world. From the technological marvel of Numbani to the manufacturing powerhouse of Volskaya, each map
has a unique layout and specific win conditions that your team must meet in order to secure victory.`,
      "storyline": `Soldiers. Scientists. Adventurers. Oddities. \n \nIn a time of global crisis, an international task force of heroes banded together to restore peace to a war-torn world: \n \nOVERWATCH. \n \nIt ended the crisis and helped to maintain peace in the decades that followed, inspiring an era of exploration, innovation, and discovery. But
after many years, Overwatch's influence waned, and it was eventually disbanded. \n \nOverwatch is gone… but the world still needs heroes.`,
      "hypes": 41,
      "rating": 86.7658584534793,
      "popularity": 42.66666666666666,
      "aggregated_rating": 89.4782608695652,
      "aggregated_rating_count": 28,
      "total_rating": 88.12205966152226,
      "total_rating_count": 371,
      "rating_count": 343,
      "games": [
        25657,
        25076,
        17447,
        11156,
        1905,
        7331,
        19560,
        1372,
        7360,
        1939
      ],
      "tags": [
        1,
        18,
        27,
        268435461,
        268435468,
        268435471,
        536870926,
        536870934,
        536870973,
        536871015,
        536871018,
        536871198,
        536871243,
        536871365,
        536871474,
        536871487,
        536871563,
        536871595,
        536871867,
        536871882,
        536872245,
        536872352,
        536872462,
        536872695,
        536872882,
        536872898,
        536873299,
        536873326,
        536873507,
        536874094,
        536874653,
        536875046,
        536875082,
        536875173,
        536875242,
        536875257,
        536875265,
        536875270,
        536875303,
        536875304,
        536875358,
        536875372,
        536875457,
        536875483,
        536875539,
        536875700,
        536875738,
        536875755,
        536875775,
        536875783,
        536875793,
        536875815,
        536875819,
        536876028,
        536876127,
        536876166,
        536876220,
        536876235,
        536876262,
        536876383,
        536876476,
        536877147,
        536877150,
        536877433,
        536878036,
        536878108,
        536878370,
        536879044,
        536879045,
        536879201,
        536880649,
        536882010,
        536882400,
        536882731,
        536882999,
        536883002,
        536883025,
        536883026,
        536883027,
        536883468,
        536884962,
        536884963,
        536884964,
        536884970,
        536884974,
        536884975,
        536884978,
        536884982,
        536884983,
        536884984,
        536884985,
        536884986,
        1073741825
      ],
      "developers": [
        51
      ],
      "publishers": [
        51,
        26
      ],
      "game_engines": [
        149
      ],
      "category": 0,
      "player_perspectives": [
        1
      ],
      "game_modes": [
        2
      ],
      "keywords": [
        14,
        22,
        61,
        103,
        106,
        286,
        331,
        453,
        562,
        575,
        651,
        683,
        955,
        970,
        1333,
        1440,
        1550,
        1783,
        1970,
        1986,
        2387,
        2414,
        2595,
        3182,
        3741,
        4134,
        4170,
        4261,
        4330,
        4345,
        4353,
        4358,
        4391,
        4392,
        4446,
        4460,
        4545,
        4571,
        4627,
        4788,
        4826,
        4843,
        4863,
        4871,
        4881,
        4903,
        4907,
        5116,
        5215,
        5254,
        5308,
        5323,
        5350,
        5471,
        5564,
        6235,
        6238,
        6521,
        7124,
        7196,
        7458,
        8132,
        8133,
        8289,
        9737,
        11098,
        11488,
        11819,
        12087,
        12090,
        12113,
        12114,
        12115,
        12556,
        14050,
        14051,
        14052,
        14058,
        14062,
        14063,
        14066,
        14070,
        14071,
        14072,
        14073,
        14074
      ],
      "themes": [
        1,
        18,
        27
      ],
      "genres": [
        5,
        12,
        15
      ],
      "first_release_date": 1464048000000,
      "pulse_count": 3817,
      "platforms": [
        6,
        48,
        49
      ],
      "release_dates": [
        {
          "category": 0,
          "platform": 48,
          "date": 1464048000000,
          "region": 1,
          "human": "2016-May-24",
          "y": 2016,
          "m": 5
        },
        {
          "category": 0,
          "platform": 48,
          "date": 1464048000000,
          "region": 2,
          "human": "2016-May-24",
          "y": 2016,
          "m": 5
        },
        {
          "category": 0,
          "platform": 48,
          "date": 1464048000000,
          "region": 8,
          "human": "2016-May-24",
          "y": 2016,
          "m": 5
        },
        {
          "category": 0,
          "platform": 6,
          "date": 1464048000000,
          "region": 8,
          "human": "2016-May-24",
          "y": 2016,
          "m": 5
        },
        {
          "category": 0,
          "platform": 49,
          "date": 1464048000000,
          "region": 8,
          "human": "2016-May-24",
          "y": 2016,
          "m": 5
        }
      ],
      "alternative_names": [
        {
          "name": "鬥陣特攻",
          "comment": "Taiwanese Mandarin"
        },
        {
          "name": "守望先锋",
          "comment": "Chinese title"
        },
        {
          "name": "オーバーウォッチ",
          "comment": "Japanese title"
        }
      ],
      "screenshots": [
        {
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/bpcshm1ryzyf4nwu0rkt.jpg",
          "cloudinary_id": "bpcshm1ryzyf4nwu0rkt",
          "width": 1920,
          "height": 1199
        },
        {
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/aq1xangaqzrlhgetcrop.jpg",
          "cloudinary_id": "aq1xangaqzrlhgetcrop",
          "width": 2000,
          "height": 1200
        },
        {
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/xcyoi025lvvwnnrdargv.jpg",
          "cloudinary_id": "xcyoi025lvvwnnrdargv",
          "width": 2328,
          "height": 1434
        },
        {
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/ao0jpev6qtvqlftjlhv5.jpg",
          "cloudinary_id": "ao0jpev6qtvqlftjlhv5",
          "width": 1920,
          "height": 1200
        },
        {
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/qyardon47coclwtjfwwr.jpg",
          "cloudinary_id": "qyardon47coclwtjfwwr",
          "width": 2488,
          "height": 1400
        }
      ],
      "artworks": [
        {
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/homvmiusrvdbuwgbqapz.jpg",
          "cloudinary_id": "homvmiusrvdbuwgbqapz",
          "width": 1260,
          "height": 600
        },
        {
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/gqbpldwxhitzizhxzmx9.jpg",
          "cloudinary_id": "gqbpldwxhitzizhxzmx9",
          "width": 1380,
          "height": 650
        },
        {
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/cldakfotwjdsfwfkn9gj.jpg",
          "cloudinary_id": "cldakfotwjdsfwfkn9gj",
          "width": 1260,
          "height": 625
        },
        {
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/un1ngd2k0nv9uubxx04f.jpg",
          "cloudinary_id": "un1ngd2k0nv9uubxx04f",
          "width": 1260,
          "height": 640
        },
        {
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/kqnizlzzwwqfccrb4pj1.jpg",
          "cloudinary_id": "kqnizlzzwwqfccrb4pj1",
          "width": 1380,
          "height": 630
        },
        {
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/czewovccy0apzha5ix9q.jpg",
          "cloudinary_id": "czewovccy0apzha5ix9q",
          "width": 1460,
          "height": 750
        },
        {
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/qjcgg0m5lowv188ucf1e.jpg",
          "cloudinary_id": "qjcgg0m5lowv188ucf1e",
          "width": 1400,
          "height": 600
        },
        {
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/ta1z6plfw5r6xrwwcymg.jpg",
          "cloudinary_id": "ta1z6plfw5r6xrwwcymg",
          "width": 1260,
          "height": 630
        },
        {
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/qix3yskantk4uj0to7xm.jpg",
          "cloudinary_id": "qix3yskantk4uj0to7xm",
          "width": 1260,
          "height": 700
        },
        {
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/rdxnyuuvvbuo0cxlbblh.jpg",
          "cloudinary_id": "rdxnyuuvvbuo0cxlbblh",
          "width": 1260,
          "height": 625
        },
        {
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/wvoywsgc09zkzqw2fpzc.jpg",
          "cloudinary_id": "wvoywsgc09zkzqw2fpzc",
          "width": 750,
          "height": 5500
        }
      ],
      "videos": [
        {
          "name": "Gameplay Trailer",
          "video_id": "Rg7MpZedmpo"
        },
        {
          "name": "Cinematic Introduction Trailer",
          "video_id": "KztK1s23d0E"
        },
        {
          "name": "Gameplay Trailer",
          "video_id": "mMhuBk1xKnM"
        },
        {
          "name": "How To Play Genji",
          "video_id": "tVLY2BDLkkE"
        },
        {
          "name": "How To Play Mei",
          "video_id": "euEo14n-Kuw"
        },
        {
          "name": "How To Play D.VA",
          "video_id": "Og5-Pm4HNlI"
        }
      ],
      "cover": {
        "url": "//images.igdb.com/igdb/image/upload/t_thumb/fen88hu0vhcf3k3owkxd.jpg",
        "cloudinary_id": "fen88hu0vhcf3k3owkxd",
        "width": 822,
        "height": 1000
      },
      "esrb": {
        "synopsis": "This is a first-person shooter in which players join an international task force trying to restore peace to the world. Players use a variety of firearms (e.g., pistols, machine guns), arrows, and futuristic weapons (e.g., laser blasters) to attack enemies in team combat objectives. Combat is frenetic with realistic gunfire, cries of pain, and explosions. Splashes of blood briefly appear with each successful hit. One character is depicted smoking a cigar.",
        "rating": 5
      },
      "pegi": {
        "synopsis": "The content of this game is suitable for persons aged 12 years and over only.\r\nIt contains: Non realistic looking violence towards human characters",
        "rating": 3
      },
      "websites": [
        {
          "category": 8,
          "url": "https://www.instagram.com/playoverwatch"
        },
        {
          "category": 6,
          "url": "https://www.twitch.tv/playoverwatch"
        },
        {
          "category": 4,
          "url": "https://www.facebook.com/PlayOverwatch"
        },
        {
          "category": 9,
          "url": "https://www.youtube.com/channel/UClOf1XXinvZsy4wKPAkro2A"
        },
        {
          "category": 1,
          "url": "http://battle.net/overwatch/"
        },
        {
          "category": 2,
          "url": "http://overwatch.wikia.com/wiki/Overwatch_Wiki"
        },
        {
          "category": 3,
          "url": "https://en.wikipedia.org/wiki/Overwatch_%28video_game%29"
        },
        {
          "category": 5,
          "url": "https://twitter.com/PlayOverwatch"
        }
      ],
      "multiplayer_modes": [
        {
          "platform": 48,
          "offlinecoop": false,
          "onlinecoop": true,
          "lancoop": false,
          "campaigncoop": false,
          "splitscreenonline": false,
          "splitscreen": false,
          "dropin": true,
          "onlinecoopmax": 6,
          "onlinemax": 12
        },
        {
          "platform": 49,
          "offlinecoop": false,
          "onlinecoop": true,
          "lancoop": false,
          "campaigncoop": false,
          "splitscreenonline": false,
          "splitscreen": false,
          "dropin": true,
          "onlinecoopmax": 6,
          "onlinemax": 12
        },
        {
          "platform": 6,
          "offlinecoop": false,
          "onlinecoop": true,
          "lancoop": false,
          "campaigncoop": false,
          "splitscreenonline": false,
          "splitscreen": false,
          "dropin": true,
          "offlinecoopmax": 0,
          "onlinecoopmax": 6,
          "onlinemax": 12,
          "offlinemax": 0
        }
      ]
    },
    {
      "id": 21229,
      "name": "Overwatch - Game of the Year Edition",
      "slug": "overwatch-game-of-the-year-edition",
      "url": "https://www.igdb.com/games/overwatch-game-of-the-year-edition",
      "created_at": 1469297042814,
      "updated_at": 1534525882784,
      "summary": "REQUIRES XBOX LIVE GOLD. SOLD SEPARATELY.\n\nJoin us for a FREE weekend of Overwatch beginning November 17! You’ll have access to all of the maps and heroes in a variety of game modes. The Overwatch Free Weekend begins November 17 at 11:00 a.m. PT and ends November 20 at 11:59 p.m. PT. Any experience or items you earn during this free weekend will transfer over if you decide to purchase Overwatch: Game of the Year Edition; just be sure you purchase the game on the same Xbox Live Gold membership you played with during this free weekend.\n\nClash on the battlefields of tomorrow and choose your hero from a diverse cast of soldiers, scientists, adventurers, and oddities. Bend time, defy physics, and unleash a dizzying array of extraordinary powers and weapons. Engage your enemies in iconic locations from around the globe in the ultimate team-based shooter.\n\nThe world needs heroes—we hope you can join us!",
      "rating": 80,
      "popularity": 2.333333333333333,
      "aggregated_rating": 80,
      "aggregated_rating_count": 0,
      "total_rating": 80,
      "total_rating_count": 1,
      "rating_count": 1,
      "version_parent": 8173,
      "version_title": "Game of the Year Edition",
      "games": [
        36950,
        25311,
        103020,
        27092,
        90099,
        55038,
        28029,
        36926,
        27314,
        68287
      ],
      "tags": [
        1,
        18,
        27,
        268435461,
        268435468,
        268435471,
        536871378,
        536872160,
        536875269,
        536876916,
        536887738,
        536889708,
        536889709
      ],
      "category": 0,
      "game_modes": [
        2,
        3
      ],
      "keywords": [
        466,
        1248,
        4357,
        6004,
        16826,
        18796,
        18797
      ],
      "themes": [
        1,
        18,
        27
      ],
      "genres": [
        5,
        12,
        15
      ],
      "first_release_date": 1495497600000,
      "platforms": [
        6,
        48,
        49
      ],
      "release_dates": [
        {
          "category": 0,
          "platform": 49,
          "date": 1495497600000,
          "region": 2,
          "human": "2017-May-23",
          "y": 2017,
          "m": 5
        },
        {
          "category": 0,
          "platform": 48,
          "date": 1500336000000,
          "human": "2017-Jul-18",
          "y": 2017,
          "m": 7
        },
        {
          "category": 0,
          "platform": 49,
          "date": 1500336000000,
          "human": "2017-Jul-18",
          "y": 2017,
          "m": 7
        },
        {
          "category": 0,
          "platform": 6,
          "date": 1500336000000,
          "human": "2017-Jul-18",
          "y": 2017,
          "m": 7
        }
      ],
      "screenshots": [
        {
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/trragwcskpmpji0iiifn.jpg",
          "cloudinary_id": "trragwcskpmpji0iiifn",
          "width": 1920,
          "height": 1080
        },
        {
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/bwh0y6ibglnlzfsgdfpd.jpg",
          "cloudinary_id": "bwh0y6ibglnlzfsgdfpd",
          "width": 1920,
          "height": 1080
        },
        {
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/lqxqt2tiur6d3qx0yw7w.jpg",
          "cloudinary_id": "lqxqt2tiur6d3qx0yw7w",
          "width": 1920,
          "height": 1080
        },
        {
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/wlbexo5rusjvfihhjeow.jpg",
          "cloudinary_id": "wlbexo5rusjvfihhjeow",
          "width": 1920,
          "height": 1080
        },
        {
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/ihrs2qt078xmydzjzlbm.jpg",
          "cloudinary_id": "ihrs2qt078xmydzjzlbm",
          "width": 1920,
          "height": 1080
        }
      ],
      "cover": {
        "url": "//images.igdb.com/igdb/image/upload/t_thumb/iqtyerqtzey7d3lcmbrg.jpg",
        "cloudinary_id": "iqtyerqtzey7d3lcmbrg",
        "width": 1059,
        "height": 1500
      },
      "esrb": {
        "synopsis": "Online Interactions Not Rated by the ESRB",
        "rating": 5
      },
      "multiplayer_modes": [
        {
          "platform": 49,
          "offlinecoop": false,
          "onlinecoop": true,
          "lancoop": false,
          "campaigncoop": false,
          "splitscreenonline": false,
          "splitscreen": false,
          "dropin": false,
          "offlinecoopmax": 0,
          "onlinecoopmax": 0,
          "onlinemax": 12,
          "offlinemax": 0
        }
      ]
    }
  ],
  "headers": {
    "date": "Wed, 19 Sep 2018 20:29:11 GMT",
    "content-type": "application/json",
    "transfer-encoding": "chunked",
    "connection": "close",
    "set-cookie": [
      "__cfduid=d036a0ce882b51a55b8c1d534b30266f71537388951; expires=Thu, 19-Sep-19 20:29:11 GMT; path=/; domain=.igdb.com; HttpOnly"
    ],
    "strict-transport-security": "max-age=15552000; preload",
    "x-content-type-options": "nosniff",
    "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
    "server": "cloudflare",
    "cf-ray": "45cecd918fcf501d-DEN"
  },
  "url": "https://api-endpoint.igdb.com/games/?search=overwatch&fields=*&limit=2"
};
console.log(test.body[0].release_dates[3].human);