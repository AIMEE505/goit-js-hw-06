const inputValue = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputValue.addEventListener("input", () => {
  const newName = inputValue.value.trim();
  outputName.textContent = newName ? newName : "Anonymous";
});