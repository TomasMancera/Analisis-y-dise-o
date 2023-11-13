const dropZone = document.getElementById('dropZone');

//Se crea la funcionalidad de drag and drop para poder subir los archivos que desee el tutor

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  e.stopPropagation();
  dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', (e) => {
  dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  e.stopPropagation();
  
  dropZone.classList.remove('dragover');
  
  let files = e.dataTransfer.files;
  handleFiles(files);
});

function handleFiles(files) {
    const file = files[0];

    // Código para subir el archivo a un servidor podría ir aquí
    
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      
      
      reader.onload = function(e) {
        dropZone.innerHTML = `<img src="${e.target.result}" class="preview-image" />`;
        
      };
      
      reader.readAsDataURL(file);
    } else {
      alert("Archivo no compatible")
    }
  }

// Permitir también la selección de archivos mediante el input
function triggerInputFile() {
    document.getElementById('fileInput').click();
    
document.getElementById('fileInput').addEventListener('change', (e) => {
    const files = e.target.files;
    handleFiles(files);
  });
  }
document.querySelector('.drop-zone__input').addEventListener('change', (e) => {
  const files = e.target.files;
  handleFiles(files);
});
