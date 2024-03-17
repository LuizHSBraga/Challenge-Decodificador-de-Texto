function openNewPage(action) {
    const message = document.getElementById('input').value;
    const result = action === 'encrypt' ? encrypt(message) : decrypt(message);
    const resultWindow = window.open("", "_blank", "width=600,height=400");
    resultWindow.document.write("<pre>" + result + "</pre>");
    resultWindow.document.close();
}

function encrypt(message) {
    const shift = 3; // Número de posições a serem deslocadas
    let result = '';

    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        } else {
            result += message.charAt(i);
        }
    }

    return result;
}

function decrypt(message) {
    const shift = 3; // Número de posições a serem deslocadas
    let result = '';

    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
        } else {

            result += message.charAt(i);
        }
    }

    return result;
}


document.addEventListener('DOMContentLoaded', function() {
    checkMessage();
});

function checkMessage() {
    const input = document.getElementById('input');
    const message = document.getElementById('message');

    if (input.value.trim() !== '') {
        message.classList.add('hidden');
    } else {
        message.classList.remove('hidden');
    }
}
