
// Example of fetching data from an API and displaying it on the webpage
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
        
        let output = document.getElementById("output");
        data.forEach((user) => {
            let p = document.createElement("p");
            p.textContent = user.name;
            output.appendChild(p);
        });
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

