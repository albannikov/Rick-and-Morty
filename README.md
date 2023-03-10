## Задача

Общее описание задания
Реализовать spa-приложение согласно макету и требованиям.
Макет:
https://www.figma.com/file/9qQUh2jaQ6KYlXkZnJ5p60/AngularTest?node-id=1%3A3

Общие требования
1. Верстка должна быть валидная и семантическая.
2. Код должен быть структурированным, понятным и по возможности оптимальным.
3. Для приложения использовать API “https://rickandmortyapi.com”.
4. Приложение должно быть в формате SPA (Single Page Application.
5. Приветствуется максимальное использование самописных решений, чтобы посмотреть, как ты умеешь писать базовые компоненты, без использования библиотек.
6. Выбор технологического стека остается за тобой, мы не навязываем инструментов. Если какие-то требования детально не описаны, вы вольны выбирать реализацию и поведение сами. 
Опирайтесь на макет, опыт лучших практик и свои знания в UX.

Требования к реализации
1. При регистрации пользователь должен сохраняться локально. Поля необходимо провалидировать следующим образом:
- E-mail: обязательное поле, должен быть определенного формата, длина не менее 6 и не более 50 символов, только латинские буквы и цифры. 
- Логин: обязательное поле, только латинские буквы и цифры, должен состоять не только из цифр, длина не менее 6 и не более 20 символов.
- Имя: обязательное поле, либо латинские символы, либо кириллица, длина не менее 2 и не более 50 символов.
- Фамилия: обязательное поле, тот же алфавит, что и у имени, длина не менее 2 и не более 50 символов 
- Пароль: обязательное поле, должен содержать символы верхнего регистра (A-Z), нижнего регистра (a-z) и цифры (0-9), длина не менее 6 и не более 50 символов.
- Повтор пароля: обязательное, должен совпадать с предыдущим.

2. Реализовать авторизацию.
3. Реализовать переключение между страницами.
4. Добавить вывод/фильтрацию персонажей. За получение и фильтрацию данных о персонажах отвечает API.
5. Реализовать смену вида (списком, сеткой).
6. Реализовать добавление в избранное и удаление из него. Добавить сортировку избранных персонажей.
7. Реализовать пагинацию.
