const express = require('express');
const app = express();

// Porta fixa
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('API DevOps na Prática rodando com sucesso! 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
