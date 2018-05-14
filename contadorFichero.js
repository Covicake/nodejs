const fs = require('fs');
const reEscribir = require("./linearFichero.js");

function readAndWrite(){
    return new Promise((resolve, reject) =>{
      Promise.all([
        read(process.argv[2]),
        reEscribir.comprobarOut()
      ]).then(values => {
        reEscribir.reEscribirfichero(values[0]+values[1]).then(() => {
          resolve();
        });
      }).catch(err => console.error("Error", err));
    });
}

function read(ruta){
  return new Promise((resolve, reject) => {
    fs.readFile(ruta, 'utf8', (err, contenido) =>{
      if (err){
        reject("Error", err);
      }else{
        resolve(contenido);
      }
    });
  });
}

async function startReading(){
  console.log("Antes de leer y escribir");
  const resultado = await readAndWrite();
  console.log("Después de leer y escribir");
}

startReading();
