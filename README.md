Макет новой версии Прессфида (bootstrap 4)<br>
https://fkolesnik.github.io/pf2/

Список страниц и краткое описание важных особенностей:

1. Логин https://fkolesnik.github.io/pf2/signin.html<br>
Вход с морды-лендинга, который будет примерно таким http://fkolesnik.github.io/PF/

2. Рега https://fkolesnik.github.io/pf2/signup.html<br>
Есть 2 стейта - для журналиста и эксперта - меняется только блок добавления СМИ или компании соответственно

3. Раздел запросов, он же главная страница приложения https://fkolesnik.github.io/pf2/<br>
-- показывает все запросы на сайте, включая мои или запросы с моими ответами, позволяет группировать запросы (например,
избранное) и подписываться на выборки запросов<br>
-- по дефолту показан раздел для пользователей журналистов и экспертов, см. как выглядит раздел только у журналистов (https://fkolesnik.github.io/pf2/index-jour.html) и только
 экспертов (https://fkolesnik.github.io/pf2/index-expert.html)<br>
-- поиск живой, вот его тестовая версия на реакте https://fkolesnik.github.io/pf3/, + надо учесть доп. фильтры: отрасли и города<br>

4. Нулевые результаты поиска среди текущих запросов, которые были на сайте в прошлом<br>
-- возможна ситуация, что искомые запросы были в прошлом, и мы хотим об этом говорить пользователю, см. https://fkolesnik.github.io/pf2/queries-search-null.html<br>

5. Добавление запроса https://fkolesnik.github.io/pf2/query-new.html<br>
-- публикуется не сразу, уходит сначала на модерацию<br>

6. Запрос, роль - хозяин https://fkolesnik.github.io/pf2/query.html<br>
-- под запросом ответы экспертов, у каждого ответа могут быть комментарии - диалог журналиста-хозяина и эксперта <br>
-- хозяин, помимо прочего, может отклонять или принимать запросы<br>
-- после дедлайна запроса хозяин может опубликовать ссылку на статью, подготовленную с помощью запроса, см. там внизу блок Ссылка на публикацию<br>

7. Запрос, роль - гость https://fkolesnik.github.io/pf2/pitch-new.html<br>
-- заметь, запросы в таком виде доступны не всем, часть информации о запросе и журналисте может быть скрыта, а возможность ответить на запрос заблокирована, зависит от типа аккаунта на сайте<br>

8. Запрос с ответом, роль - хозяин ответа https://fkolesnik.github.io/pf2/pitch.html<br>
-- эксперт ответил на запрос и продолжил переписываться с автором запроса в комменатриях<br>

9. Раздел людей https://fkolesnik.github.io/pf2/people.html<br>
-- показывает всех людей (журов и экспертов) на сайте, мои контакты и друзей (кого я добавил и кто меня добавил соотв.)<br>
-- отдельная фича - группировка людей<br>
-- поиск желательно живой, если возможен такой для 20 тыс. позиций<br>

10. Профиль пользователя <br>
-- пример полного профиля журналиста-эксперта, роль - гость https://fkolesnik.github.io/pf2/profile.html<br>
-- пример профиля журналиста, роль - хозяин https://fkolesnik.github.io/pf2/profile-my.html<br>
-- см. также на последней странице настройку моего профиля и аккаунта в левом сайдбар-меню<br>

11. Профиль эксперта-спикера https://fkolesnik.github.io/pf2/profile-speaker.html<br>
-- еще один статус пользователя наряду с журналистом и экспертом<br>
-- эксперта-спикера может завести простой эксперт, с тем чтобы потом от лица перовго отвечать журналистам<br>
-- страницу создания профиля эксперта-спикера см. в профиле простого эксперта, пункт "Мои эксперты" в левом меню https://fkolesnik.github.io/pf2/profile-my-speaker.html#profile-set-speakers<br>
-- эксперт-спикер в результатах поиска - см. https://fkolesnik.github.io/pf2/people.html - первый айтем Иван Петров <br>

12. Страница СМИ https://fkolesnik.github.io/pf2/media.html<br>
-- составляется вручную модераторами сайта<br>
-- сми может быть закрыто https://fkolesnik.github.io/pf2/media-closed.html<br>
-- страниц компаний пока нет<br>

13. Раздел релизов https://fkolesnik.github.io/pf2/releases.html<br>
-- пресс-релизы, которые, помимо прочего, показываются в разных разделах в сайдбаре<br>
-- см. также как они добавляются https://fkolesnik.github.io/pf2/release-new.html<br>

14. Разделов чатов<br>
-- собрание всех частов пользователя на сайте<br>
-- не путать чаты и комментарии в цепочке запрос-ответ-комментарии<br>
-- чат можно начать, нажав на соотв. иконку в профиле пользователя, в его карточке в разделе "Люди" или в его быстрой карточке (пример быстрой карточки - https://fkolesnik.github.io/pf2 - нажми на аватар первого запроса), в этом случае внизу страницы открывается модальное окошко с чатом, как в фейсбуке<br>
-- заметь, что не каждый может писать каждому, на сайте есть система прав переписки, зависящая от типа аккаунта<br>
