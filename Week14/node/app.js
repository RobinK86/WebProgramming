
// Step 1 - Create a simple Node.js application that prints "Hello, Node.js!" to the console
//console.log("Hello, Node.js!");

// Step 2 - Use the built-in 'os' module to get and print the operating system platform
//const os = require('os');

 
//console.log("Operating System:", os.platform());
//console.log("User:", user.username);

// Step 3 - create a file named 'message.txt' and write "Hello from Node.js!" into it
 
//const fs = require('fs');
 
//fs.writeFileSync('message.txt', 'Hello from Node.js!');
//console.log("File created successfully!");

// Step 4 - Create a simple HTTP server that listens on port 3000 and responds with "Hello, World!" to any incoming requests
const http = require('http');
const os = require('os');

const user = os.userInfo();
 
const server = http.createServer((req, res) => {
  res.write("Hello " + user.username + ", Welcome to Node.js!");
  res.end();
});
 
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
 