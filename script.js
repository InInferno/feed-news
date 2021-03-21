const newsArray = [
    {
        'title': 'Заголовок 1',
        'author': 'Автор 1 ',
        'date': 'Дата и время 1',
        'link': 'www.ya.ru'
    },

    {
        'title': 'Заголовок 2',
        'author': 'Автор 2',
        'date': 'Дата и время 2',
        'link': 'Ссылка на подробности 2'
    },

    {
        'title': 'Заголовок 3',
        'author': 'Автор 3',
        'date': 'Дата и время 3',
        'link': 'Ссылка на подробности 3'
    },

    {
        'title': 'Заголовок',
        'author': 'Автор',
        'date': 'Дата и время',
        'link': 'Ссылка на подробности'
    },

    {
        'title': 'Заголовок',
        'author': 'Автор',
        'date': 'Дата и время',
        'link': 'Ссылка на подробности'
    },

    {
        'title': 'Заголовок',
        'author': 'Автор',
        'date': 'Дата и время',
        'link': 'Ссылка на подробности'
    },

    {
        'title': 'Заголовок',
        'author': 'Автор',
        'date': 'Дата и время',
        'link': 'Ссылка на подробности'
    },

    {
        'title': 'Заголовок',
        'author': 'Автор',
        'date': 'Дата и время',
        'link': 'Ссылка на подробности'
    },

    {
        'title': 'Заголовок',
        'author': 'Автор',
        'date': 'Дата и время',
        'link': 'Ссылка на подробности'
    }
]

const page = document.querySelector('.page');

function createNewsFeed() {
    page.insertAdjacentHTML('beforeend', `
        <section class="news-container">
        </section>
        <button class="news-button">
            Лента новостей (${newsArray.length})
        </button>
        `
    );

    const newsButton = document.querySelector('.news-button');
    newsButton.addEventListener('click', () => {
        createNewsList();
        newsButton.style.display = 'none';
    });

}
createNewsFeed();

function createNewsList() {
    const newsContainer = document.querySelector('.news-container');
    newsContainer.insertAdjacentHTML('beforeend', `
    <div class="news-cards"></div>
    <button class="news-button-close">
        Закрыть ленту
    </button>
    `
    );

    const newsCards = document.querySelector('.news-cards');
    newsArray.forEach((item) => {
        newsCards.insertAdjacentHTML('beforeend', `
        <div class="news-card">
            <h2 class="news-card__title">${item.title}</h2>
            <p class="news-card__autor">${item.author}</p>
            <p class="news-card__date">${item.date}</p>
            <a class="news-card__link" href="${item.link}">Ссылка на подробности</a>
            <p class="news-card__status">Статус (прочитано или нет)</p>
        </div>
        `
        );
    })

    const newsCardsContainer = document.querySelector('.news-cards');
    const newsButtonClose = document.querySelector('.news-button-close');
    const newsButton = document.querySelector('.news-button');

    const closeWidget = () => {
        newsButtonClose.removeEventListener('click', closeWidget);
        newsCardsContainer.remove();
        newsButtonClose.remove();
        newsButton.style.display = 'flex';
    }

    newsButtonClose.addEventListener('click', closeWidget);
}
