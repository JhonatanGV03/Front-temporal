function enviarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtener los valores del formulario
    var usuario = document.getElementById('usuario').value;
    var contrasena = document.getElementById('contrasena').value;

    // Aquí puedes realizar alguna validación de los datos si es necesario

    // Enviar los datos al servidor (puedes usar Fetch API o AJAX)
    // Por ejemplo usando Fetch API:
    fetch('URL_DEL_BACKEND', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({usuario: usuario, contrasena: contrasena})
    })
        .then(response => response.json())
        .then(data => {
            // Aquí puedes manejar la respuesta del servidor
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
}