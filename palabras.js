module.exports = {
  contarPalabras
}

function contarPalabras(cadena){
  let arrayc = cadena.split("");
  let arrayA = arrayc.filter(e => e=="a");
  console.log(arrayA.length);
}
contarPalabras(process.argv[2]);
