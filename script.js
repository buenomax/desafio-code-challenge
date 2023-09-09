document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("formulario-de-registro");

  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevenir el envío por defecto del formulario

      const nombre = document.getElementById("nombre").value;
      const apellido = document.getElementById("apellido").value;
      const fechaNacimiento = document.getElementById("fechaNacimiento").value;

      // Crear un objeto con los datos del formulario
      const data = {
          nombre: nombre,
          apellido: apellido,
          fechaNacimiento: fechaNacimiento
      };

      // Realizar la solicitud POST utilizando fetch
      fetch("https://jsonplaceholder.typicode.com/users", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
              "Content-Type": "application/json"
          }
      })
      .then(response => response.json())
      .then(data => {
          console.log("Respuesta del servidor:", data);
      })
      .catch(error => {
          console.error("Error al enviar los datos:", error);
      });
  });
});