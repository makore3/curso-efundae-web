let nombreUsuario = "makore3";
let edadUsuario = 24;
let esProgramador = true

const usuario = {
    nombreUsuario,
    edadUsuario,
    esProgramador,
    intereses: ["programación", "videojuegos", "gimnasio"]
};

function mostrarDatosUsuario(usuario) {
    console.log (`Nombre: ${usuario.nombreUsuario}`);
    console.log (`Edad: ${usuario.edadUsuario}`);
    console.log (`Es programador: ${usuario.esProgramador}`);
    console.log (`Intereses: ${usuario.intereses}`)
}

function actualizarDatosUsuario(usuario, nuevoNombre, nuevaEdad, sigueSiendoProgramador, intereses) {
    usuario.nombreUsuario = nuevoNombre || usuario.nombreUsuario;
    usuario.edadUsuario = nuevaEdad || usuario.edadUsuario;
    usuario.esProgramador = sigueSiendoProgramador !== undefined ? sigueSiendoProgramador : usuario.esProgramador;
    usuario.intereses = intereses || usuario.intereses;
}

function agregarInteres(usuario, nuevoInteres) {
    if (nuevoInteres && !usuario.intereses.includes(nuevoInteres)) {
        usuario.intereses.push(nuevoInteres);
    }
}

function eliminarInteres(usuario, interesAEliminar) {
    if (interesAEliminar && usuario.intereses.includes(interesAEliminar)) {
        usuario.intereses = usuario.intereses.filter(interes => interes !== interesAEliminar);
    }
}

mostrarDatosUsuario(usuario);

actualizarDatosUsuario(usuario, "makore4", 25, false, ["programación", "videojuegos", "gimnasio", "cocina"]);

agregarInteres(usuario, "fotografía");

eliminarInteres(usuario, "videojuegos");