const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Sample product list (in-memory)
let products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Smartphone', price: 600 },
  { id: 3, name: 'Headphones', price: 120 }
];

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to E-Commerce Backend API');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (product) res.json(product);
  else res.status(404).json({ message: 'Product not found' });
});

app.post('/api/products', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
