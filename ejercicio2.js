//npm install request-promise
let request = require('request-promise')

let promesa = request('https://www.google.com.pe')

promesa.then(function (){
  console.log('Terminé la petición')
})

promesa.catch(function(err) {
  console.error(err);
})

promesa.finally(function(){
  console.log("Finalizado")
});

/*
fullfiled: completada con éxito - THEN
rejected: rechazada - CATCH
pending: pendiente
settled: finalizada (éxito/error) - FINALLY
*/

console.log('Esto sucede despues')