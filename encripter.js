var desencripterText = "";
var userEncripterText = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!";
var textEncripter = userEncripterText.toLocaleLowerCase();



var textoDesencriptado = "";
var userPalabraDesencriptada = "gato";
var palabraDesencriptada = userPalabraDesencriptada.toLocaleLowerCase();


//FUNCION ENCRIPTAR
function encriptar(texto){

var letraA = "a";
var letraE = "e";
var letraI = "i";
var letraO = "o";
var letraU = "u";

var texto = palabraDesencriptada.split(''); //cambiar por el input del usuario
for(var i=0; i<texto.length; i++){
    if(letraA == texto[i] ){
        texto[i] = "ai";        
    }

    if(letraE == texto[i] ){
        texto[i] = "enter";        
    }

    if(letraI == texto[i] ){
        texto[i] = "imes";        
    }

    if(letraO == texto[i] ){
        texto[i] = "ober";        
    }

    if(letraU == texto[i] ){
        texto[i] = "ufat";        
    } 
}
var palabraEncriptada = texto.join('');
return palabraEncriptada;
}
console.log(encriptar(palabraDesencriptada));

//FUNCION DESENCRIPTAR
function desencriptar(text){
    var text = textEncripter;
desencripterText = text
                        .replace(/ai/ig, "a")
                        .replace(/enter/ig, "e")
                        .replace(/imes/ig, "i")
                        .replace(/ober/ig, "o")
                        .replace(/ufat/ig, "u");
    return desencripterText;
}
console.log(desencriptar(textEncripter));




 

