const express = require('express');
const app = express();
 
// Home route
app.get('/', (req, res) => {
  res.send("Welcome to my first Express server!");
});
 
// About route
app.get('/about', (req, res) => {
  res.send("This is the about page.");
});
 
// Contact route
app.get('/contact', (req, res) => {
  res.send(`
    <h1>Contact Page</h1>
    <p>You can reach us at contact@example.com</p>
  `);
});
 
// Start server
app.listen(3002, () => {
  console.log("Server running on port 3002");
});
 