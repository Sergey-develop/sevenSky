var form = document.querySelector('#form');

form.querySelector('button.send-request').addEventListener('click', function () {
    // Проверяем валидность формы
    if (form.querySelector('*:invalid:required')) {
        // Убираем подсветку валидных
        form.querySelectorAll('*:valid:required').forEach(function (e) {
            e.style.borderBottom = '';
        })
        // Подсвечиваем невалидные обязательные поля
        form.querySelectorAll('*:invalid:required').forEach(function (e) {
            e.style.borderBottom = '2px solid #ce0000';
        })
    } else {

        let urlParams = new URLSearchParams(window.location.search)

        $.ajax({
            url: '/send/sendRequest.php?' + urlParams.toString(),
            method: 'post',
            data: {
                name: form.querySelector('input#name').value,
                email: form.querySelector('input#email').value,
                phone: form.querySelector('input#phone').value,
                city: form.querySelector('input#city').value,
                referrer: document.referrer
            },
            success: function (data) {
                res = JSON.parse(data);
                console.log(res);

                if (res.result) {
                    form.innerHTML = '<h3>Спасибо за проявленный интерес!</h3><p> В ближайшее время менеджер с вами свяжется.</p>';
                } else {
                    form.innerHTML = '<h3 style="color:red">Ошибка в отправке!</h3><p>В ходе отправки данных возникла ошибка. Проверьте правильность заполненных данных и попробуйте снова</p>';
                }
            }
        });

    }
});


let closeButton = document.querySelector('.close-news-modal');
let modal = document.querySelector('.news-modal');
let modalOverlay = document.querySelector('.modal-overlay');
let readButtons = document.querySelectorAll('.news-slider-item a');

function openModal() {
    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
}

closeButton.addEventListener('click', closeModal);
readButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        openModal();
    });
});


let closeButtonRules = document.querySelector('.close-rules-modal');
let modalRules = document.querySelector('.modal-rules');
let readButtonsRules = document.querySelectorAll('.show-rules');

function openModalRules() {
    modalRules.style.display = 'block';
    modalOverlay.style.display = 'block';
}

function closeModalRules() {
    modalRules.style.display = 'none';
    modalOverlay.style.display = 'none';
}

closeButtonRules.addEventListener('click', closeModalRules);
readButtonsRules.forEach(function (button) {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        openModalRules();
    });
});

let closeButtonFeedback = document.querySelector('.close-feedback-modal');
let modalFeedback = document.querySelector('.feedback-modal');
let readButtonsFeedback = document.querySelectorAll('.show-feedback');

function openModalFeedback() {
    modalFeedback.style.display = 'block';
    modalOverlay.style.display = 'block';
}

function closeModalFeedback() {
    modalFeedback.style.display = 'none';
    modalOverlay.style.display = 'none';
}

closeButtonFeedback.addEventListener('click', closeModalFeedback);
readButtonsFeedback.forEach(function (button) {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        openModalFeedback();
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Логика для первого аккордеона (Социальные программы)
    const socialAccordionButtons = document.querySelectorAll('#accordionSocialPrograms .accordion-button');
    const socialImgContainer = document.querySelector('.social-programs-img img');

    socialAccordionButtons.forEach(button => {
        button.addEventListener('click', function () {
            setTimeout(() => {
                const isOpen = button.getAttribute('aria-expanded') === 'true';
                const imgSrc = button.dataset.imgSrc;

                if (isOpen) {
                    socialImgContainer.src = imgSrc;
                }
            }, 150); // Подождем немного, чтобы дать браузеру время обновить aria-expanded
        });
    });

    // Логика для второго аккордеона (Акции)
    const offersAccordionButtons = document.querySelectorAll('#accordionOffers .accordion-button');
    const offersImgContainer = document.querySelector('.offers-img img');
    const defaultImgSrc = offersImgContainer.src;

    offersAccordionButtons.forEach(button => {
        button.addEventListener('click', function () {
            setTimeout(() => {
                const isOpen = button.getAttribute('aria-expanded') === 'true';
                const imgSrc = button.dataset.imgSrc;

                if (isOpen) {
                    offersImgContainer.src = imgSrc;
                } else {
                    offersImgContainer.src = defaultImgSrc;
                }
            }, 150); // Подождем немного, чтобы дать браузеру время обновить aria-expanded
        });
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const newsData = [
        {
            id: 1,
            title: "Возведение каркаса - 54 участок",
            date: "01.09.2022",
            content: `Завершены работы по сборке каркаса дома по технологии Post&Beam на участке 54.

Эта технология не теряет свою популярность, а все потому, что стоечно-балочные конструкции, возведенных по этой технологии, отличаются высокой прочностью и позволяют создавать дома самых оригинальных форм.
Наши зодчии @kedrovich_altay знают все об этой технологии и выполнили множество успешных проектов!`,
            contact: "Узнать все подробности о покупке дома и участка вы можете по телефону: 8 (800) 775-60-07"
        },
        {
            id: 2,
            title: "Завершены работы по сборке сруба бани - участок 77",
            date: "10.08.2022",
            content: `Завершены работы по сборке сруба бани из лиственницы для Владимира на участке 77.

Смола лиственницы содержит в разы больше эфирных масел, чем другие породы, поэтому пар в бане всегда ароматнее и целебнее. Эта древесина обладает высоким уровнем влагостойкости, яркий пример в доказательство – многовековая практика строительства надводных домов в Венеции на сваях из альпийской лиственницы.

А ещё у лиственницы оптимальная теплопроводность, превышающая показатели сосны на 30%.`,
            contact: "Участок Вашей мечты уже ждёт Вас.  Подробнее по телефону 8 (800) 775-60-07"
        },
        {
            id: 3,
            title: "Кровельные работы - участок 78",
            date: "24.07.2022",
            content: `Завершены кровельные работы на доме Юрия на участке 78. Финишным материалом кровли была выбрана металлочерепица.

У металлочерепице множество достоинств. Вот основные:

- Долгий срок службы. Обычно он составляет от 50 лет и более.

- Может применяться в любом климате, температурный диапазон использования - от минус 50 до плюс 70.

- Металлочерепица не боится температурный скачков, а значит работать с ней можно в любое время года.

- Материал очень лёгкий и это позволяет укладывать металлочерепицу даже на обрешетку и применять для покрытия домов с легким фундаментом. Легкость материала также облегчает и работу с ним.

- Разнообразие внешнего вида. Сегодня можно найти покрытие любого цвета, формы, размера.

- По соотношению цена-качество это один из лучших кровельных материалов, доступных для любого бюджета.

- Важным плюсом металлочерепицы является ее высокая стойкость к возгоранию.

- Большое преимущество металлочерепица имеет перед другими кровельными материалами в скорости монтажа.

Металлочерепица идеально подходит для домов на Седьмом небе`,
            contact: "Узнать подробнее о покупке участка и строительстве дома на Седьмом небе можно по телефону 8 (800) 775-60-07"
        },
        {
            id: 4,
            title: "Возведение каркаса - 103 участок",
            date: "10.09.2022",
            content: `На Седьмом небе работа идёт полным ходом.

На 103 участке приступили к возведению каркаса.

Для возведения дома мечты важно учесть каждую мелочь. Огромную роль играют материалы и технология строительства, а также профессионализм исполнителей.

Все это определяет, насколько уютным и комфортным будет Ваш дом.

@kedrovich_altay - настоящие профессионалы. Каждый дом, возведенный ими, уникален и все в нем просчитано до мельчайших деталей `,
            contact: "На все вопросы о строительстве или покупке участка ответим по телефону 8 (800) 775-60-07"
        },
        {
            id: 5,
            title: "Строительство фундамента - участок 106",
            date: "03.10.2022",
            content: `Уважаемые клиенты!

Мы развиваем инфраструктуру внутри поселка, чтобы у вас был доступ ко всему необходимому.

Продолжаются работы по устройству дорог в нашем эко-поселке. Мы прокладываем внутрепоселковые дороги, а также совершенствуем дороги к нашему поселку.

Мы точно знаем, что скоро путь к своему дому на Седьмом небе будет максимально комфортным и безопасным.`,
            contact: "Узнать подробнее о приобретении участка вы можете по телефону 8 (800) 775-60-07"
        },
        {
            id: 6,
            title: "Дорога на Седьмое небо",
            date: "15.09.2022",
            content: `Уважаемые клиенты!

Сейчас дорога только строится, до конца года планируют сделать качественную грунтовку и частично заасфальтировать.

Важно! До окончания строительства новой дороги проехать на Седьмое небо можно только на внедорожнике. Также владельцы участков и гости посёлка всегда могут воспользоваться нашим трансфером - это новые, комфортные внедорожники с кондиционером. Машины ходят на Седьмое небо ежедневно.`,
            contact: ""
        },
        {
            id: 7,
            title: "Продолжаются работы по строительству внутрипоселковых дорог",
            date: "02.10.2023",
            content: `Уважаемые клиенты!

Мы развиваем инфраструктуру внутри поселка, чтобы у вас был доступ ко всему необходимому.

Продолжаются работы по устройству дорог в нашем эко-поселке. Мы не только прокладываем внутрепоселковые дороги, но еще совершенствуем дороги к нашему поселку.

Мы точно знаем, что скоро путь к своему дому на Седьмом небе будет максимально комфортным и безопасным.`,
            contact: "Узнать подробнее о приобретении участка по телефону 8 (800) 775-60-07"
        },
        {
            id: 8,
            title: "Установка ЛЭП",
            date: "20.09.2022",
            content: `Уважаемые клиенты!
Продолжаются работы по установке ЛЭП по территории посёлка. В скором будущем территория поселка будет электрифицирована в полном объеме, в соответствии со всеми нормативами.`,
            contact: ""
        },
        {
            id: 9,
            title: "Продолжаются работы по бурению скважин",
            date: "27.09.2023",
            content: `Уважаемые клиенты!
В эко-поселке Седьмое Небо продолжаются работы по бурению скважин. Вода чистая и прозрачная даже без механической очистки не даёт осадка. Главное - невероятно вкусная!`,
            contact: ""
        },
        {
            id: 10,
            title: "Продолжаются работы по строительству внутрипоселковых дорог",
            date: "02.10.2023",
            content: `Уважаемые клиенты!

Мы развиваем инфраструктуру внутри поселка, чтобы у вас был доступ ко всему необходимому.

Продолжаются работы по устройству дорог в нашем эко-поселке. Мы не только прокладываем внутрепоселковые дороги, но еще совершенствуем дороги к нашему поселку.

Мы точно знаем, что скоро путь к своему дому на Седьмом небе будет максимально комфортным и безопасным.`,
            contact: "Узнать подробнее о приобретении участка по телефону 8 (800) 775-60-07"
        },
        {
            id: 11,
            title: "Мы в телеграм",
            date: "01.11.2023",
            content: `Уважаемые клиенты!

Мы запустили наш официальный Telegram-канал.

Теперь вы можете быть в курсе самых актуальных новостей нашей компании в самом удобном и приватном мессенджере в мире. На данном канале мы будем публиковать самую актуальную информацию о нашей компании: новости, акции, информацию о свободных участках и многое другое.

Подписывайтесь, чтобы ничего не пропустить!`,
            contact: "Ссылка на наш Telegram-канал: sedmoeneboaltai"
        },
        {
            id: 12,
            title: "Устройство подъездных дорог к эко-поселку Седьмое небо",
            date: "06.11.2022",
            content: `Уважаемые клиенты!

Полным ходом ведутся работы по строительству новой дороги к эко-посёлку Седьмое небо со стороны с. Урлу-Аспак `,
            contact: "Узнать подробнее о приобретении участка и постройки дома вы можете по телефону 8 (800) 775-60-07"
        },
    ];

    const modal = document.querySelector('.news-modal');
    const backdrop = document.querySelector('.news-modal-backdrop');
    const modalTitle = modal.querySelector('.news-modal-title');
    const modalDate = modal.querySelector('.news-modal-date');
    const modalContent = modal.querySelector('.news-modal-content');
    const modalContact = modal.querySelector('.news-modal-contact');
    const closeModal = modal.querySelector('.close-news-modal');

    document.querySelectorAll('.open-news-modal').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const newsId = parseInt(this.closest('.news-slider-item').getAttribute('data-news-id'));
            const news = newsData.find(item => item.id === newsId);

            if (news) {
                modalTitle.textContent = news.title;
                modalDate.textContent = news.date;
                modalContent.textContent = news.content;
                modalContact.textContent = news.contact;
                modal.style.display = 'block';
                backdrop.style.display = 'block';
            }
        });
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
        backdrop.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
        if (e.target === backdrop) {
            modal.style.display = 'none';
            backdrop.style.display = 'none';
        }
    });
});

function mobileOnlySlider() {
    $('.highlights-slider').slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: true,
                    prevArrow: '<button type="button" class="custom-prev"><img src="icons/Frame.png" alt="Previous" /></button>',
                    nextArrow: '<button type="button" class="custom-next"><img src="icons/Frame.png" alt="Next" /></button>',
                }
            }
        ]
    });

    $('.activities-slider').slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: true,
                    prevArrow: '<button type="button" class="custom-prev"><img src="icons/Frame.png" alt="Previous" /></button>',
                    nextArrow: '<button type="button" class="custom-next"><img src="icons/Frame.png" alt="Next" /></button>',
                }
            }
        ]
    });

    $('.rules-slider').slick({
        dots: false,
        infinite: false,
        autoplaySpeed: 3000,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    prevArrow: '<button type="button" class="custom-prev"><img src="icons/Frame.png" alt="Previous" /></button>',
                    nextArrow: '<button type="button" class="custom-next"><img src="icons/Frame.png" alt="Next" /></button>',
                }
            },
        ]
    });
}


if (window.innerWidth < 768) {
    mobileOnlySlider();
}

$(window).resize(function (e) {
    if (window.innerWidth < 580) {
        if (!$('.highlights-slider').hasClass('slick-initialized')) {
            mobileOnlySlider();
        }

    } else {
        if ($('.highlights-slider').hasClass('slick-initialized')) {
            $('.activities-slider').slick('unslick');
            $('.rules-slider').slick('unslick');
        }
    }
});


$('.team-slider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="custom-prev"><img src="icons/Frame.png" alt="Previous" /></button>',
    nextArrow: '<button type="button" class="custom-next"><img src="icons/Frame.png" alt="Next" /></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
$('.media-slider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="custom-prev"><img src="icons/Frame.png" alt="Previous" /></button>',
    nextArrow: '<button type="button" class="custom-next"><img src="icons/Frame.png" alt="Next" /></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});
$('.reviews-slider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="custom-prev"><img src="icons/Frame.png" alt="Previous" /></button>',
    nextArrow: '<button type="button" class="custom-next"><img src="icons/Frame.png" alt="Next" /></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
$('.news-slider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="custom-prev"><img src="icons/Frame.png" alt="Previous" /></button>',
    nextArrow: '<button type="button" class="custom-next"><img src="icons/Frame.png" alt="Next" /></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
$('.instagram-slider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="custom-prev"><img src="icons/Frame.png" alt="Previous" /></button>',
    nextArrow: '<button type="button" class="custom-next"><img src="icons/Frame.png" alt="Next" /></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});