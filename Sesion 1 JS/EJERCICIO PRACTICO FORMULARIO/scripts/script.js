//funcion prevent Default para cancelar los eventos por defecto

function functionSubmit(evento){
evento.preventDefault(); 
}

//declaración de variables
let inputName, inputLastName,inputPhone,inputPeriod1,inputPeriod2,inputPeriod3,inputFinal;

//Inicialización de variables
prom = 0;

document.getElementById('inputFinal').style.display ="none";
document.getElementById('aprobo').style.display ="none";

function getFinal(){
    inputName = document.getElementById('inputName').value;
    inputLastName =document.getElementById('inputLastName').value;
    inputPhone = document.querySelector('#inputPhone').value; //con queryselectoy se puede llamar ID que usa # numeral Y CLASES que usa . punto
    inputPeriod1 =Number(document.getElementById('inputPeriod1').value);
    inputPeriod2 =Number(document.getElementById('inputPeriod2').value);
    inputPeriod3 =Number(document.getElementById('inputPeriod3').value);

    functionFinal();
}
function functionFinal(){
    final = (inputPeriod1+inputPeriod2+inputPeriod3)/3;
    document.getElementById("inputFinal").value = final;
    document.getElementById('inputFinal').style.display ="block";

    if (final>=3){
        document.getElementById('aprobo').value ="Aprobó";
    }
    else {
        document.getElementById('aprobo').value ="No Aprobó";
    }

    document.getElementById('aprobo').style.display ="block";
}