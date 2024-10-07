const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Простой маршрут для проверки
app.get('/', (req, res) => {
  res.send('Hello, world!'); // Или верните HTML-контент
});

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
