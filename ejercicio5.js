//Encadenar promesas
function primeraPromesa(){
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Primera promesa lista')
  });
}

function segundaPromesa(valorEntrada){
  console.log(valorEntrada)
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'Segunda promesa lista')
  });
}

primeraPromesa()
  .then(segundaPromesa)
  .then(function (r){
    console.log(r)
  });

/* ¿Cómo se comunican las promesas? */
/*
  function segundaPromesa(valorEntrada){
    console.log(valorEntrada)
    return new...
  }
*/