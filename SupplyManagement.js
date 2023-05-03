const express = require('express');
const app = express();
const mssql = require('mssql');
const config = {
  user: 'your-username',
  password: 'your-password',
  server: 'your-server', 
  database: 'your-database',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

app.use(express.json());

app.post('/api/supply-list', async (req, res) => {
  const { name, quantity, location } = req.body;
  try {
    await mssql.connect(config);
    const request = new mssql.Request();
    const query = `INSERT INTO SupplyList (Name, Quantity, Location) VALUES ('${name}', '${quantity}', '${location}')`;
    const result = await request.query(query);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  } finally {
    mssql.close();
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
