var express = require('express')
var app = express()
var cors = require('cors')

app.use('/css',express.static(__dirname +'/Content/AdminX/css'));
app.use('/js',express.static(__dirname +'/js'));

app.use(cors())

app.get('/',function(req,res){
      res.sendfile("index.html");
});

/**
app.get('/on', function(req,res){
	console.log("ligado");
	res.sendfile("index.html");
});

app.get('/off', function(req,res){
	console.log("desligado");
	res.sendfile("index.html");
});
**/

app.listen(8080,function(){
    console.log("Working on port 8080");
});
