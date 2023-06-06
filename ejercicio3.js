let request = require('request')

function leerPagina(url){
  //executor (ejecutor: resolver - rechazar la promesa)
  return new Promise(function (resolve, reject){
    request(url, function(error, response){
      if (error) return reject(error)
      resolve(response)
    })
  })
}

let promesa = leerPagina('https://google.com')
promesa.then(respuesta => console.log(respuesta))
promesa.catch(error => console.log(error))