var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'fbY01dBClmdKQD0luiPGuSEkn',
  consumer_secret: 'sSthQKzqNBURmYT6QNHds4JUxtosRlTeMIp9QCt62jc6ROcsm9',
  access_token_key: '934950724575924224-DWd4MPyOjc5fWQ7Gq6M5gH0MOUiOMf4',
  access_token_secret: 'KEopSepYD3oYGYTfyI7dY4nJkqiANlxY8Ctg7zh2nQo6m'
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});