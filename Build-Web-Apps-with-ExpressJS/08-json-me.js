// ─────────────────────────────────
//  JSON ME
//  Exercise 8 of 8
// Write a server that reads a file, parses it to JSON and outputs the content
// to the user.
// The port is passed in process.argv[2].  The file name is passed in process.argv[3].
// Respond with:
//     res.json(object)
// Everything should match the '/books' resource path.
// -------------------------------------------------------------------------------

var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', function(req, res) {
    fs.readFile(process.argv[3], function(err, data) {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

app.listen(process.argv[2]);