const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allElements = ingredients.map(ingredient => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = ingredient;

  return liEl;
});

const addIngredientsList = document.querySelector('ul');

addIngredientsList.append(...allElements); 
