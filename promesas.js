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


let getEmpelado = (id, callback) => {
    return new Promise((resolve, reject) => {
        let empeladoBD = empelados.find(empelado => empelado)
        if (!empeladosBD) {
            reject(`No existe un empelado con id ${id}`)
        }
    })
}