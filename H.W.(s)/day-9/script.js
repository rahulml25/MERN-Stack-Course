const showContainer = document.querySelector("div.show-container");
const characterImage = document.querySelector("img#character");
const resetButton = document.getElementById("reset-btn");

// const colorBoxes = {
//   red: document.querySelector("div.color-box.red"),
//   blue: document.querySelector("div.color-box.blue"),
//   pink: document.querySelector("div.color-box.pink"),
//   yellow: document.querySelector("div.color-box.yellow"),
// };

// const characterBoxes = document.getElementsByClassName("character");
const characterBoxes = document
  .querySelector("div.characters")
  .getElementsByClassName("character");

const characterBoxes2 = document
  .querySelector("div.two.characters")
  .getElementsByClassName("character");

// for (const key in colorBoxes) {
//   if (Object.prototype.hasOwnProperty.call(colorBoxes, key)) {
//     const colorBox = colorBoxes[key];

//     colorBox.addEventListener("click", () => {
//       // showContainer.className = `show-container ${key}`;
//       showContainer.style.backgroundImage = `url("${characterBoxes[0].src}")`;
//     });
//   }
// }

for (const characterBox of characterBoxes) {
  characterBox.addEventListener("click", () => {
    characterImage.src = characterBox.src;
  });
}

for (const characterBox of characterBoxes2) {
  characterBox.addEventListener("click", () => {
    showContainer.style.backgroundImage = `url("${characterBox.src}")`;
  });
}

resetButton.addEventListener("click", () => {
  characterImage.src = "./assets/images/default.png";
  showContainer.style.backgroundImage = "";
});
