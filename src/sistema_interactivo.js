// index.js

function result(user, age) {
  // Check if age is not a valid number
  if (typeof age !== "number" || isNaN(age)) {
    console.error("Error: You must enter a valid numeric value.");
    return "Error Type";

    // Check if age is out of allowed range
  } else if (age < 0 || age > 120) {
    console.error("Error: Age must be between 0 and 120 years.");
    return "Error Range";

    // If age is under 18
  } else if (age < 18) {
    alert(
      `Hello ${user}, you are underage. Keep learning and enjoying coding!`
    );
    return "Child";

    // If age is 18 or older
  } else {
    alert(
      `Hello ${user}, you are an adult. Get ready for great opportunities in the world of programming!`
    );
    return "Old";
  }
}

module.exports = result;
