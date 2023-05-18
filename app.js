const archivos = require('./datos')
const acciones = process.argv[2];
const titulo = process.argv[3];
const lectura = archivos.leerArchivo();


switch(acciones){

    case "listar":
        console.log(`
        Listado de tareas
        ------------------
        `)
        archivos.listar(lectura)
        
        break;
    case "crear":
       
         if([titulo].includes(undefined))
            console.log("se precisa el titulo y el estado");
         else{
            const nuevaTarea = {
                titulo,
                estado: "pendiente",
            }

         
         let tarea = archivos.guardarTarea(nuevaTarea)
         console.log(tarea);
         } 
        break;
    case  undefined:
        console.log(`
        Atencion!!!! - Tienes que pasarme una accion
        Las acciones diponibles son: listar
        ----------------------------------------
        `);
        break;

    default:
        console.log(`
        -------------------------------------
        No entiendo!!!, que quieres hacer
        Las acciones disponibles son: listar
        -------------------------------------
        `);
    }
