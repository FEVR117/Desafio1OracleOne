var cipher;
function encryptText() {
  var inputText = document.getElementById('inputText').value;
  var encryptedText = cipher.encrypt(inputText);
  document.getElementById('outputText').textContent = encryptedText;
}

function decryptText() {
  var inputText = document.getElementById('inputText').value;
  var decryptedText = cipher.decrypt(inputText);
  document.getElementById('outputText').textContent = decryptedText;
}

window.onload = function() {
  var shift = 1;
  cipher = new ShiftCipher(shift);
};