// /*Ejemplo de manejo de constantes que se debe declarar y
// asignar en la misma linea*/
// const nombre = "Pablo";
// console.log(nombre);

// /*Ejemplo de manejo de constantes que se puede declarar
// y asignar por separado*/
// let nombre1;
// nombre1 = "Sonia";
// console.log (nombre1);


// /*Constantes no se puede reasignar su valor*/
// const nombre = "Jenny";
// const apellido = "Montoya";

// apellido = "Gómez";

// console.log(nombre,apellido);

// /*let*/
// let valorDado = 5;
// console.log(valorDado);
// valorDado = 4;
// console.log(valorDado);

// /*Plantillas literales se usa con comillas invertidas ``*/
// const nombre ="Jenny";
// const apellido ="Montoya";

// const nombreCompleto = `Su nombre es
// ${nombre} y su apellido es
// ${apellido}. Su nombre completo es:
// ${nombre}
// ${apellido}`;
// console.log(nombreCompleto);


function Enviar(){
    document.getElementById('demo').innerHTML = 'Hola javascript';
    document.getElementById('demo2').style.fontSize = '50px';
}

/*Estructuras condicionales sinbles, dobles, múltiple */

// //condicional simple

// let num1 = 5;
// let num2 = 6;

// if(num1<num2){
//   alert("El condicional es verdadero");
// }



// //condiconal doble
// let num1 = 5;
// let num2 = 6;

// if(num1<num2){
//   alert("Número 1 es menor");
// }else {
//     alert ("Número 2 es menor");
// }


//condicional múltiple 
let num1 = 5;
let num2 = 6;

if(num1<num2){
  alert("Número 1 es menor");
}else if(num2<num1) /*toca colocar siempre la condicion ()*/{
    alert ("Número 2 es menor");
}else{
    alert("Los número son iguales")
}