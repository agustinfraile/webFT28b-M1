'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let numero;
  let numeroMultiplicar = 0;
  let divDeBinario;
  let sumaDeBinarios = 0;

  let arrNumeros = []; //inicializo un array vacio
  let arrBinario = String(num).split(""); //paso a string el numero recibido para que poder separar cada numero con split y lo guardo en una variable
  // console.log(arrBinario)
  // console.log(arrBinario.length)

  for (let i = arrBinario.length; i >= 1; i--) {
      // arrNumeros.push(Number(arrBinario[i]));
      numero = Number(arrBinario[i-1]);
      console.log(`El numero en la vuelta ${i} es: ${numero}`);

      console.log(`El numero a multiplicar es ${numeroMultiplicar}`)  
      divDeBinario = Math.pow(2, numeroMultiplicar);
      console.log(`El resultado es ${divDeBinario}`)

      numeroMultiplicar++;

      if (numero !== 0) {
          arrNumeros.push(divDeBinario);
      }


      console.log(arrNumeros);
  }
  
  for (let i = 0; i < arrNumeros.length; i++) {
      console.log(arrNumeros[i]);
      sumaDeBinarios = sumaDeBinarios + arrNumeros[i];
  }
  
  return sumaDeBinarios;
}

BinarioADecimal(111);


function DecimalABinario(num) {
  // tu codigo aca
  let numero;
  console.log(numero)
  let resto;
  let numeroBin;

  let arrNumero = [];
  // let arrBinario = String(num).split("");
  // console.log(arrBinario);
  
  do {
      resto = Math.floor(num) % 2;
      num = Math.floor(num) / 2;
      console.log(`El numero dividido en 2 es ${num}`)
      console.log(`El resto es ${resto}`)


      if (resto > 0) {
          arrNumero.unshift(1);
      } else {
          arrNumero.unshift(0);
      }
  } while (Math.floor(num) > 0) 

  console.log(arrNumero);

  for (let i = 0; i < arrNumero.length; i++) {
      // console.log(arrNumero[i]);
      numeroBin = arrNumero.join('');
  }

  console.log(numeroBin)
  return numeroBin
}

DecimalABinario('50'); //110010


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}