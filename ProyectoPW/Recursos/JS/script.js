function ConfirmDemo() {
//Ingresamos un mensaje a mostrar
var mensaje = confirm("¿Te gusta la página?");
//Detectamos si el usuario acepto el mensaje
if (mensaje) {
alert("¡Gracias por aceptar!");
}
//Detectamos si el usuario denegó el mensaje
else {
alert("¡Haz denegado el mensaje!");
}
}