/*
 * Npm install ntwitter
 */
var twitter = require('ntwitter');    
var twit = new twitter({
      consumer_key: 'c_key',
      consumer_secret: 'c_secret',
      access_token_key: 'token_key',
      access_token_secret: 'token_secret'});
twit.stream('statuses/sample', function(stream) {
    stream.on('data', function (data) {
      console.log(data); }); 
});