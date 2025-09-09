const express = require("express");
const app = express();

// Главная страница
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Тех. проверка (на всякий)
app.get("/healthz", (req, res) => {
  res.status(200).send("ok");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on ${PORT}');
});
