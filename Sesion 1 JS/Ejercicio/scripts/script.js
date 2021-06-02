// function validar(){
// //esto guarda la información que se ingresa en el input
// //de la pantalla y lo imprime en la consola
//     let numero =document.getElementById("input").value;
//     //console.log(numero);
//     if (numero==null || numero.length==0) /*aqui valido si numero es igual a nulo -o- si la longitud del numero es 0 */{
//         alert ("El campo está vacío");
//     } else {
// //el modulo -residuo de la division se representa con el %
// //ejemplo de condicional multiple

//         if (numero==0){
//             alert(`El número ${numero} es neutro`);
//             }
//         else if (numero%2!=0){
//             alert (`El número ${numero} es impar`);
//         }
//         else if (numero%2===0){
//             alert (`El número ${numero} es par`);
//         }
//         else{
//             alert(`No es válido`);
//         }
//     }

    //condicional anadido

   function validar(){

    let numero = document.getElementById('input').value;
    //console.log(numero);
    if(numero===null || numero.length===0){
        alert("El campo está vacío");
    } else{
        if(numero==0){
          alert(`El número ${numero} es neutro`);
            }
        }
        else{
                if(numero%2===0){
                alert(`El número ${numero} es par`);
            }
            else{
                alert(`El número ${numero} es impar`);
            }
        }
      
        
    }


    // //condicionales ternarios
    // numero%2==0 ?
    // alert(`El número ${numero} es impar`) :
    // alert(`El número ${numero} es par`)


}


