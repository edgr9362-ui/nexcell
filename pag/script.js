document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    alert("¡Envío exitoso! Gracias por contactarnos.");

    this.reset();
});