const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
// Используйте CORS с настройками по умолчанию
app.use(cors());
// Настраиваем хранилище для загружаемых файлов
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'productImages'); // Указываем, куда сохранять файлы
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname)); // Создаем уникальное имя файла
//   }
// });

// const upload = multer({ storage: storage });
app.get('/', (req, res) => {
  const products = [
    {
      id: 1,
      name: 'Product A',
      price: 100.0,
      img: 'https://res.cloudinary.com/bakir/image/upload/v1730264027/photo_1_2024-10-20_21-05-20_oqw6bs.jpg'
    },
    {
      id: 2,
      name: 'Product B',
      price: 150.0,
      img: 'https://res.cloudinary.com/bakir/image/upload/v1730264027/photo_1_2024-10-20_21-05-20_oqw6bs.jpg'
    },
    {
      id: 3,
      name: 'Product C',
      price: 200.0,
      img: 'https://res.cloudinary.com/bakir/image/upload/v1730264027/photo_1_2024-10-20_21-05-20_oqw6bs.jpg'
    }
  ];

  res.json(products); // Отправка массива объектов в ответ
});

// Маршрут для загрузки изображений
// app.post('/productImages', upload.single('image'), (req, res) => {
//   res.json({ message: 'Изображение загружено!', filePath: `/productImages/${req.file.filename}` });
// });
// Простой маршрут админ-панели
app.get('/admin', (req, res) => {
  res.send(
    '<h1>Админ панель</h1><form action="/productImages" method="POST" enctype="multipart/form-data"><input type="file" name="image"/><button type="submit">Загрузить</button></form>'
  );
});
// app.get('/images', (req, res) => {
//   // Пример списка изображений (имитируем базу данных или динамическое получение файлов)
//   const images = [
//     { id: 1, filePath: '/productImages/image1.jpg' },
//     { id: 2, filePath: '/productImages/image2.jpg' }
//   ];

//   // Возвращаем массив с путями к изображениям
//   res.json(images);
//   // Экспорт для Vercel
// });
// Настройка статической папки для доступа к загруженным файлам
// app.use('/productImages', express.static('productImages'));
module.exports = (req, res) => {
  app(req, res);
};
// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
