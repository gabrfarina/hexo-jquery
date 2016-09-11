var hexo = hexo || {};

var jsdom = require('jsdom');

jsdom.env("", function(err, window) {
  if (err) {
    console.error(err);
  } else {
    var jq = require('jquery')(window);
    hexo.extend.helper.register('jquery', function() {
      return jq;
    });
  }
});

