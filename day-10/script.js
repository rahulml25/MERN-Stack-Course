const image = document.querySelector(".image");

let iter = 0;
const length = 4;

function nextImage() {
  iter = ++iter % length;
  image.src = `./images/image_${iter}.png`;
}

function prevImage() {
  iter = --iter >= 0 ? iter : length - 1;
  image.src = `./images/image_${iter}.png`;
}
