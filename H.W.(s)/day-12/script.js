const passwordElm = document.getElementById("password");
const upElm = document.getElementById("up");
const lowElm = document.getElementById("low");
const numElm = document.getElementById("num");
const symElm = document.getElementById("sym");
const lenElm = document.getElementById("len");
const strengthElm = document.getElementById("strength");

const checkPassword = () => {
  const password = passwordElm.value;
  let passedIn = 0;

  // uppercase
  if (/^(\S)*[A-Z](\S)*$/.test(password)) {
    (upElm.style.color = "green"), passedIn++;
  } else upElm.style.color = "red";

  // lowercase
  if (/^(\S)*[a-z](\S)*$/.test(password)) {
    (lowElm.style.color = "green"), passedIn++;
  } else lowElm.style.color = "red";

  // number
  if (/^(\S)*[0-9](\S)*$/.test(password)) {
    (numElm.style.color = "green"), passedIn++;
  } else numElm.style.color = "red";

  // symbol
  if (/^(\S)*[^a-zA-Z0-9\s](\S)*$/.test(password)) {
    (symElm.style.color = "green"), passedIn++;
  } else symElm.style.color = "red";

  // length
  if (password.length >= 8) {
    (lenElm.style.color = "green"), passedIn++;
  } else lenElm.style.color = "red";

  const strength = passedIn >= 5 ? "Strong" : passedIn >= 3 ? "Medium" : "Weak";
  strengthElm.innerText = strength;
  strengthElm.className = strength.toLowerCase();
};

passwordElm.addEventListener("input", checkPassword);
