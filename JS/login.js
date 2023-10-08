
let boton = document.getElementById('btnLogin');

boton.addEventListener('click', event=> {
    iniciarSesion();
});
let iniciarSesion = async () => {

    let campos = {}

    campos.usuario = document.getElementById('usuario').value;
    campos.contrasena = document.getElementById('contrasena').value;

    const peticion = await fetch("http://127.0.0.1:8081/api/paciente/iniciarSesion", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
}