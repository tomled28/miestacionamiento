const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
//ruta para la carpeta html
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/html/index.html"));
});

app.get("/nuevousuario", function(request, res) {
  res.sendFile(path.join(__dirname + "/public/html/nuevousuario.html"));
});

var users = [];
app.post("/nuevousuario", function(req, res) {
  users.push(JSON.parse(req.body.usuario));
  res.json({ status: 200 });
});

app.get("/ingresopanel", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/html/controlpanel.html"));
});

app.post("/ingresopanel", function(req, res) {
  var userok = JSON.parse(req.body.userok);

  var results = users.filter(function(user) { 
	console.log(user.password , userok.inputContrasena , user.nuevoemail , userok.inputUsuario) 
	  if (user.password == userok.inputContrasena && user.nuevoemail == userok.inputUsuario) {
			return user;
		}
		else {
			res.json({ status: 404 });
		}
	  return [];
  });
  
  if (results.length > 0) {
    res.json(results[0]);
  } else {
    res.json({ status: 404 });
  }
});

app.get ("/get-points", function(req,res) {
	res.json(JSON.stringify(estacionamientos))
})



var estacionamientos = [{
	lat:'-31.311359',
	lng: '-64.281833',
	nombre: 'playa1',
	autos: '$40 la hora',
	camionetas: '45$ la hora',
	espacio: 0 ,
},
{
	lat:'-31.313017',
	lng: '-64.285291',
	nombre: 'playa2',
	autos: '$45 la hora',
	camionetas: '50$ la hora',
	espacio: 0 ,
},
{
	lat:'-31.316132',
	lng: '-64.274853',
	nombre: 'playa3',
	autos: '$30 la hora',
	camionetas: '35$ la hora',
	espacio: 0 ,
}
]

app.listen(3000, function() {
  console.log("ATR 3000!!!");
});
