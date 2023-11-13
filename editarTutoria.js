document.addEventListener('DOMContentLoaded', function() {
    // Cargamos los cursos desde localStorage
    const coursesFromStorage = JSON.parse(localStorage.getItem('courses') || '[]');
    // Asumamos que coursesFromStorage es un array de objetos como {id: "1", title: "Curso de Matemáticas", tutor: "Juan Pérez", description: "Este curso abarca..."} 
  
    // Código para renderizar los cursos aquí (puedes usar un template o cualquier otro método)
  
    document.querySelectorAll('.enrollBtn').forEach(button => {
      button.addEventListener('click', function(e) {
        const cardBody = e.target.closest('.card-body');
        const card = e.target.closest('.course-card');
        const id = card.getAttribute('data-id'); // Obtener el id único
  
        if (e.target.innerText === 'Editar') {
          const title = cardBody.querySelector('.card-title');
          const description = cardBody.querySelectorAll('.card-text');
  
          const titleText = title.textContent;
          const tutorText = description[0].textContent;
          const descriptionText = description[2].textContent;
  
          title.innerHTML = `<input type="text" class="editField" data-original="${titleText}" value="${titleText}">`;
          description[0].innerHTML = `<input type="text" class="editField" data-original="${tutorText}" value="${tutorText}">`;
          description[1].innerHTML = `<input type="text" class="editField" data-original="${descriptionText}" value="${descriptionText}">`;
          description[2].innerHTML = `<input type="text" class="editField" data-original="${descriptionText}" value="${descriptionText}">`;
  
          e.target.innerText = 'Guardar';
        } else if (e.target.innerText === 'Guardar') {
          const title = cardBody.querySelector('.card-title');
          const description = cardBody.querySelectorAll('.card-text');
  
          const titleInput = title.querySelector('.editField');
          const tutorInput = description[0].querySelector('.editField');
          const descriptionInput = description[1].querySelector('.editField');
          const horarioInput = description[2].querySelector('.editField');
  
          title.textContent = titleInput.value;
          description[0].textContent = tutorInput.value;
          description[1].textContent = descriptionInput.value;
          description[2].textContent = horarioInput.value;
  
          e.target.innerText = 'Editar';
  
          // Actualizar en localStorage
          const courses = JSON.parse(localStorage.getItem('datosTutoria') || '[]');
          const courseIndex = courses.findIndex(course => course.id === id);
  
          if (courseIndex > -1) {
            courses[courseIndex].title = titleInput.value;
            courses[courseIndex].tutor = tutorInput.value;
            courses[courseIndex].description = descriptionInput.value;
            
  
            localStorage.setItem('datosTutoria', JSON.stringify(courses));
          }
        }
      });
    });
  });
  