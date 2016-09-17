var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

var dos =[{
	id:1,
	description: 'Hi Revathi',
	completed: false
}, {
	id:2,
	description: 'How are you?',
	completed: false
}];
app.get('/', function(req, res){
	res.send('Todo API Root');
});
app.get('/dos', function(req, res){
	res.json(dos);
});

app.listen(PORT, function(){
	console.log(' Express Listening on port ' + PORT + '!!');
});