console.log('The bot is starting');

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var config = require('./keys.js');

var T = new Twitter(config);

var params = {
    sceen_name: 'vikfromhouston'
}

function getTweets() {

    T.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (!error) {

                for (var i = 0; i < tweets.length; i++){
                	console.log((i+1) + "." + tweets[i].text);
                	console.log(tweets[i].created_at);
                }
            }
    });
}

var command = process.argv[2];

console.log(process.argv[2]);

if (command == "my-tweets") {
    getTweets();
}

// //Spotify 
// var spotify = new Spotify({
//   id: 'f9e1fa511dd546d7bc3dbb3962179260'
//   secret: 'c827f777a9c847739e0c8d2d4d346294'
// });
 
// function getTrack() { 
//   search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);

//   }
 
// console.log(data); 
// });
// }

// if (command == "spotify-this-song") {
//     getTrack();
// }
