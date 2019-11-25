var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('./public_html'));

server.listen(PORT, function() {
    console.log("Project Server running")
});