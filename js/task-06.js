const validationInput = document.querySelector("#validation-input");
const validationLength = parseInt(validationInput.getAttribute("data-length"));
validationInput.addEventListener("input", () => {
  if (validationInput.value.length < validationLength) {
    validationInput.classList.add("invalid");
  } else {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  }
});