const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 API DevOps na Prática está no ar!');
});

app.listen(PORT, () => {
  console.log(`
=========================================
✅  API DevOps na Prática iniciada!
📡  Rodando em: http://localhost:${PORT}
🕒  Iniciada em: ${new Date().toLocaleString()}
=========================================
`);
});
