// 1. Select the eelement
let button = document.getElementById("myButton");

// 2. Add an event listener to the element
button.addEventListener("click", function() {
    console.log("Button was clicked..!");

});

// Form Submission
// 1. Select the form element
let form = document.getElementById("taskForm");

// 2. Add an event listener to the form
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    console.log("Form Submitted");
});
