// ─────────────────────────────────
//  GOOD OLD FORM
//  Exercise 4 of 8
// Write a route ('/form') that processes HTML form input
// (<form><input name="str"/></form>) and prints backwards the str value.
// -------------------------------------------------------------------------------

var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));
app.post('/form', function(req, res) {
    var strValue = req.body.str.split('').reverse().join('');
    res.end(strValue);
});

app.listen(process.argv[2]);
