function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');
const body = document.querySelector('body');

btnRef.addEventListener('click', onBtnChangeColor);

function onBtnChangeColor(event) {
const randomColor = getRandomHexColor();
body.style.backgroundColor = randomColor;
spanRef.textContent = randomColor;
}
