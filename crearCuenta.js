
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario (refrescar la pagina apenas el boton sea presionado)
    const nombreUsuario = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const role = document.getElementById('role').value;
// Se almacena los datos del usuario en un objeto
if(password === confirmPassword){
    const dicCuenta = {
        usuario: nombreUsuario,
        contrasena: password,
        correo: email,
        rol: role

    }
    
    let datosUsuario = JSON.parse(localStorage.getItem('datosUsuario')) || [];

    datosUsuario.push(dicCuenta);

    localStorage.setItem('datosUsuario', JSON.stringify(datosUsuario));
    alert("cuenta creada con éxito!");
    window.location.href = '/login.html';
    
   

}else{
    alert("La contraseña no esta definida correctamente")
}
   


});