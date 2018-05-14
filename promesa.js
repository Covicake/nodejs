function calculoLargo(value){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value > 10) {
        reject("Ha fallado el calculo largo");
      }else{
        resolve({result: 100});
      }
    }, 3000);
  });
}

async function calculoLargoAsincrono() {
  console.log("Antes de calculo largo");
  try{
    const resultado = await calculoLargo(20);
    console.log("Después de cálculo largo", resultado);
    return resultado;
  }catch(err){
    console.error("Error", err);
  }
}

calculoLargoAsincrono();
