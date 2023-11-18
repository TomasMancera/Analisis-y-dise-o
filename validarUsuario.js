// Datos validos para iniciar sesion a modo de prueba (simulacion de base de datos)
const listaNombres = [{
  nombre: "tomas",
  contrasena: "12345678"
},

  {
    nombre: "juan pablo",
    contrasena: "123456789"
  
  }

]
  
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

      const role = document.getElementById('role').value;
      const nombreUsuario = document.getElementById('username').value;
      const password = document.getElementById('password').value;

// Recorrer objeto para validar el nombre y contrasena "base de datos"
      for(let i = 0; i < listaNombres.length;i++){
        if (role == 'estudiante' && nombreUsuario == listaNombres[i].nombre && password == listaNombres[i].contrasena) {
          window.location.href = '/paginaEstudiante.html'; // Redirigir a la página de estudiante
        } else if (role == 'tutor' && nombreUsuario == listaNombres[i].nombre && password == listaNombres[i].contrasena) {
          window.location.href = '/paginaTutor.html'; // Redirigir a la página de tutor
        }
      
      }
      
    });
  });

