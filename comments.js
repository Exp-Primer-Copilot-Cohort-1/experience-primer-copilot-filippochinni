//create a simple web server that can return a list of comments and add comments
//to the list of comments
var express = require('express');
var bodyParser = require('body-parser');
var comments = require('./comments.json');
var app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

//routes
app.get('/comments', function(req, res){
  res.send({comments: comments});
});

app.post('/comments', function(req, res){
  var comment = req.body;
  comments.push(comment);
  res.send(comments);
});

app.listen(3000, function(){
  console.log('server listening on port 3000');
});