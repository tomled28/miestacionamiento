const express = require('express');
const app = express();
const port = 3000;
const path = require ('path');



app.use (express.static ( path.join ( __dirname, 'public' )));
//ruta para la carpeta html
app.get ('/', function (req, res){
	res.sendFile( __dirname + '/public/html/index.html')
})




app.listen(3000, function(){
	console.log ('ATR 3000!!!');
});