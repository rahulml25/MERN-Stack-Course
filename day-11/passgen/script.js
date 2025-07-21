const lengthElm = document.getElementById("length");
const uppercaseElm = document.getElementById("uppercase");
const lowercaseElm = document.getElementById("lowercase");
const numbersElm = document.getElementById("numbers");
const symbolsElm = document.getElementById("symbols");
const generateElm = document.getElementById("generate");
const passwordElm = document.getElementById("password");

const generatePassword = () => {
  const length =
    parseInt(lengthElm.value) <= 50 ? parseInt(lengthElm.value) : 50;
  const uppercase = uppercaseElm.checked;
  const lowercase = lowercaseElm.checked;
  const numbers = numbersElm.checked;
  const symbols = symbolsElm.checked;
  //   console.log(length, uppercase, lowercase, numbers, symbols);

  let chars = "";

  if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
  if (numbers) chars += "1234567890";
  if (symbols) chars += "#@!^%*;,.=+-&#";

  let password = "";

  for (let i = 0; i < length; i++) {
    const idx = getRandomIdx(chars.length - 1);
    const char = chars[idx];
    password += char;
  }

  passwordElm.innerText = password;

  // passwordElm.select();
};

const getRandomIdx = (max, min = 0) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

generateElm.addEventListener("click", generatePassword);
