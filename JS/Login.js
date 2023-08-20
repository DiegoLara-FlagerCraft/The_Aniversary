function redirectToPage() {
    var usuario = document.querySelector('.un').value;
    var contrasena = document.querySelector('.pass').value;
    
    // Comprueba si el usuario y la contraseña coinciden
    if (usuario === 'Princesa' && contrasena === '20082022') {
      window.location.href = '../HTML/Principal.html'; // Cambia esto con la ruta correcta
    } else {
      alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
  }

  document.querySelector('.submit').addEventListener('click', function (e) {
    e.preventDefault();
    redirectToPage();
  });