module.exports = {
  contarPalabras
}

function contarAes(cadena){
  let arrayc = cadena.split("");
  let arrayA = arrayc.filter(e => e=="a");
  console.log(arrayA.length);
}

function contarPalabras(cadena){
  let palabras = cadena.split(" ");
  return palabras.length;
}
