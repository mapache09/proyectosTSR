function sumar(){

let numero1=parseFloat(document.getElementById("numero1").value);

let numero2=parseFloat(document.getElementById("numero2").value);

let resultado = numero1+numero2;

document.getElementById("resultado").innerText=resultado;

}



function resta(){

    let numero1=parseFloat(document.getElementById("numero1").value);

    let numero2=parseFloat(document.getElementById("numero2").value);

    let resultado = numero1-numero2;

    document.getElementById("resultado").innerText=resultado;

    }




function dividir(){

    let numero1=parseFloat(document.getElementById("numero1").value);

    let numero2=parseFloat(document.getElementById("numero2").value);

    if (numero2 === 0){

        alert("no se pueden dividir por 0");

        document.getElementById("resultado").innerText="Error";

    }else{

        let resultado= numero1/numero2;

        document.getElementById("resultado").innerText=resultado;

    }

}

function multiplicar(){

    let numero1=parseFloat(document.getElementById("numero1").value);

    let numero2=parseFloat(document.getElementById("numero2").value);

    let resultado = numero1*numero2;

    document.getElementById("resultado").innerText=resultado;

    }

