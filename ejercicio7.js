//Forma 1
/*
let promesa = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 5)
});

promesa.then((r) => {
  console.log(r)
})
*/

const { reject } = require("bluebird");

//Forma 2 (error)
//SyntaxError: await is only valid in async functions and the top level bodies of modules
/*
let promesa = new await Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 5)
});

console.log(promesa);
*/

//Forma 3
//La promesa se hace transparente, se convierte en el valor final
/*
(
  async function(){
    let valor1 = await new Promise((resolve, reject) => {
      setTimeout(resolve, 1000, 5)
    });

    let valor2 = await new Promise((resolve, reject) => {
      setTimeout(resolve, 1000, 10)
    });

    console.log(valor1 + valor2);
  }
)();
*/
async function pruebas(){
  let valor1 = await new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 5)
  });

  let valor2 = await new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 10)
  });

  console.log(valor1 + valor2);
}

pruebas();