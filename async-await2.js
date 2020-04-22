let empelados = [{
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


let getEmpleado = async(id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`No existe un empleado con id ${id}`);
        } else {
            return empleadoDB;
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



let getInfomacion = async(id) => {
    let empelado = await getEmpelado(id);
    let salario = await getSalario(empelado);
    return `El salario de ${resp.nombre} es de ${resp.salario}`;
}

getInfomacion(2).then(empelado => {
    console.log(empelado.nombre);
}).catch(err => console.log(err));