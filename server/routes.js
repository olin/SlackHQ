var nope = require("./commands/nope"),
    giphy = require("./commands/giphy");

module.exports = function (app) {
  app.post("/slash/:command", function(req, res) {
    var command = req.params.command;
    var postData = req.body;

    switch(command) {
      case "giphy":
        giphy(postData, res);
      default:
        nope(postData, res);
    }
  });
};
