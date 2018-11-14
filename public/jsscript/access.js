window.onload = function() {
  var ingreso = {};
  var btnIngresar = document.querySelector("#Ingresar");

  btnIngresar.addEventListener("click", function(e) {
    e.preventDefault();

    ingreso.inputUsuario = document.querySelector("#usuario").value;
    ingreso.inputContrasena = document.querySelector("#contrasena").value;

    $.ajax({
      method: "POST",
      url: "/ingresopanel",
      data: { userok: JSON.stringify(ingreso) },
      success: function(data) {
        console.log(data);
      }
    });
  });
};
