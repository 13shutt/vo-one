var ghpages = require('gh-pages');
 
ghpages.publish('build', {
  repo: 'git@github.com:13shutt/vo-one.git'
}, function(err) {
  console.log("Error: " + err)
});