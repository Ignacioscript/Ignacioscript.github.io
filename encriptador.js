
var desencripterText = "";
var userEncripterText = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!";
var textEncripter = userEncripterText.toLocaleLowerCase();


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


