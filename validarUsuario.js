
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

      const role = document.getElementById('role').value;

      if (role == 'estudiante') {
        window.location.href = '/paginaEstudiante.html'; // Redirigir a la página de estudiante
      } else if (role == 'tutor') {
        window.location.href = '/paginaTutor.html'; // Redirigir a la página de tutor
      }
    });
  });

