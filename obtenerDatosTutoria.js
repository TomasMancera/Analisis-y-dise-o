const datosTutorias = JSON.parse(localStorage.getItem('datosTutoria')) || [];
const coursesList = document.getElementById('coursesList');
const template = document.getElementById('mi_template');
const previewNombre = document.getElementById("previewNombre")
const previewDescripcion = document.getElementById("previewDescripcion")
const previewPrecio = document.getElementById("previewPrecio")
const previewHorarios = document.getElementById("previewHorarios")

// Recorro la informacion almacenada en el localStorage de las tutorias y se 
// Asignan a cada tarjeta que muestra las tutorias disponibles
datosTutorias.forEach(function (infoTutoria) {
    const clon = template.content.cloneNode(true);
    clon.querySelector('.nombre').textContent = infoTutoria.nombre;
    clon.querySelector('.descripcion').textContent = infoTutoria.descripcion;
    clon.querySelector('.precio').textContent = infoTutoria.precio;
    clon.querySelector('.horarios').textContent = infoTutoria.horarios;
  

    if (infoTutoria.nombre !== "") {
        coursesList.appendChild(clon);
    }
});
// Imprimir info de la tutoria en la preview
datosTutorias.forEach(function (infoTutoriaPrev) {
    previewNombre.textContent = infoTutoriaPrev.nombre;
    previewDescripcion.textContent = infoTutoriaPrev.descripcion;
    previewPrecio.textContent = infoTutoriaPrev.precio;
    previewHorarios.textContent = infoTutoriaPrev.horarios;
});
