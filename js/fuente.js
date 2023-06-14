const modoDN = document.getElementById('modoDiaNoche');
const html = document.documentElement;

modoDN.addEventListener('click', function() {
  // Alternar la clase 'modoNoche' en el elemento raíz HTML
  html.classList.toggle('modoNoche');
  // Alterna la imagen en el botón con cada click
  if (modoDN.style.backgroundImage === 'url("css/iconos/noche.png")') {
    modoDN.style.backgroundImage = 'url("css/iconos/dia.png")';
  } else {
    modoDN.style.backgroundImage = 'url("css/iconos/noche.png")';
  }
});

/* // Obtener todos los elementos con la clase "icono"
var iconos = document.getElementsByClassName("icono");

// Iterar sobre cada elemento y agregar el evento mouseover
for (var i = 0; i < iconos.length; i++) {
  iconos[i].addEventListener("mouseover", function() {
  // Al pasar el cursor sobre el elemento, aumentar su tamaño en un 20%
  this.style.transform = "scale(1.2)";
});
// Agregar el evento mouseout para restaurar el tamaño original al quitar el cursor
iconos[i].addEventListener("mouseout", function() {
  this.style.transform = "scale(1)";
});
}*/

// Resaltar cada icono de la sección contacto al pasar el cursor sobre ellos
// selecciono todos los elementos con la clase "icono"
var iconos = document.querySelectorAll(".icono");

iconos.forEach(function(icono) {
  icono.addEventListener("mouseover", function(el) {
    // Al pasar el cursor sobre el icono, aumento su tamaño en un 20%
    el.target.style.transform = "scale(1.2)";
  });

  icono.addEventListener("mouseout", function(el) {
    // Al quitar el cursor, se restablece el tamaño original del icono
    el.target.style.transform = "scale(1)";
  });
});