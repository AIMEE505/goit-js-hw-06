//rezultat
//Number of categories: 3

//Category: Animals
//Elements: 4

//Category: Products
//Elements: 3

//Category: Technologies
//Elements: 5

const list = document.querySelector("#categories");
const listItem = document.querySelectorAll(".item");

console.log("Number of categories : ", listItem.length);

listItem.forEach((item) => {
  const category = item.querySelector("h2").textContent;
  const items = item.querySelectorAll("li").length;
  console.log("Category: ", category);
  console.log("Elements: ", items);
});