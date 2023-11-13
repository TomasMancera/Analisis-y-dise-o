const datosTutorias = JSON.parse(localStorage.getItem('datosTutoria')) || [];
const coursesList = document.getElementById('coursesList');
const template = document.getElementById('mi_template');

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
