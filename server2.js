var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 8080;
var doNextId = 1;
	 dos =[];

app.get('/', function(req, res){
	res.send('Todo API Root');
});
 app.use(bodyParser.json());
// get/todos
app.get('/dos', function(req, res){
	res.json(dos);
});

// get/do/:id

app.get('/dos/:id', function(req, res){

	var doId = req.params.id;
	var matchedobj;

	dos.forEach(function(doss) {

		if(parseInt(doId) === doss.id){
			matchedobj = doss;
		}
	});
	 if(matchedobj){
	 	res.json(matchedobj);
	 } else {
	 	res.status(404).send();
	 }

});
app.post('/dos', function(req, res){
	var body = req.body;
	 body.id = doNextId++;
	dos.push(body);
	res.json(body);

});

app.listen(PORT, function(){
	console.log(' Express Listening on port ' + PORT + '!!');
});