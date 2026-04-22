document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("Form-contacto");

    formulario.addEventListener("submit", function(event) {
        // Evita que la página se recargue al enviar
        event.preventDefault();

        // Aquí mostramos un mensaje al usuario
        alert("¡Gracias por contactarnos! Hemos recibido tu mensaje.");

        // Limpiamos el formulario después de enviar
        formulario.reset();
    });
});