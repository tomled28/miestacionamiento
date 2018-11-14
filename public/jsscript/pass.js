window.onload = function() {
  var btnRecuperar = document.querySelector("#recuperarpass");
  btnRecuperar.addEventListener("click", function(e) {
    e.preventDefault();

    var recpass = document.querySelector("#emailusuario").value;

    console.log(recpass);
  });
};
