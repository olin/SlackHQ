var nope = require("./commands/nope"),
    giphy = require("./commands/giphy");

module.exports = function (app) {
  app.post("/slash", function(req, res) {
    var postData = req.body;
    var args = postData.text.split(" ");
    postData.text = args.slice(1).join(" ");

    switch(args[0]) {
      case "giphy":
        giphy(postData, res);
        return;
      default:
        nope(postData, res);
        return;
    }
  });
};
