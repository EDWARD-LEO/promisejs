//npm install request
let request = require('request')

request('https://www.google.com.pe', function(){
  console.log('Fin de la pertición')
})

console.log('Esto sucede despues')