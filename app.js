require('dotenv').load();

var express = require("express");
// Creating Express Server
var app = express();

// Add Middleware and Routing
require("./server/middleware")(app);
require("./server/routes")(app);

// Start the Server
var PORT = process.env.PORT || 3000;
var server = app.listen(PORT, "0.0.0.0", function () {
    var address = server.address();

    console.log(
      "IndiKit is listening at http://%s:%s",
      address.host || "localhost",
      address.port
    );
})
