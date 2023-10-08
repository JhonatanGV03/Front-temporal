
let boton = document.getElementById('enviar');

boton.addEventListener('click', event=> {
    crearCuenta();
});
let crearCuenta = async () => {

    let campos = {}


    campos.cedula = document.getElementById('cedula').value;
    campos.correo = document.getElementById('correo').value;
    campos.password = document.getElementById('password').value;
    campos.nombres = document.getElementById('nombres').value;
    campos.telefono = document.getElementById('Telefono').value;
    campos.ciudad = document.getElementById('ciudad').value;
    campos.fechaNacimiento = document.getElementById('fechaNacimiento').value;
    campos.alergias = document.getElementById('alergias').value;
    campos.eps = document.getElementById('eps').value;
    campos.grupoSanguineo = document.getElementById('grupoSanguineo').value;
    console.log("si funciona yupiii");


    const peticion = await fetch("http://127.0.0.1:8081/api/paciente/registro", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
}