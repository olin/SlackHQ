var request = require("request");

var giphyURL = "http://api.giphy.com/v1/gifs/search";
var publicBetaKey = "dc6zaTOxFJmzC";

module.exports = function(data, res) {
  var query = data.text || "random";
  var url = giphyURL + "?q=" + encodeURIComponent(query) + "&limit=1&api_key=" + publicBetaKey;
  request.post(url, function(err, response, body) {
    if (err) {
      res.status(503).json({
        "error": err
      }); return;
    }
    var gif = JSON.parse(body).url;
    var userToken = data.token;
    var channel = data.channel_id;

    request.post({
      "url": "https://slack.com/api/chat.postMessage",
      "form": {
        "token": userToken,
        "channel": channel,
        "text": gif
      }
    }, function(err, response, body) {
        if (err) {
          res.status(503).json({
            "error": err
          });
        }
        res.status(200);
    })
  });
}
