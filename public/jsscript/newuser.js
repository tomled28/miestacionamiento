window.onload = function() {
  var newuser = {};
  var btnEnviar = document.querySelector("#enviar");

  btnEnviar.addEventListener("click", function(e) {
    e.preventDefault();

    newuser.nuevoemail = document.querySelector("#nuevo").value;
    newuser.password = document.querySelector("#pass").value;
    newuser.domicilio = document.querySelector("#Domicilio").value;
    newuser.ciudad = document.querySelector("#inputCity").value;
    newuser.pais = document.querySelector("#inputCountry").value;

    /*if(!(/\S+@\S+\.\S+/.test(newuser.nuevoemail))){
      alert('ERROR: Debe escribir un correo válido');
      return false;
    }*/

    $.ajax({
      method: "POST",
      url: "/nuevousuario",
      data: { usuario: JSON.stringify(newuser) },
      success: function(data) {
        console.log(data);
        window.location.href = "/ingresopanel";
      }
    });
  });
};
