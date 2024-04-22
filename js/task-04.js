const decrementButton = document.querySelector(
    'button[data-action="decrement"]'
  );
  const incrementButton = document.querySelector(
    'button[data-action="increment"]'
  );
  
  const value = document.querySelector("#value");
  
  incrementButton.addEventListener("click", () => {
    value.textContent++;
  });
  
  decrementButton.addEventListener("click", () => {
    value.textContent--;
  });