/*
 * Npm install mongojs
 */
var db = require("mongojs")
.connect("localhost:27017/test", ['test']);
db.test.find({}, function(err, posts) {
  if( err || !posts) console.log("No posts found");
  else posts.forEach( function(post) {
    console.log(post);
  });
});
