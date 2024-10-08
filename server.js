const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для парсинга JSON
app.use(express.json());

// Обработчик для GET-запроса на корневой маршрут
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Обработчик для GET-запроса на /data
app.get('/data', (req, res) => {
  const dataArray = [
    { id: 1, name: 'Тестовый запрос на удалённом сервере API' },
    { id: 2, name: 'Еще один тестовый запрос' }
    // Добавьте другие элементы, если нужно
  ];
  res.json(dataArray); // Отправляем массив данных в формате JSON
});

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
