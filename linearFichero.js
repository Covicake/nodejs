module.exports = {
  comprobarOut,
  reEscribirfichero
}
const fs = require('fs');

function comprobarOut(a){
  return new Promise((resolve, reject) => {
      fs.readFile("out.txt", "utf8", (err, data) =>{
        if(err){
          reject("El fichero no existe o no es accesible");
        }else{
          resolve(data);
        }
      });
  });
}

function reEscribirfichero(cadena){
  return new Promise((resolve, reject) => {
    let contenido = cadena.split(" ").join("\n").toUpperCase();
    fs.writeFile("out.txt", contenido, err => {
      if(err){
        reject("Error ", err);
      }else {
        resolve("Fichero escrito correctamente");
      }
    });
  });
}
