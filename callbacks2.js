let empleados = [{
        id: 1,
        nombre: "David"
    },
    {
        id: 2,
        nombre: "Morales"

    },
    {
        id: 3,
        nombre: "Bryan"

    }
];

let salarios = [{
        id: 1,
        salario: 800
    },
    {
        id: 2,
        salario: 400
    }
];

/* callbacks a menudo se utilizan para continuar con la ejecución del 
código después de que se haya completado una operación a sincrónica */

let getEmpleado = (id, callback) => {
    //find me permite buscar 
    //empelado es el que va a iterar todos los objetos 
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        callback(`No existe un empleado con id ${id}`);
    } else {
        callback(null, empleadoDB);
        //un callback no es un rotum
    }
}

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id)

    if (!salarioDB) {
        callback(`No se encontró salario para el empleado ${empleado.nombre}`)
    } else {
        callback(null, { nombre: empleado.nombre, salario: salarioDB.salario })
    }
}
getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, respuesta) => {
        if (err) {
            return console.log(err);
        }

        console.log(`El salario de ${respuesta.nombre} es de ${respuesta.salario}`);
    })

});