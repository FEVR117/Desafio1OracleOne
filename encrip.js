class ShiftCipher {
    constructor(shift) {
      this.shift = shift;
    }
  
    encrypt(str) {
      str = str.toLowerCase();
      let encry = '';
      for (let i = 0; i < str.length; i++) {
        if (str.codePointAt(i) >= 97 && str.codePointAt(i) <= 122) {
          if (str.codePointAt(i) + this.shift > 122) {
            let dif = str.codePointAt(i) + this.shift - 122;
            let newLetter = String.fromCharCode(97 + (dif - 1));
            encry += newLetter;
          } else {
            let newLetter = String.fromCharCode(str.codePointAt(i) + this.shift);
            encry += newLetter;
          }
        }
      }
      return encry.toUpperCase();
    }
  
    decrypt(str) {
      str = str.toLowerCase();
      let decry = '';
      for (let i = 0; i < str.length; i++) {
        if (str.codePointAt(i) >= 97 && str.codePointAt(i) <= 122) {
          if (str.codePointAt(i) - this.shift < 97) {
            let dif = 97 - str.codePointAt(i) + this.shift;
            let newLetter = String.fromCharCode(122 - (dif - 1));
            decry += newLetter;
          } else {
            let newLetter = String.fromCharCode(str.codePointAt(i) - this.shift);
            decry += newLetter;
          }
        }
      }
      return decry;
    }
  }
  