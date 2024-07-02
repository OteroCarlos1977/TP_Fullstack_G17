document.addEventListener('DOMContentLoaded', () => {

    const API_REST = 'http://localhost:3000/api/auth/login';
    const login = document.getElementById('loginForm');

    login.addEventListener('submit', async (event) =>{
        event.preventDefault();
        const dataForm = new FormData(login);
        const data = {
            usuario: dataForm.get('usaurio'),
            password: dataForm.get('password'),
            
        }

        try {
            const respuesta = await fetch(API_REST, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
                
            });

            const respuestaJson = await respuesta.json();    
            console.log(respuestaJson);

            if (data.usuario === "admin" && respuestaJson.error === false) {
                alert("Bienvenido administrador");
                window.location.href = '../pages/administrar.html';
            } 
            else if ((data.usuario !== "admin" && respuestaJson.error === false)) {
                alert("Bienvenido usuario: " + data.usuario);
                window.location.href = '../pages/principal.html'
            } else {
                alert("Usuario o contraseña incorrectos");
            }

        }   catch (error) {
                console.error('Error al realizar la solicitud:', error);
                alert("Hubo un error al realizar la solicitud");
            }
            });
        
            
        
});

