function guardarDatos (){
  localStorage.nombre.nombre = document.getElementById("nombre").value;
  localStorage.nombre.password = document.getElementById("password").value;
}

function recuperarDatos(){
  if((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
    document.getElementById("datos").innerHTML = "Nombre:" + localStorage.nombre + "<br/> Password: " + localStorage.Password;
  }
  else {
    document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
  }
}
