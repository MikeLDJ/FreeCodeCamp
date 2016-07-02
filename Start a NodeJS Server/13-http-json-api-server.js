/*****************************************************************************
*  ## HTTP JSON API SERVER (Exercise 13 of 13)                               *
*                                                                            *
*  Write an HTTP server that serves JSON data when it receives a GET request *
*  to the path '/api/parsetime'. Expect the request to contain a query string*
*  with a key 'iso' and an ISO-format time as the value.                     *
 *****************************************************************************/

var http = require('http');
var url = require('url');
var portNumber = process.argv[2];

function parsetime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
}

function unixtime(time) {
    return {
        unixtime: time.getTime()
    };
}

var server = http.createServer(function(req, res) {
    var parseUrl = url.parse(req.url, true);
    var time = new Date(parseUrl.query.iso);
    var result;
    if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time);
    } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time);
    }
    
    if (result) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(portNumber);