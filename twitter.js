require('dotenv').config();
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

client.get('friends/list', { count: 200 }, function(error, collection, response){
  if(error) throw error;
  // console.log(collection);
  // console.log(response);
  // if (collection.next_cursor) {
  //   client.get('friends/list', {cursor: collection.next_cursor}, function(error, collection, response) {
  //     for (user of collection.users) {
  //       console.log(user.screen_name);
  //     }
  //   });
  // }

  for (user of collection.users) {
    console.log(user.screen_name);
    // if (user.screen_name == "joryisabird") {
    //   console.log(user.id);
    // }
  }
});
