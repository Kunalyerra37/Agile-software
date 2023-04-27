const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Serve the products.json file
  if (req.url === '/products') {
    fs.readFile('products.json', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal server error');
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
      }
    });
  }
  // Handle POST requests to update inventory
  else if (req.method === 'POST' && req.url === '/update') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', () => {
      const update = JSON.parse(body);
      fs.readFile('products.json', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal server error');
        } else {
          const products = JSON.parse(data).products;
          for (let i = 0; i < products.length; i++) {
            if (products[i].name === update.name) {
              if (update.action === 'receive') {
                products[i].quantity += update.quantity;
              } else if (update.action === 'use') {
                products[i].quantity -= update.quantity;
              }
            }
          }
          fs.writeFile('products.json', JSON.stringify({ products }), err => {
            if (err) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Internal server error');
            } else {
              res.writeHead(200, { 'Content-Type': 'text/plain' });
              res.end('Inventory updated');
            }
          });
        }
      });
    });
  }
  // Serve the HTML interface for placing orders
  else if (req.url === '/') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal server error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }
  // Serve static files (CSS, JS, etc.)
  else {
    fs.readFile(`.${req.url}`, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      }
    });
  }
});

server.listen(3000);
