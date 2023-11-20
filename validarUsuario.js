// Validar las credenciales de inicio de sesion
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form'); 
  form.addEventListener('submit', function(event) {
      event.preventDefault();

      const role = document.getElementById('role').value;
      const nombreUsuario = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      // Se obtienen las credenciales que se almacenaron al crear la cuenta, guardado en localStorage
      let datosUsuario = JSON.parse(localStorage.getItem('datosUsuario')) || [];
      let usuarioEncontrado = false;
    
// Se recorre la info del localStorage para validar el usuario
      for (let infoUsuario of datosUsuario) {
          if (role === infoUsuario.rol && nombreUsuario === infoUsuario.usuario && password === infoUsuario.contrasena) {
              usuarioEncontrado = true;
              if (infoUsuario.rol === "estudiante") {
                  window.location.href = '/paginaEstudiante.html';
              } else if (infoUsuario.rol === "tutor") {
                  window.location.href = '/paginaTutor.html';
              }
              break;
          }
      }

      if (!usuarioEncontrado) {
          alert("Credenciales incorrectas o usuario no encontrado");
      }
  });
});
