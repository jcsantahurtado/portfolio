export function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    if (input.validity.valid && input.checkValidity()) {
        input.parentElement.classList.remove("inputField--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("inputField--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
]

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío"
    },
    email: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido"
    },

    asunto: {
        valueMissing: "El campo asunto no puede estar vacío",
        patternMismatch: "El asunto debe contener entre 4 a 50 caracteres"
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacío",
    }
}


function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }

        else if (!input.checkValidity() && input.type == "textarea" && input.value != "") {
            mensaje = "El mensaje debe contener entre 10 a 300 caracteres";
        }
    });
    return mensaje;
}
