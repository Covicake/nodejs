module.exports = {
  tirarDado
}

function tirarDado(dado = 6){
  console.log("Dado de " + dado + " caras");
  console.log(Math.floor(Math.random()*dado)+1);
}
