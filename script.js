const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".textArea");
var resultado = document.querySelector(".textArea");

function copyToClipBoard(elemento){
    const inputOculto = document.createElement('input');

    inputOculto.setAttribute('value', elemento.innerText);

    console.log(inputOculto);
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function encriptar(stringEncripada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncripada = stringEncripada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncripada.includes(matrizCodigo[i][0])){
            stringEncripada = stringEncripada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncripada
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}


function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}