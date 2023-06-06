//Instale Code Runner (JunHan)
let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Primer hola mundo")
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Segundo hola mundo")
})

//Prueba 1
/*
p1.then(function(r) {
  console.log(r)
})

p2.then(function(r) {
  console.log(r)
})
*/


//Prueba2
/*
p1.then(function(r1) {
  console.log(r1)
  p2.then(function(r2) {
    console.log(r2)
    console.log("Promesas finalizadas")
  })
})
*/

//Prueba3
/*
Promise.all([p1, p2]).then((r) => {
  console.log(r);
  console.log("Promesas finalizadas");
});
*/

//Prueba 3 ¿Y si alguna promesa falla? - cambiar resolve > reject
//setTimeout(reject, 1000, "Error primera promesa")
Promise.all([p1, p2]).then((r) => {
  console.log(r);
  console.log("Promesas finalizadas");
}).catch(err => {
  console.log(err)
});