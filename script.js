const inputText = document.querySelector("#textInput");
const toShowMessage = document.querySelector("#message");

var textAreaInput = document.getElementById("textInput");

textAreaInput.addEventListener("input", function() {
    var captureText = textAreaInput.value;
    var lowercaseCheckin = /[^a-z\n\s.,]/g;
    if (lowercaseCheckin.test(captureText)) {
        textAreaInput.value = "";
        alert("Solo se permiten letras en minúsculas. Por favor, ingresa texto nuevamente.");
    }
});

function encrypt(textEncrypted) {
    let arrayContent = [["e", "enter"], 
    ["i", "imes"], 
    ["a", "ai"], 
    ["o", "ober"], 
    ["u", "ufat"]];

    for(let i = 0; i < arrayContent.length; i++) {
        if(textEncrypted.includes(arrayContent[i][0])) {
            textEncrypted = textEncrypted.replaceAll(arrayContent[i][0], arrayContent[i][1])
        }
    }
    return textEncrypted
}

function btnEncryptText() {
    const textEncrypted = encrypt(inputText.value)
    toShowMessage.value = textEncrypted
    inputText.value = "";
    toShowMessage.style.backgroundImage = "none";
}

function decrypt(textDecrypted) {
    let arrayContent = [["e", "enter"], 
    ["i", "imes"], 
    ["a", "ai"], 
    ["o", "ober"], 
    ["u", "ufat"]];

    for(let i = 0; i < arrayContent.length; i++) {
        if(textDecrypted.includes(arrayContent[i][1])) {
            textDecrypted = textDecrypted.replaceAll(arrayContent[i][1], arrayContent[i][0])
        }
    }
    return textDecrypted
}

function btnDecryptText() {
    const textEncrypted = decrypt(inputText.value)
    toShowMessage.value = textEncrypted
    inputText.value = "";
}

function btnCopyText() {
    const START_OF_TEXT = 0;
    const END_OF_TEXT = 0;

    toShowMessage.setSelectionRange(START_OF_TEXT, END_OF_TEXT);
    toShowMessage.select();

    navigator.clipboard.writeText(toShowMessage.value).then(() => {
        alert("El texto ha sido copiado.");
        toShowMessage.value = ""
    });
}