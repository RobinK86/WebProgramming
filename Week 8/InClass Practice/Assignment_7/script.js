// Select elements from DOM
let form = document.getElementById("taskForm");
let input = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let error = document.getElementById("errorMessage");
 
// Listen for form submission
form.addEventListener("submit", function(event) {
 
  // Stop page refresh
  event.preventDefault();
 
  // Get user input and remove extra spaces
  let taskText = input.value.trim();
 
  // Validation
  if (taskText === "") {
    error.textContent = "Task cannot be empty.";
    return;   // Stop the function if invalid
  }
 
  // Clear error message if valid
  error.textContent = "";
 
  // Create list item
  let li = document.createElement("li");
 
  // Create text span
  let span = document.createElement("span");
  span.textContent = taskText;
 
  // Toggle done when clicking the task
  span.addEventListener("click", function() {
    span.classList.toggle("done");
  });
 
  // Create delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
 
  deleteBtn.addEventListener("click", function() {
    li.remove();
  });
 
  // Add span and button to li
  li.appendChild(span);
  li.appendChild(deleteBtn);
 
  // Add li to task list
  taskList.appendChild(li);
 
  // Clear input field
  input.value = "";
});