const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];


function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    }

function botondesEncriptar(){
    const textodesEncriptado = desencriptar(textArea.value)
    mensaje.value = textodesEncriptado
    }    

function encriptar(stringEncriptada){    
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada        
}

function desencriptar(stringdesEncriptada){    
    stringdesEncriptada = stringdesEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringdesEncriptada.includes(matrizCodigo[i][0])){
            stringdesEncriptada = stringdesEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringdesEncriptada        
}