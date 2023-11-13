// Mostrar un modal
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
  }
  
  // Ocultar un modal
  function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const inscriptionButton = document.querySelector('.inscription');
    const closeButton1 = document.querySelector('#crearTutoriaModal .close');
    const closeButton2 = document.querySelector('#successModal .close');
  
    // Evento para el botón "Inscribirse Ahora"
    inscriptionButton.addEventListener('click', function() {
      hideModal('crearTutoriaModal');
      showModal('successModal');
    });
  
    // Evento para el botón de cerrar en el primer modal
    closeButton1.addEventListener('click', function() {
      hideModal('crearTutoriaModal');
    });
  
    // Evento para el botón de cerrar en el segundo modal
    closeButton2.addEventListener('click', function() {
      hideModal('successModal');
    });
  });
  