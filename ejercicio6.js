//Funciones asíncronas
async function sumar(valor1, valor2){
  //Implícitamente se retorna Promise.resolve()
  return valor1 + valor2;
}

//función NO asíncrona
function restar(valor1, valor2){
  return valor1 - valor2;
}

//Pendiente...
async function calcular(){
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 5)
  });
}

console.log(sumar(1, 5))
console.log(restar(1, 5))
console.log(calcular())
//console.log(calcular().then(r => console.log(r)))