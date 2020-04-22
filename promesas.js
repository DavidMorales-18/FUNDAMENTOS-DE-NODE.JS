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
/* Este script utiliza los mismos vectores de objetos que el script anterior. Aquí se
transformo los métodos getEmpleado y getSalario mediante el uso de Promesas */


/* transformo los métodos getEmpleado y getSalario mediante el uso de Promesas. */

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`No existe un empleado con id ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id)

        if (!salarioDB) {
            reject(`No se encontró salario para el empleado ${empleado.nombre}`);
        } else {
            resolve({ nombre: empleado.nombre, salario: salarioDB.salario });
        }

    });
}

/* La llamada de la función también cambia. El método “then”, permite llamar a la función
getSalario y el método catch sirve para capturar cualquier error.
 */
getEmpleado(1).then(empleado => {
    return getSalario(empleado);
}).then(resp => {
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
}).catch(err => {
    console.log(err);
});