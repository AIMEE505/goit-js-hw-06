const widget = document.querySelector(".widget");
const backgroundColorName = document.querySelector(".color");
const changeButton = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeButton.addEventListener("click", () => {
  widget.style.backgroundColor = getRandomHexColor();
  backgroundColorName.textContent = getRandomHexColor();
});