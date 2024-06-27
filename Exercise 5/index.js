// Part 1:

function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
      const message = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`;
      console.log(message); 
    }
  
   
    addIngredients("orange", "mango", "pineapple");
  }
  
  // Call makeJuice in the global scope
  makeJuice("small");

  
//   Part 2:

function makeJuice(size) {
    const ingredients = []; // Create an empty array to store ingredients
  
    function addIngredients(ingredient) {
      ingredients.push(ingredient); // Push ingredient to the ingredients array
    }
  
    function displayJuice() {
      const message = `The client wants a ${size} juice, containing ${ingredients.join(", ")}`;
      console.log(message); // Replace with DOM manipulation for display if needed
    }
  
    // Call addIngredients twice with different ingredients
    addIngredients("orange");
    addIngredients("mango");
    addIngredients("pineapple");
    addIngredients("banana"); 
    addIngredients("strawberry");
    addIngredients("kiwi");
  
    // Call displayJuice to show the final juice details
    displayJuice();
  }
  
  // Call makeJuice in the global scope
  makeJuice("large"); 
  