coursesList.addEventListener('click', function(e) {
    if (e.target.id === 'delete') {
        const id = e.target.getAttribute('data-id');
        
        // Eliminar el elemento del array en localStorage
        datosTutorias.splice(id, 1);
        localStorage.setItem('datosTutoria', JSON.stringify(datosTutorias));
        
        // Eliminar el elemento del DOM
        e.target.closest('.course-card').remove();
    }
});
