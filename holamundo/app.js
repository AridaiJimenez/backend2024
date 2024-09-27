const {otroMensaje} = require("./hola")

console.log("Este es el punto de entrada")
console.log(otroMensaje)

const tarea = [
    {
        nombre: "Estudiar para el examen de Backend",
        fecha: "2024-09-23"
        hecho: false,
    },
    {
        nombre: "Ir de compras",
        fecha: "23/09/2024",
        hecho: false,
    },
    {
            nombre: "Hacer tarea",
            fecha: "2024-09-22",
            hecho: true,
    },
];

const tareasPorRealizar = tareas.filter(tarea => !tarea.echo);
console.log(tareasPorRealizar);