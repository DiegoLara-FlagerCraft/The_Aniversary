document.getElementById('abrirImagen').addEventListener('click', function() {
    abrirModal('ruta_de_la_imagen.jpg');
  });
  
  function abrirModal(rutaImagen) {
    var modal = document.getElementById('modal');
    var imagenModal = document.getElementById('imagenModal');
  
    imagenModal.src = rutaImagen;
    modal.style.display = 'block';
  }
  
  function cerrarModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  