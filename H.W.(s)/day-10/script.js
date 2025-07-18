/** @type {HTMLInputElement} */
const display = document.getElementById("display");

const signOperators = ["+", "-"];
const otherOperators = ["*", "/"];
const arithmeticOperators = [...signOperators, ...otherOperators];

const clearExp = () => (display.value = "0");
const back = () => {
  if (display.value.length > 1) {
    display.value = display.value.slice(0, display.value.length - 1);
  } else clearExp();
};

const addToExp = (/** @type {string | number} */ val) => {
  if (val === "." && !canUsePoint(display.value)) return;

  const lastVal = display.value[display.value.length - 1];
  // console.log(lastVal);

  if (isNaN(parseInt(lastVal))) {
    if (arithmeticOperators.some((opt) => opt === lastVal)) {
      if (signOperators.some((opt) => opt === lastVal)) {
        if (signOperators.some((opt) => opt === val)) {
          display.value =
            display.value.slice(0, display.value.length - 1) + val;
        } else if (otherOperators.some((opt) => opt === val)) return;
        else display.value += val;
      } else if (otherOperators.some((opt) => opt === lastVal)) {
        if (otherOperators.some((opt) => opt === val)) {
          display.value =
            display.value.slice(0, display.value.length - 1) + val;
        } // else if (signOperators.some((opt) => opt === val)) return;
        else display.value += val;
      }
      return;
    }

    if (lastVal === "." && arithmeticOperators.some((opt) => opt === val)) {
      return;
    }
  }

  if (display.value === "0") {
    if (val === "00") return;
    if (otherOperators.some((opt) => opt === val)) return;
    display.value = val;
  } else if (val === "%") {
    if (!isNaN(parseInt(lastVal))) {
      const tvalue = eval(display.value);
      display.value = tvalue * 0.01;
    }
  } else display.value += val;
};

const showResult = () => {
  display.value = eval(display.value);
};

const canUsePoint = (/** @type {string} */ str) => {
  if (!str.length) return true;

  let i = str.length - 1;
  for (; i; i--) {
    if (str[i] === ".") return false;
    else if (arithmeticOperators.some((opt) => opt === str[i])) {
      i++;
      break;
    }
  }

  const lastNumber = str.slice(i, str.length);
  console.log(lastNumber);

  if (!lastNumber) return true;
  if (!isNaN(parseInt(lastNumber))) return true;
  return false;
};
