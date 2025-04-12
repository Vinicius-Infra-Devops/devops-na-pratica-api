const express = require('express');
const app = express();
const PORT = 3000;

app.get('/hello', (req, res) => {
  res.json({ message: 'Olá do DevOps na Prática!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

