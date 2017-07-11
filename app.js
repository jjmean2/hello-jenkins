var express = require('express');

var app = express();

app.get('/', function(req, res) {
    console.log(req);
    res.send('hello Jongwan');
});

app.listen(process.env.PORT || 5000);

module.exports = app;