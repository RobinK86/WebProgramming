// script.js
// Week 06 - Age Prime Checker

function calculateAge(birthYear) {
  // Grab year from user input and calculate age
  let currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;
  return age;
}

function isPrime(number) {
  // Prime numbers are whole numbers greater than 1
  if (number <= 1) {
    return false;
  }

  // Check divisibility from 2 up to number - 1
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function checkAgePrime() {
  // Read birth year from the input box
  let input = document.getElementById("birthYear").value;
  let birthYear = parseInt(input);
  let currentYear = new Date().getFullYear();

  // Extra Credit Validation:
  // If input is empty OR not a valid year, show alert and stop
  if (input === "" || isNaN(birthYear) || birthYear < 1900 || birthYear > currentYear) {
    alert("Please enter a valid birth year.");
    return;
  }

  // Call functions to calculate age and check prime
  let age = calculateAge(birthYear);
  let prime = isPrime(age);

  // Alert Message
  let message = "Your age is: " + age + "\n";

  if (prime === true) {
    message = message + age + " is a Prime number.";
  } else {
    message = message + age + " is NOT a Prime number.";
  }

  // Final output (Alert)
  alert(message);
}
