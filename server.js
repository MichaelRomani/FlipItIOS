var express = require('express')
var http = require('http')

var app = express()
var server = http.Server(app)
server.listen(3005, () => console.log('listening on *:3005'))

let logCount = 0

// Event listeners.
// When a user joins the chatroom.
