document.addEventListener("DOMContentLoaded", function () {
    const startDate = new Date("2022-08-20"); // Cambia la fecha de inicio a la que desees
    const currentDateElement = document.getElementById("currentDate");
    const countdownElement = document.getElementById("countdown");
  
    function updateCountdown() {
      const currentDate = new Date();
      const timeDifference = currentDate - startDate;
      const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
      currentDateElement.textContent = `Fecha actual: ${currentDate.toLocaleDateString()}`;
      countdownElement.textContent = `Días que llevamos juntos: ${daysPassed + 1}`;
    }
  
    updateCountdown();
    setInterval(updateCountdown, 1000);
  });