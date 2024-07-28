var APP_DATA = {
  "scenes": [
    {
      "id": "0-hotel-entrance",
      "name": "Hotel Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.9415128080857817,
        "pitch": -0.5161859245378704,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8988580806592017,
          "pitch": 0.07290579460602764,
          "rotation": 0,
          "target": "1-front-desk"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.9688293059937463,
          "pitch": -0.30361826837997796,
          "title": "Hotel's Address",
          "text": "<font color=\"#bfbfbf\" face=\"Arial, sans-serif\"><span style=\"font-size: 14px;\">3, Jalan PJS 11/28b, Bandar Sunway, 46150 Petaling Jaya, Selangor, Malaysia</span></font><br>"
        }
      ]
    },
    {
      "id": "1-front-desk",
      "name": "Front Desk",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.9394444284698977,
        "pitch": 0.18092307065876767,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.565838059132636,
          "pitch": 0.5103911467304982,
          "rotation": 6.283185307179586,
          "target": "0-hotel-entrance"
        },
        {
          "yaw": 1.6668519336343977,
          "pitch": 0.4188553338919885,
          "rotation": 6.283185307179586,
          "target": "2-hotel-lift-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.663402482821258,
          "pitch": 0.2981875514213197,
          "title": "Front Desk Operation Hours",
          "text": "24 Hours"
        }
      ]
    },
    {
      "id": "2-hotel-lift-lobby",
      "name": "Hotel Lift Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0107183508455435,
          "pitch": 0.26451765565670016,
          "rotation": 5.497787143782138,
          "target": "1-front-desk"
        },
        {
          "yaw": 1.2722352293196284,
          "pitch": 0.2043360779398462,
          "rotation": 6.283185307179586,
          "target": "0-hotel-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-superior-room---entrance",
      "name": "Superior Room - Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.4521142887823011,
        "pitch": -0.0009247222250650111,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4966604967638677,
          "pitch": 0.590557909259914,
          "rotation": 0,
          "target": "5-superior-room---bathroom"
        },
        {
          "yaw": 0.07862279863847732,
          "pitch": 0.6051804510359702,
          "rotation": 0,
          "target": "4-superior-room---bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-superior-room---bedroom",
      "name": "Superior Room - Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.6498716689142192,
        "pitch": 0.6052568227409356,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3396659757427543,
          "pitch": 0.3315692243621928,
          "rotation": 0,
          "target": "3-superior-room---entrance"
        },
        {
          "yaw": 1.4583677658040415,
          "pitch": 0.47368003340332976,
          "rotation": 1.5707963267948966,
          "target": "4-superior-room---bedroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8335924764471621,
          "pitch": 0.46093991931192946,
          "title": "Coffee &amp; Tea Amenity",
          "text": "Coffee and Tea are available in room on complimentary basis."
        },
        {
          "yaw": 0.1566227835154912,
          "pitch": -0.1364348106011306,
          "title": "TV Channels",
          "text": "Global TV channels are available."
        }
      ]
    },
    {
      "id": "5-superior-room---bathroom",
      "name": "Superior Room - Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 3.072614467231084,
        "pitch": 0.36073385154113424,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.099345088542723,
          "pitch": 0.28787156855742424,
          "rotation": 0,
          "target": "3-superior-room---entrance"
        },
        {
          "yaw": 1.9305826967640716,
          "pitch": 0.17482215065614248,
          "rotation": 4.71238898038469,
          "target": "4-superior-room---bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Test Hotel VR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
