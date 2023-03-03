# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list
https://monosnap.com/file/wRz5iVZeOI6I6FS2yTLIqn7CDsem8Z

# Получаем контакт по id
node index.js --action get --id 5
https://monosnap.com/file/exBRFtFb7deSfls7j3DOiKsfYckjGZ

# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/yaRHGpLhquf7Ja5naywE0Q3pOiVIWq

# Удаляем контакт
node index.js --action remove --id=3
https://monosnap.com/file/jO4MuI7bB5A1lMt5mNB8xWeY0L7C2O