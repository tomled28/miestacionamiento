window.onload = function () {

	var btnEnviar = document.querySelector("#enviar");

	btnEnviar.addEventListener ("click" , function (e){
		
        
        var nuevoemail = document.querySelector ("#nuevo" ).value;
		var	password = document.querySelector ("#pass").value;
		var domicilio = document.querySelector("#Domicilio").value;
        var ciudad = document.querySelector("#inputCity").value;
        var pais = document.querySelector("#inputCountry").value;
		var genero = document.querySelector ("#inputState").value;
        
        
		
		console.log (nuevoemail);	
		console.log (password);	
		console.log (domicilio);
		console.log (ciudad);
		console.log (genero);	
		})

			
	}