require('dotenv').config();
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

function loop(cursor) {
  if (cursor == 0) { return; }

  console.log('CURSOR', cursor);

  client.get('friends/list', { count: 20, cursor: cursor }, function(error, collection, response){
    console.log(JSON.stringify(error));
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
    }

    loop(collection.next_cursor);
  });
}

loop(-1);
