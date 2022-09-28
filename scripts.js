//definir elementos del html
const txtingreso = document.getElementById('txtIngreso');
const txtsalida = document.getElementById('txtSalida');
const btnencriptar = document.getElementById('txtEncriptar');
const btndesencriptar = document.getElementById('txtDesencriptar');
const btncopiar = document.getElementById('txtCopiar');
const txtmsg = document.getElementById('txtMsg');

//funcion boton encriptar
function fbtnEncriptar(){
    txtsalida.style.backgroundImage = 'none';
    txtmsg.innerHTML ='';
    var texto = txtingreso.value;
    txtsalida.value= fEncriptar(texto);
}

//funcion boton desencriptar
function fbtnDesencriptar(){
    txtsalida.style.backgroundImage = 'none';
    txtmsg.innerHTML ='';
    var texto = txtingreso.value;
    txtsalida.value= fDesencriptar(texto);
}

//funcion boton copiar texto de respuesta
function fbtnCopiar(){
    navigator.clipboard.writeText(txtsalida.value);
    txtsalida.value ='';
    txtmsg.innerHTML='Ningún mensaje fue encontrado';
    txtsalida.style.backgroundImage = 'url(img/person.png)';
}

//funcion para encriptar texto
function fEncriptar(textoEncriptar){
    //["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]
    textoEncriptar = textoEncriptar.toLowerCase();

    var i = 0;
    var textoEncriptado = "";
    while( i<textoEncriptar.length){

        switch(textoEncriptar.charAt(i)) {
            case "a":
                textoEncriptado=textoEncriptado + "ai";
                break;
            case "e":
                textoEncriptado=textoEncriptado + "enter";
                break;
            case "i":
                textoEncriptado=textoEncriptado + "imes";
                break;
            case "o":
                textoEncriptado=textoEncriptado + "ober";
                break;
            case "u":
                textoEncriptado=textoEncriptado + "ufat";
                break;
            default:
                textoEncriptado=textoEncriptado + textoEncriptar.charAt(i);
                break;
          }
        i++;
    }
    return textoEncriptado;
}

//funcion para desencriptar texto
function fDesencriptar(textoDesencriptar){

    var textoEncriptado="";
    textoEncriptado=textoDesencriptar.replaceAll("ai", "a");
    textoEncriptado=textoEncriptado.replaceAll("enter", "e");
    textoEncriptado=textoEncriptado.replaceAll("imes", "i");
    textoEncriptado=textoEncriptado.replaceAll("ober", "o");
    textoEncriptado=textoEncriptado.replaceAll("ufat", "u");
    return textoEncriptado;
}
