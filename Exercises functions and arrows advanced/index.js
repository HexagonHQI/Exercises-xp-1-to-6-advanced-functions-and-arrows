// Exercise 1:

const getSum = (num1, num2) => num1 + num2;

const result1 = getSum(3, 5);
console.log(result1); // Output: 8

const result2 = getSum(15, -7);
console.log(result2); // Output: 8


// Exercise 2:

// Function declaration 
function kgToGrams(weightKg) {
    return weightKg * 1000;
  }
  
  // Function expression 
  const kgToGramsExpression = function(weightKg) {
    return weightKg * 1000;
  };
  
  // One-line arrow function 
  const getWeightInGrams = (weightKg) => weightKg * 1000;
  
  // Example usage 
  console.log(kgToGrams(5), "grams (function declaration)"); // 5000 grams
  console.log(kgToGramsExpression(2.5), "grams (function expression)"); // 2500 grams
  console.log(getWeightInGrams(7.8), "grams (arrow function)"); // 7800 grams



  //   Exercise 3:

  (function tellFortune(children, partner, location, job) {
    // Create the fortune message using template literals
    const fortune = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
  
    // Select the target element (assuming you have an element with ID "fortune")
    const fortuneElement = document.getElementById("fortune");
  
    // If the element exists, set its text content to the fortune message
    if (fortuneElement) {
      fortuneElement.textContent = fortune;
    } else {
      console.warn("Element with ID 'fortune' not found. Fortune message not displayed.");
    }
  })(2, "John", "New Jersay", "Chef");

  
//   neeed to create an HTML file (e.g., fortuneteller.html) with an element having the ID "fortune".








