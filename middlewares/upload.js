const multer = require("multer");
const path = require("path");

// Это путь для сохранения изображений
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Использовал дату для создания уникального имени файла
  },
});

// Проверка формата файла
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false); // Отклоняет файл, если формат не подходит
  }
};

// Ограничение размера файла
const limits = {
  fileSize: 1024 * 1024 * 10,
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: limits,
});

module.exports = upload;
