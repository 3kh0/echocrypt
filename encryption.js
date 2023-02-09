function encrypt() {
  const key = document.querySelector("#key").value;
  const message = document.querySelector("#message").value;
  let encryptedMessage = "";

  for (let i = 0; i < message.length; i++) {
    const keyChar = key.charCodeAt(i % key.length);
    const messageChar = message.charCodeAt(i);
    encryptedMessage += String.fromCharCode((messageChar + keyChar) % 127);
  }

  document.querySelector("#result").value = encryptedMessage;
}

function decrypt() {
  const key = document.querySelector("#key").value;
  const encryptedMessage = document.querySelector("#message").value;
  let message = "";

  for (let i = 0; i < encryptedMessage.length; i++) {
    const keyChar = key.charCodeAt(i % key.length);
    const encryptedChar = encryptedMessage.charCodeAt(i);
    message += String.fromCharCode((encryptedChar - keyChar + 127) % 127);
  }

  document.querySelector("#result").value = message;
}