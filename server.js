const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Простое API, которое возвращает JSON
app.get('/api/data', (req, res) => {
  res.json({
    message: 'Hello from CheatFusion API!',
    success: true
  });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
