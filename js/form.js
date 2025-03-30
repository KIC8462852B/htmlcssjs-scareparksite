document.addEventListener('DOMContentLoaded', () => {
    // CONSTANTES
    const form = document.querySelector('#contact-form');
    const resetButton = document.querySelector('#resetButton');
    const nombre = document.querySelector('#nombre');
    const email = document.querySelector('#email');
    const motivo = document.querySelector('#motivo');
    const mensaje = document.querySelector('#mensaje');
    const mensajeConfirmacion = document.querySelector('#mensaje-confirmacion');

    // REGEX PARA VALIDACIÓN
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // CLASE Form PARA MANEJO DE DATOS DEL FORMULARIO
    class Form {
        constructor(name = '', email = '', motivo = '', mensaje = '') {
            this.name = name;
            this.email = email;
            this.motivo = motivo;
            this.mensaje = mensaje;
        }

        // MÉTODO QUE GUARDA LOS DATOS DEL FORMULARIO EN LOCAL STORAGE
        save() {
            try {
                localStorage.setItem('consulta', JSON.stringify(this));
                return { status: true };
            } catch (e) {
                return { status: false, error: e };
            }
        }

        // MÉTODO QUE ELIMINA LOS DATOS DEL FORMULARIO EN LOCAL STORAGE
        reset() {
            localStorage.removeItem('consulta');
        }
    }

    const actualForm = new Form();

    // VALIDACIÓN DEL CORREO ELECTRÓNICO
    const verifyMail = () => {
        if (!email.value) {
            errorMessage(email, 'El campo de correo no puede estar vacío');
            return false;
        }
        if (!emailRegex.test(email.value)) {
            errorMessage(email, 'El correo electrónico no tiene un formato válido');
            return false;
        }
        removeError(email);
        return true;
    };

    // VALIDACIÓN DEL FORMULARIO
    const validateForm = () => {
        let isValid = true;

        if (!nombre.value.trim()) {
            errorMessage(nombre, 'El nombre no puede estar vacío');
            isValid = false;
        } else {
            removeError(nombre);
        }

        if (!mensaje.value.trim()) {
            errorMessage(mensaje, 'El mensaje no puede estar vacío');
            isValid = false;
        } else {
            removeError(mensaje);
        }

        if (!motivo.value) {
            errorMessage(motivo, 'Debes seleccionar un motivo de consulta');
            isValid = false;
        } else {
            removeError(motivo);
        }

        if (!verifyMail()) {
            isValid = false;
        }

        return isValid;
    };

    // MOSTRAR MENSAJE DE ERROR
    const errorMessage = (element, message) => {
        let errorItem = element.nextElementSibling;
        if (!errorItem || !errorItem.classList.contains('error-message')) {
            errorItem = document.createElement('div');
            errorItem.className = 'error-message';
            element.parentNode.insertBefore(errorItem, element.nextSibling);
        }
        errorItem.textContent = message;
        element.classList.add('invalid');
    };

    // ELIMINAR MENSAJE DE ERROR
    const removeError = (element) => {
        const errorElement = element.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.remove();
        }
        element.classList.remove('invalid');
    };

    // FUNCIÓN PARA GUARDAR Y ENVIAR FORMULARIO
    const sendForm = (event) => {
        event.preventDefault();

        if (validateForm()) {
            const newForm = new Form(nombre.value, email.value, motivo.value, mensaje.value);
            const result = newForm.save();
            
            if (result.status) {
                mensajeConfirmacion.classList.add('visible');
                form.reset();
                setTimeout(() => {
                    mensajeConfirmacion.classList.remove('visible');
                }, 3000);
            } else {
                alert('Error al guardar los datos: ' + result.error);
            }
        }
    };

    // FUNCIÓN PARA RESETEAR EL FORMULARIO Y ELIMINAR LOS DATOS
    const resetForm = () => {
        actualForm.reset();
        form.reset();
        removeError(nombre);
        removeError(email);
        removeError(motivo);
        removeError(mensaje);
        alert('Formulario reseteado correctamente');
    };

    // EVENTOS DEL FORMULARIO
    email.addEventListener('blur', verifyMail);
    form.addEventListener('submit', sendForm);
    resetButton.addEventListener('click', resetForm);
});
