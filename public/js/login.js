document.addEventListener('DOMContentLoaded', () => {

    ;
    const login = document.getElementById('loginForm');

    login.addEventListener('submit', async (event) =>{
        event.preventDefault();
        const dataForm = new FormData(login);
        const data = {
            usuario: dataForm.get('usuario'),
            password: dataForm.get('password'),
            
        }

        console.log(data);
        

        try {
            const respuesta = await fetch('https://tp-fullstack-g17.vercel.app/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
                
            });

            

            const respuestaJson = await respuesta.json();    
            

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

