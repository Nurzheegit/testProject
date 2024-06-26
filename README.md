# Back End Node.js
Этот проект представляет собой API на Node.js для управления пользователями. Он позволяет регистрировать пользователей, авторизовываться, редактировать профиль и получать информацию о пользователях.
## Начало работы
Эти инструкции позволят вам получить копию проекта и запустить его на вашей локальной машине для разработки и тестирования.
### Предварительные требования
Для работы с проектом вам потребуется установить:
- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)
### Установка
#### Клонировать репозиторий
git clone https://github.com/yourusername/your-project-name.git

cd your-project-name
#### Установить зависимости NPM
npm install
#### Запустить базу данных в Docker
Убедитесь, что Docker установлен и запущен.
Выполните команду для запуска контейнера с базой данных:

docker-compose up -d
#### Если захотите импортировать мою базу данных
Скопируйте файл mydb.sql в корневую папку проекта.
Выполните следующую команду для импорта базы данных в контейнер:

docker exec -i testproject-db-1 mysql -u user -ppassword testdb < mydb.sql
# Запустить проект
npm start

## Примеры запросов в Postman
https://www.postman.com/gold-meadow-983872/workspace/my-workspace/collection/29214591-5563e1ef-ee6b-4385-8674-d61a8d175dfb?action=share&creator=29214591
