// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// Create express app
const app = express();

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define initial supply list
let supplies = {
  paper: 50,
  ink_cartridges: 10,
  toner: 5,
  pens: 20,
  staples: 100
};

// Create a route to display the current supply levels
app.get('/', (req, res) => {
  res.send(`
    <h1>Current Supplies</h1>
    <ul>
      <li>Paper: ${supplies.paper}</li>
      <li>Ink Cartridges: ${supplies.ink_cartridges}</li>
      <li>Toner: ${supplies.toner}</li>
      <li>Pens: ${supplies.pens}</li>
      <li>Staples: ${supplies.staples}</li>
    </ul>
  `);
});

// Create a route to update the supply levels
app.post('/', (req, res) => {
  // Extract the supply name and new level from the request body
  const { supply, level } = req.body;

  // Update the supply level
  supplies[supply] = level;

  // Write the updated supply list to a file
  fs.writeFile('supplies.json', JSON.stringify(supplies), (err) => {
    if (err) throw err;
    console.log('Supplies updated!');
  });

  // Send a response to the client
  res.send('Supply level updated!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
