document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el formulario en el DOM
    const form = document.querySelector('form');
    // Agrega un evento de escucha para cuando se envía el formulario
    form.addEventListener('submit', (event) => {
        // Si la validación del formulario no es exitosa
        if (!validateForm()) {
            // Muestra un mensaje en la consola indicando que el formulario no es válido
            console.log('El formulario no es válido. Por favor, corrige los errores.');
            // Evita que el formulario se envíe
            event.preventDefault(); // Evita que el formulario se envíe si hay errores de validación
        } else {
            // Si la validación del formulario es exitosa, muestra un mensaje en la consola
            console.log('El formulario es válido. Enviar datos...');
            // Aquí puedes enviar los datos del formulario o realizar otras acciones
        }
    });

    // Función para validar todo el formulario
    const validateForm = () => {
        let isValid = true;
        isValid = validateField('usuario', 'El usuario es obligatorio') && isValid; // Validar campo de usuario
        isValid = validateField('password', 'La contraseña es obligatoria') && isValid; // Validar campo de contraseña
        return isValid;
    };

    // Función para validar un campo específico
    const validateField = (fieldId, errorMessage) => {
        const field = document.getElementById(fieldId); // Obtiene el elemento del campo mediante su ID
        const value = field.value.trim();  // Obtiene el valor del campo y elimina los espacios en blanco al principio y al final
        // Si el valor del campo está vacío
        if (value === '') {
            setErrorFor(field, errorMessage);  // Establece un mensaje de error para el campo
            return false; // Devuelve false indicando que la validación ha fallado
        } else {
           setSuccessFor(field); // Si el valor del campo no está vacío, elimina cualquier mensaje de error anterior
           return true; // Devuelve true indicando que la validación ha tenido éxito
        }
    };

    // Función para establecer un mensaje de error en un campo
    const setErrorFor = (input, message) => {
        // Encuentra el elemento padre del campo de entrada
        const formControl = input.closest('div');
        // Encuentra el elemento de texto de error dentro del elemento padre
        const errorText = formControl.querySelector('.error-text');
        // Agrega la clase de error al elemento padre para resaltar el campo
        formControl.classList.add('error');
        // Establece el texto del mensaje de error
        errorText.innerText = message;
        // Establece el foco en el campo de entrada para una corrección rápida
        input.focus();
    };

    // Función para eliminar un mensaje de error de un campo
    const setSuccessFor = (input) => {
        // Encuentra el elemento padre del campo de entrada
        const formControl = input.closest('div');
        // Elimina la clase de error del elemento padre
        formControl.classList.remove('error');
        // Encuentra el elemento de texto de error dentro del elemento padre
        const errorText = formControl.querySelector('.error-text');
        // Establece el texto de error como vacío
        errorText.innerText = '';
    };

    // Agrega eventos para borrar las clases de error cuando se completa el input o se presiona Tab
    form.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            // Obtiene el valor del campo y elimina los espacios en blanco al principio y al final
            const value = input.value.trim();
            // Si el campo no está vacío, elimina cualquier mensaje de error
            if (value !== '') {
                setSuccessFor(input);
            }
        });
    });
});