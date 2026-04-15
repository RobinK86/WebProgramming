const express = require('express');
const app = express();
 
// Home route
app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to My Express Server</h1>
    <p>Hello, students!!</p>
    <p>This server is running on port 3002.</p>
  `);
});
 
// Start server
app.listen(3002, () => {
  console.log("Server running on port 3002");
});