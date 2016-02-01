var express = require('express');

var app = express();
app.use(express.static('public'));
app.get('/', function(req,res){
	res.sendFile(__dirname+'/views/');
});
app.listen(4000, function(){
	console.log('listening on 4000');
});
