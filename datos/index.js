//const { log } = require('console');
const { log } = require('console');
const {readFileSync, writeFileSync} = require('fs'); 
const path = require('path')

const leerArchivo = function(){
    let tareas = JSON.parse(readFileSync(path.join(__dirname,'tareas.json'),'utf-8'))
    return tareas;
}
const parsearJSON = function(json){
    const jsonParseado = JSON.parse(json)
    return jsonParseado;
}
const escribirJSON = (tareas) =>{
    writeFileSync(path.join(__dirname,'tareas.json'),JSON.stringify(tareas,null,3),'utf-8')
    return  tareas
}
module.exports = {
    leerArchivo: function(){
        let tareas = JSON.parse(readFileSync(path.join(__dirname,'tareas.json'),'utf-8'))
        return tareas;
    },
    
    listar: function(tareas){
        tareas.forEach((tarea,i) => {
            console.log(`${i +1}.- ${tarea.titulo} - ${tarea.estado}`); 

        });
    },

   
    guardarTarea:(nuevasTareas) => {
        const tareas = parsearJSON(nuevasTareas)
        console.log(tareas);
        tareas.push(nuevasTareas)
        return escribirJSON(tareas)
    }
}

