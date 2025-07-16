const data = {
  "dishes": [
    // Бургеры
    {
      "dish_id": 1,
      "dish_type": 1,
      "dish_name": "Мясная бомба",
      "dish_price": 689,
      "dish_description": "Приготовьтесь к взрыву вкуса! Этот бургер – настоящий мясной рай.  Огромная, сочная рубленая котлета из отборной говядины тает во рту, а свежие, хрустящие листья салата добавляют приятную нотку свежести.  Идеальный выбор для тех, кто ценит настоящее мясо и не боится больших порций!  Сдобрен фирменным горчичным соусом.",
      "dish_structure": "Пшеничная булочка бриошь, Котлета из мраморной говядины Black Angus, Красный лук, Листья салата Айсберг, Соус горчичный с медом",
      "dish_parameters": {
        "dish_gram": 520,
        "dish_kkal": 430
      },
      "urlToImage": "/images/catalog/burgers/meal-bomb.png"
    },
    {
      "dish_id": 2,
      "dish_type": 1,
      "dish_name": "Сытный",
      "dish_price": 549,
      "dish_description": "Ищете быстрый и вкусный перекус?  Этот бургер – то, что вам нужно!  Сочная куриная котлета, обжаренная в хрустящей золотистой панировке, идеально сочетается со свежими овощами и нежным, сливочным соусом Цезарь.  Почувствуйте прилив энергии и утолите голод с этим аппетитным бургером.",
      "dish_structure": "Пшеничная булочка с кунжутом, Куриная котлета в панировке панко, Свежий помидор, Маринованный огурец, Соус Цезарь с пармезаном",
      "dish_parameters": {
        "dish_gram": 480,
        "dish_kkal": 390
      },
      "urlToImage": "/images/catalog/burgers/nothungry.png"
    },
    {
      "dish_id": 3,
      "dish_type": 1,
      "dish_name": "Вечная класика",
      "dish_price": 499,
      "dish_description": "Альтернатива для тех, кто выбирает растительную пищу!  Этот бургер – настоящая находка для вегетарианцев и всех, кто хочет попробовать что-то новое.  Сочная котлета из нута с добавлением специй, нежный авокадо, хрустящие ростки сои и пикантный соус тхина создают неповторимую гармонию вкуса и текстур.",
      "dish_structure": "Булочка для бургера из цельнозерновой муки, Нутовая котлета с куркумой и кориандром, Спелый авокадо, Ростки сои, Соус Тхина с лимонным соком",
      "dish_parameters": {
        "dish_gram": 450,
        "dish_kkal": 350
      },
      "urlToImage": "/images/catalog/burgers/classic.png"
    },
    {
      "dish_id": 4,
      "dish_type": 1,
      "dish_name": "Супер сырный",
      "dish_price": 899,
      "dish_description": "Внимание, любители сыра!  Этот бургер – для вас!  Две сочные говяжьи котлеты, щедро покрытые расплавленным сыром чеддер, создают невероятно насыщенный и аппетитный вкус.  Пикантный соус барбекю добавляет дымные нотки, а маринованные огурчики – приятную кислинку.  Готовьтесь к настоящему сырному удовольствию!",
      "dish_structure": "Булочка для бургера с кунжутом, Двойная говяжья котлета, Сыр чеддер (двойной слой), Маринованные огурчики, Соус Барбекю с копченым перцем",
      "dish_parameters": {
        "dish_gram": 650,
        "dish_kkal": 680
      },
      "urlToImage": "/images/catalog/burgers/superchees.png"
    },
    {
      "dish_id": 5,
      "dish_type": 1,
      "dish_name": "Итальянский",
      "dish_price": 749,
      "dish_description": "Классический чизбургер в итальянском стиле!  Сочная говяжья котлета, покрытая расплавленным сыром моцарелла и пармезан, дополняется свежими ломтиками помидора и хрустящим луком.  Ароматные травы и классическое сочетание кетчупа и горчицы придают этому бургеру неповторимый итальянский шарм.",
      "dish_structure": "Булочка для бургера с травами, Говяжья котлета, Сыр моцарелла, Сыр пармезан, Свежий помидор, Красный лук, Кетчуп, Дижонская горчица",
      "dish_parameters": {
        "dish_gram": 550,
        "dish_kkal": 480
      },
      "urlToImage": "/images/catalog/burgers/italiano.png"
    },

    // Закуски
    {
      "dish_id": 6,
      "dish_type": 2,
      "dish_name": "Картошка фри",
      "dish_price": 149,
      "dish_description": "Классика, любимая всеми!  Тонкие ломтики картофеля, обжаренные во фритюре до золотистой хрустящей корочки.  Идеально подходит в качестве гарнира к бургеру, хот-догу или просто как самостоятельная закуска.  Подаётся горячей и с солью.",
      "dish_structure": "Картофель, Растительное масло, Морская соль",
      "dish_parameters": {
        "dish_gram": 150,
        "dish_kkal": 320
      },
      "urlToImage": "/images/catalog/snacks/potato.png"
    },
    {
      "dish_id": 7,
      "dish_type": 2,
      "dish_name": "Куриные наггетсы (6 шт)",
      "dish_price": 299,
      "dish_description": "Аппетитные кусочки куриного филе, обжаренные в хрустящей панировке до золотистого цвета.  Нежное и сочное мясо внутри, хрустящая корочка снаружи – идеальное сочетание для любителей куриных закусок. Подаются с соусом на выбор.",
      "dish_structure": "Куриное филе, Панировочные сухари, Смесь специй (паприка, чеснок, лук)",
      "dish_parameters": {
        "dish_gram": 180,
        "dish_kkal": 400
      },
      "urlToImage": "/images/catalog/snacks/nagets.png"
    },
    {
      "dish_id": 8,
      "dish_type": 2,
      "dish_name": "Начос",
      "dish_price": 349,
      "dish_description": "Хрустящие кукурузные чипсы начос, щедро покрытые расплавленным сыром моцарелла и приправленные острыми специями.  Идеальная закуска для компании друзей или для просмотра фильма.  Подаются с соусом сальса или гуакамоле на выбор.",
      "dish_structure": "Кукурузные чипсы начос, Сыр моцарелла, Панировочные сухари, Перец чили, Соль",
      "dish_parameters": {
        "dish_gram": 160,
        "dish_kkal": 380
      },
      "urlToImage": "/images/catalog/snacks/nachos.png"
    },
    {
      "dish_id": 9,
      "dish_type": 2,
      "dish_name": "Луковые кольца",
      "dish_price": 249,
      "dish_description": "Сочные кольца лука, обжаренные в золотистой хрустящей панировке.  Прекрасная закуска с нежным сладковатым вкусом лука и аппетитной хрустящей корочкой.  Подаются горячими с соусом на выбор.",
      "dish_structure": "Лук, Панировочные сухари, Мука, Яйцо, Специи",
      "dish_parameters": {
        "dish_gram": 170,
        "dish_kkal": 350
      },
      "urlToImage": "/images/catalog/snacks/circles.png"
    },
    {
      "dish_id": 10,
      "dish_type": 2,
      "dish_name": "Крылья BBQ",
      "dish_price": 399,
      "dish_description": "Аппетитные куриные крылья, обжаренные до золотистой корочки и щедро покрытые пикантным соусом BBQ.  Сочное мясо, сладковато-дымный вкус и легкая острота – идеальное сочетание для любителей крылышек.  Подаются горячими.",
      "dish_structure": "Куриные крылья, Соус BBQ (томатная паста, уксус, сахар, специи), Специи",
      "dish_parameters": {
        "dish_gram": 250,
        "dish_kkal": 450
      },
      "urlToImage": "/images/catalog/snacks/chicken.png"
    },

    // Хот-доги
    {
      "dish_id": 11,
      "dish_type": 3,
      "dish_name": "Классический хот-дог",
      "dish_price": 249,
      "dish_description": "Простой и вкусный хот-дог для тех, кто ценит классику.  Сочная сосиска в мягкой булочке, приправленная кетчупом и горчицей – идеальный перекус на ходу.  Быстро, удобно и всегда вкусно!",
      "dish_structure": "Булочка для хот-дога, Сосиска из говядины и свинины, Кетчуп, Американская горчица",
      "dish_parameters": {
        "dish_gram": 150,
        "dish_kkal": 300
      },
      "urlToImage": "/images/catalog/hot-dogs/classic-hot-dog.png"
    },
    {
      "dish_id": 12,
      "dish_type": 3,
      "dish_name": "Домашний хот-дог",
      "dish_price": 349,
      "dish_description": "Почувствуйте вкус домашнего уюта с этим аппетитным хот-догом.  Сочная сосиска в мягкой булочке, приправленная горчицей, свежим луком, сладким relish, ароматным укропом и сочным помидором.  Настоящий взрыв вкусов в каждом укусе!",
      "dish_structure": "Булочка для хот-дога, Сосиска, Дижонская горчица, Мелко нарезанный репчатый лук, Сладкий огуречный relish, Свежий укроп, Свежий помидор",
      "dish_parameters": {
        "dish_gram": 200,
        "dish_kkal": 350
      },
      "urlToImage": "/images/catalog/hot-dogs/home-hot-dog.png"
    },
    {
      "dish_id": 13,
      "dish_type": 3,
      "dish_name": "Хот-дог с беконом и сыром",
      "dish_price": 399,
      "dish_description": "Идеальное сочетание вкусов в одном хот-доге!  Сочная сосиска, хрустящий бекон и расплавленный сыр чеддер – что может быть лучше?  Добавьте к этому хрустящий лук фри и получите настоящий кулинарный шедевр!",
      "dish_structure": "Булочка для хот-дога, Сосиска, Обжаренный бекон, Сыр чеддер, Хрустящий лук фри",
      "dish_parameters": {
        "dish_gram": 220,
        "dish_kkal": 400
      },
      "urlToImage": "/images/catalog/hot-dogs/bekon-hot-dog.png"
    },
    {
      "dish_id": 14,
      "dish_type": 3,
      "dish_name": "Жгучий хот-дог",
      "dish_price": 299,
      "dish_description": "Для тех, кто любит погорячее!  Этот хот-дог – настоящий вызов для ваших вкусовых рецепторов.  Сочная сосиска в мягкой булочке, щедро приправленная острым соусом чили и пикантными ломтиками халапеньо.  Будьте осторожны, это действительно остро!",
      "dish_structure": "Булочка для хот-дога, Сосиска, Острый соус чили с кайенским перцем, Маринованные халапеньо",
      "dish_parameters": {
        "dish_gram": 180,
        "dish_kkal": 330
      },
      "urlToImage": "/images/catalog/hot-dogs/spicy-hot-dog.png"
    },
    {
      "dish_id": 15,
      "dish_type": 3,
      "dish_name": "Датский хот-дог",
      "dish_price": 329,
      "dish_description": "Попробуйте настоящий датский хот-дог!  Сочная сосиска в мягкой булочке, приправленная специальным датским соусом, хрустящим жареным луком и маринованным огурцом.  Неповторимый вкус, который вы точно запомните!",
      "dish_structure": "Булочка для хот-дога, Сосиска, Датский соус (майонез, горчица, специи), Хрустящий жареный лук, Маринованный огурец",
      "dish_parameters": {
        "dish_gram": 210,
        "dish_kkal": 370
      },
      "urlToImage": "/images/catalog/hot-dogs/dats-hot-dog.png"
    },

    // Комбо
    {
      "dish_id": 16,
      "dish_type": 4,
      "dish_name": "Комбо №1",
      "dish_price": 799,
      "dish_description": "Идеальный вариант для одного!  Сочный бургер на выбор, хрустящий картофель фри и освежающий напиток.  Всё, что нужно для быстрого и вкусного обеда или ужина.",
      "dish_structure": "Бургер на выбор (из категории Бургеры), Картофель фри (маленькая порция), Напиток на выбор (кола, фанта, спрайт, сок)",
      "dish_parameters": {
        "dish_gram": 600,
        "dish_kkal": 900
      },
      "urlToImage": "/images/catalog/combos/combo1.png"
    },
    {
      "dish_id": 17,
      "dish_type": 4,
      "dish_name": "Комбо №2",
      "dish_price": 849,
      "dish_description": "Насыщенный обед или ужин для тех, кто любит хот-доги!  Аппетитный хот-дог на выбор, картофель по-деревенски с ароматными травами и сок на выбор.",
      "dish_structure": "Хот-дог на выбор (из категории Хот-доги), Картофель по-деревенски с розмари, Сок на выбор (яблочный, апельсиновый, томатный)",
      "dish_parameters": {
        "dish_gram": 550,
        "dish_kkal": 850
      },
      "urlToImage": "/images/catalog/combos/combo2.png"
    },
    {
      "dish_id": 18,
      "dish_type": 4,
      "dish_name": "Комбо для друзей",
      "dish_price": 1499,
      "dish_description": "Идеальный набор для большой компании!  Два бургера на выбор, большая порция хрустящего картофеля фри, аппетитные наггетсы и два освежающих напитка.  Всё, что нужно для веселого вечера с друзьями.",
      "dish_structure": "Два бургера на выбор (из категории Бургеры), Большая картошка фри, Наггетсы (12 штук), Два напитка на выбор (кола, фанта, спрайт, сок)",
      "dish_parameters": {
        "dish_gram": 1200,
        "dish_kkal": 1800
      },
      "urlToImage": "/images/catalog/combos/combo3.png"
    },
    {
      "dish_id": 19,
      "dish_type": 4,
      "dish_name": "Счастливый ребенок",
      "dish_price": 649,
      "dish_description": "Специальное комбо для самых маленьких!  Детский бургер с нежной котлетой, маленькая порция картофеля фри и вкусный молочный коктейль на выбор.  Подарите ребенку радость!",
      "dish_structure": "Детский бургер (мини-бургер с куриной или говяжьей котлетой), Маленькая картошка фри, Молочный коктейль на выбор (шоколадный, ванильный, клубничный)",
      "dish_parameters": {
        "dish_gram": 400,
        "dish_kkal": 700
      },
      "urlToImage": "/images/catalog/combos/combo4.png"
    },
    {
      "dish_id": 20,
      "dish_type": 4,
      "dish_name": "Комбо на двоих",
      "dish_price": 1299,
      "dish_description": "Романтический ужин или просто вкусный вечер для двоих!  Ароматная пицца на выбор, свежий салат Цезарь с курицей и два напитка.  Насладитесь вкусной едой и приятной компанией.",
      "dish_structure": "Пицца на выбор (из категории Пицца, диаметр 30 см), Салат Цезарь с курицей, Два напитка на выбор (кола, фанта, спрайт, сок, пиво)",
      "dish_parameters": {
        "dish_gram": 900,
        "dish_kkal": 1500
      },
      "urlToImage": "/images/catalog/combos/combo5.png"
    },

    // Шаурма
    {
      "dish_id": 21,
      "dish_type": 5,
      "dish_name": "Классическая шаурма",
      "dish_price": 399,
      "dish_description": "Классическая шаурма - это сочное обжаренное куриное мясо, свежие овощи, такие как хрустящая капуста, морковь по-корейски, свежие огурцы и помидоры, заправленные фирменным соусом и завернутые в тонкий лаваш. Сытный и вкусный перекус на любой случай.",
      "dish_structure": "Тонкий лаваш, Обжаренное куриное мясо, Капуста, Морковь по-корейски, Свежий огурец, Свежий помидор, Фирменный соус (на основе майонеза, чеснока и специй)",
      "dish_parameters": {
        "dish_gram": 350,
        "dish_kkal": 650
      },
      "urlToImage": "/images/catalog/shwarmas/classic-shwarma.png"
    },
    {
      "dish_id": 22,
      "dish_type": 5,
      "dish_name": "Шаурма по-мексикански",
      "dish_price": 449,
      "dish_description": "Острая и пикантная шаурма с мексиканскими мотивами. Сочное куриное мясо, острый перец халапеньо, сладкая кукуруза, фасоль и огненный соус сальса, завернутые в лаваш. Для тех, кто любит поострее!",
      "dish_structure": "Тонкий лаваш, Обжаренное куриное мясо, Перец халапеньо, Консервированная кукуруза, Красная фасоль, Соус сальса",
      "dish_parameters": {
        "dish_gram": 380,
        "dish_kkal": 700
      },
      "urlToImage": "/images/catalog/shwarmas/mexico-shwarma.png"
    },
    {
      "dish_id": 23,
      "dish_type": 5,
      "dish_name": "Вегетарианская шаурма",
      "dish_price": 349,
      "dish_description": "Шаурма для тех, кто не ест мясо. Вместо мяса - сочные шарики фалафеля, свежие овощи и пикантный соус. Легкий и полезный перекус.",
      "dish_structure": "Тонкий лаваш, Фалафель, Капуста, Морковь по-корейски, Свежий огурец, Свежий помидор, Соус (на основе тахини)",
      "dish_parameters": {
        "dish_gram": 320,
        "dish_kkal": 580
      },
      "urlToImage": "/images/catalog/shwarmas/vegeter-shwarma.png"
    },
    {
      "dish_id": 24,
      "dish_type": 5,
      "dish_name": "Шаурма с говядиной",
      "dish_price": 499,
      "dish_description": "Шаурма с сочной говядиной, маринованным луком и острым соусом. Сытный и ароматный вариант для любителей мяса.",
      "dish_structure": "Тонкий лаваш, Обжаренная говядина, Маринованный красный лук, Капуста, Острый соус (на основе чили)",
      "dish_parameters": {
        "dish_gram": 400,
        "dish_kkal": 750
      },
      "urlToImage": "/images/catalog/shwarmas/govyad-shwarma.png"
    },
    {
      "dish_id": 25,
      "dish_type": 5,
      "dish_name": "Сырная шаурма",
      "dish_price": 429,
      "dish_description": "Сочная шаурма с добавлением двух видов сыра - моцареллы и чеддера. Куриное мясо, овощи и сырный микс, заправленные соусом и завернутые в лаваш. Отличный выбор для любителей сыра!",
      "dish_structure": "Тонкий лаваш, Обжаренное куриное мясо, Капуста, Морковь по-корейски, Сыр Моцарелла, Сыр Чеддер, Фирменный соус",
      "dish_parameters": {
        "dish_gram": 370,
        "dish_kkal": 720
      },
      "urlToImage": "/images/catalog/shwarmas/chees-shwarma.png"
    },

    // Пицца
    {
      "dish_id": 26,
      "dish_type": 6,
      "dish_name": "Пепперони",
      "dish_price": 799,
      "dish_description": "Классическая американская пицца с острой колбасой пепперони. Традиционный томатный соус, много сыра моцарелла и ароматная пепперони - идеальное сочетание для любителей пиццы.",
      "dish_structure": "Тонкое тесто, Томатный соус, Сыр Моцарелла, Колбаса Пепперони",
      "dish_parameters": {
        "dish_gram": 500,
        "dish_kkal": 1200
      },
      "urlToImage": "/images/catalog/pizzas/peperony-pizza.png"
    },
    {
      "dish_id": 27,
      "dish_type": 6,
      "dish_name": "Маргарита",
      "dish_price": 699,
      "dish_description": "Простая, но изысканная итальянская пицца с томатами и моцареллой. Томатный соус, свежий базилик и нежный сыр - ничего лишнего, только чистый вкус.",
      "dish_structure": "Тонкое тесто, Томатный соус, Сыр Моцарелла, Свежий базилик",
      "dish_parameters": {
        "dish_gram": 450,
        "dish_kkal": 1100
      },
      "urlToImage": "/images/catalog/pizzas/margaritta-pizza.png"
    },
    {
      "dish_id": 28,
      "dish_type": 6,
      "dish_name": "Гавайская",
      "dish_price": 849,
      "dish_description": "Пицца с ветчиной и ананасами - спорное, но любимое многими сочетание. Сладкие ананасы и соленая ветчина создают необычный и запоминающийся вкус.",
      "dish_structure": "Тонкое тесто, Томатный соус, Сыр Моцарелла, Ветчина, Консервированные ананасы",
      "dish_parameters": {
        "dish_gram": 550,
        "dish_kkal": 1300
      },
      "urlToImage": "/images/catalog/pizzas/gavay-pizza.png"
    },
    {
      "dish_id": 29,
      "dish_type": 6,
      "dish_name": "Четыре сыра",
      "dish_price": 899,
      "dish_description": "Пицца для настоящих сырных гурманов. Сыр моцарелла, дорблю, пармезан и чеддер - четыре разных сорта сыра, создающие неповторимую симфонию вкуса.",
      "dish_structure": "Тонкое тесто, Томатный соус, Сыр Моцарелла, Сыр Дорблю, Сыр Пармезан, Сыр Чеддер",
      "dish_parameters": {
        "dish_gram": 520,
        "dish_kkal": 1250
      },
      "urlToImage": "/images/catalog/pizzas/four-chees-pizza.png"
    },
    {
      "dish_id": 30,
      "dish_type": 6,
      "dish_name": "Мясная",
      "dish_price": 949,
      "dish_description": "Пицца для настоящих мясоедов! Пепперони, ветчина и курица на тонком тесте с томатным соусом и моцареллой. Отличный выбор для большой компании.",
      "dish_structure": "Тонкое тесто, Томатный соус, Сыр Моцарелла, Колбаса Пепперони, Ветчина, Куриное филе",
      "dish_parameters": {
        "dish_gram": 600,
        "dish_kkal": 1400
      },
      "urlToImage": "/images/catalog/pizzas/meal-pizza.png"
    },

    // Wok
    {
      "dish_id": 31,
      "dish_type": 7,
      "dish_name": "Удон с курицей",
      "dish_price": 549,
      "dish_description": "Японская лапша удон, обжаренная с нежной курицей и овощами в соевом соусе. Сытное и вкусное блюдо в азиатском стиле.",
      "dish_structure": "Лапша удон, Куриное филе, Перец болгарский, Морковь, Репчатый лук, Соевый соус",
      "dish_parameters": {
        "dish_gram": 400,
        "dish_kkal": 700
      },
      "urlToImage": "/images/catalog/woks/udon-wok.png"
    },
    {
      "dish_id": 32,
      "dish_type": 7,
      "dish_name": "Соба с креветками",
      "dish_price": 599,
      "dish_description": "Гречневая лапша соба с сочными креветками и хрустящими овощами в сладковатом терияки соусе. Легкое и полезное блюдо.",
      "dish_structure": "Лапша соба, Креветки, Брокколи, Цуккини, Соус Терияки",
      "dish_parameters": {
        "dish_gram": 380,
        "dish_kkal": 650
      },
      "urlToImage": "/images/catalog/woks/krevet-wok.png"
    },
    {
      "dish_id": 33,
      "dish_type": 7,
      "dish_name": "Рисовая лапша с тофу",
      "dish_price": 499,
      "dish_description": "Рисовая лапша, обжаренная с тофу и овощами в кисло-сладком соусе. Вегетарианское блюдо с азиатскими нотками.",
      "dish_structure": "Рисовая лапша, Тофу, Морковь, Капуста, Кисло-сладкий соус",
      "dish_parameters": {
        "dish_gram": 350,
        "dish_kkal": 600
      },
      "urlToImage": "/images/catalog/woks/ris-wok.png"
    },
    {
      "dish_id": 34,
      "dish_type": 7,
      "dish_name": "Фунчоза с овощами",
      "dish_price": 449,
      "dish_description": "Стеклянная лапша фунчоза с овощами в остром соусе. Пикантное и ароматное блюдо для любителей острого.",
      "dish_structure": "Фунчоза, Перец чили, Грибы шиитаке, Репчатый лук, Соевый соус",
      "dish_parameters": {
        "dish_gram": 320,
        "dish_kkal": 550
      },
      "urlToImage": "/images/catalog/woks/funchoza-wok.png"
    },
    {
      "dish_id": 35,
      "dish_type": 7,
      "dish_name": "Яичная лапша со свининой",
      "dish_price": 579,
      "dish_description": "Яичная лапша, обжаренная со свининой и овощами в устричном соусе. Сытное и аппетитное блюдо с насыщенным вкусом.",
      "dish_structure": "Яичная лапша, Свинина, Репчатый лук, Морковь, Устричный соус",
      "dish_parameters": {
        "dish_gram": 420,
        "dish_kkal": 720
      },
      "urlToImage": "/images/catalog/woks/egg-wok.png"
    },

    // Десерты
    {
      "dish_id": 36,
      "dish_type": 8,
      "dish_name": "Шоколадный торт",
      "dish_price": 349,
      "dish_description": "Классический шоколадный торт с нежным кремом. Идеальный десерт для любителей шоколада.",
      "dish_structure": "Мука, Какао-порошок, Сахар, Яйца, Сливочный крем (на основе сливочного сыра)",
      "dish_parameters": {
        "dish_gram": 150,
        "dish_kkal": 450
      },
      "urlToImage": "/images/catalog/desserts/tort-dessert.png"
    },
    {
      "dish_id": 37,
      "dish_type": 8,
      "dish_name": "Тирамису",
      "dish_price": 399,
      "dish_description": "Итальянский десерт на основе кофе и сыра маскарпоне. Печенье савоярди, пропитанное кофе, нежный крем из маскарпоне и какао. Легкий и воздушный десерт.",
      "dish_structure": "Печенье Савоярди, Кофе эспрессо, Сыр Маскарпоне, Яйца, Сахарная пудра, Какао-порошок",
      "dish_parameters": {
        "dish_gram": 180,
        "dish_kkal": 500
      },
      "urlToImage": "/images/catalog/desserts/tiramisu-dessert.png"
    },
    {
      "dish_id": 38,
      "dish_type": 8,
      "dish_name": "Чизкейк",
      "dish_price": 379,
      "dish_description": "Нежный чизкейк с ягодным соусом. Песочное тесто, сливочный сыр филадельфия и свежие ягоды. Классический десерт, любимый многими.",
      "dish_structure": "Песочное тесто (мука, сливочное масло, сахар), Сыр Филадельфия, Яйца, Сахар, Ягодный соус (на основе свежих ягод)",
      "dish_parameters": {
        "dish_gram": 160,
        "dish_kkal": 480
      },
      "urlToImage": "/images/catalog/desserts/chizkeyk-dessert.png"
    },
    {
      "dish_id": 39,
      "dish_type": 8,
      "dish_name": "Мороженое",
      "dish_price": 199,
      "dish_description": "Шарик мороженого на выбор. Ванильное, шоколадное, клубничное или фисташковое - выбирайте свой любимый вкус и наслаждайтесь.",
      "dish_structure": "Молоко, Сливки, Сахар, Ароматизатор (в зависимости от выбранного вкуса)",
      "dish_parameters": {
        "dish_gram": 100,
        "dish_kkal": 250
      },
      "urlToImage": "/images/catalog/desserts/ice-cream-dessert.png"
    },
    {
      "dish_id": 40,
      "dish_type": 8,
      "dish_name": "Фруктовый салат",
      "dish_price": 299,
      "dish_description": "Свежий и легкий фруктовый салат с йогуртом. Яблоки, бананы, апельсины и киви - витаминный заряд для вашего организма.",
      "dish_structure": "Яблоки, Бананы, Апельсины, Киви, Натуральный йогурт",
      "dish_parameters": {
        "dish_gram": 200,
        "dish_kkal": 300
      },
      "urlToImage": "/images/catalog/desserts/fruit-salad-dessert.png"
    },

    // Соусы
    {
      "dish_id": 41,
      "dish_type": 9,
      "dish_name": "Кетчуп",
      "dish_price": 49,
      "dish_description": "Классический томатный кетчуп. Идеально подходит к картофелю фри, бургерам и хот-догам.",
      "dish_structure": "Томаты, Сахар, Уксус, Соль, Специи",
      "dish_parameters": {
        "dish_gram": 30,
        "dish_kkal": 40
      },
      "urlToImage": "/images/catalog/sauces/ketchup-sauce.png"
    },
    {
      "dish_id": 42,
      "dish_type": 9,
      "dish_name": "Майонез",
      "dish_price": 59,
      "dish_description": "Классический майонез. Используется в качестве заправки для салатов, соуса для бургеров и многого другого.",
      "dish_structure": "Яичный желток, Растительное масло, Уксус, Горчица, Соль, Сахар",
      "dish_parameters": {
        "dish_gram": 30,
        "dish_kkal": 200
      },
      "urlToImage": "/images/catalog/sauces/mayonez-sauce.png"
    },
    {
      "dish_id": 43,
      "dish_type": 9,
      "dish_name": "Соус Барбекю",
      "dish_price": 79,
      "dish_description": "Сладкий и копченый соус барбекю. Отлично подходит к мясу, особенно к куриным крылышкам и ребрам.",
      "dish_structure": "Томатная паста, Уксус, Сахар, Копченый перец чипотле, Вустерский соус, Специи",
      "dish_parameters": {
        "dish_gram": 30,
        "dish_kkal": 50
      },
      "urlToImage": "/images/catalog/sauces/bbq-sauce.png"
    },
    {
      "dish_id": 44,
      "dish_type": 9,
      "dish_name": "Соус Цезарь",
      "dish_price": 89,
      "dish_description": "Классический соус для салата Цезарь. На основе майонеза, анчоусов, чеснока, лимонного сока и пармезана.",
      "dish_structure": "Майонез, Анчоусы, Чеснок, Лимонный сок, Сыр Пармезан, Дижонская горчица, Оливковое масло",
      "dish_parameters": {
        "dish_gram": 30,
        "dish_kkal": 150
      },
      "urlToImage": "/images/catalog/sauces/cezar-sauce.png"
    },
    {
      "dish_id": 45,
      "dish_type": 9,
      "dish_name": "Острый соус чили",
      "dish_price": 69,
      "dish_description": "Острый соус на основе перца чили. Добавьте немного остроты в ваши любимые блюда.",
      "dish_structure": "Перец чили, Уксус, Сахар, Чеснок, Соль",
      "dish_parameters": {
        "dish_gram": 30,
        "dish_kkal": 30
      },
      "urlToImage": "/images/catalog/sauces/chili-sauce.png"
    }
  ],
  "category": [
    {
      "id": 1,
      "category_name": "Бургеры",
      "category_type": "burger",
      "urlToIcon": "/icons/burger.svg",
    },
    {
      "id": 2,
      "category_name": "Закуски",
      "category_type": "snack",
      "urlToIcon": "/icons/snacks.svg"
    },
    {
      "id": 3,
      "category_name": "Хот-доги",
      "category_type": "hot_dog",
      "urlToIcon": "/icons/hot-dogs.svg"
    },
    {
      "id": 4,
      "category_name": "Комбо",
      "category_type": "combo",
      "urlToIcon": "/icons/pizza.svg"
    },
    {
      "id": 5,
      "category_name": "Шаурма",
      "category_type": "shawarma",
      "urlToIcon": "/icons/shawarma.svg"
    },
    {
      "id": 6,
      "category_name": "Пицца",
      "category_type": "pizza",
      "urlToIcon": "/icons/pizza.svg"
    },
    {
      "id": 7,
      "category_name": "Вок",
      "category_type": "wok",
      "urlToIcon": "/icons/vok.svg"
    },
    {
      "id": 8,
      "category_name": "Дессерты",
      "category_type": "dessert",
      "urlToIcon": "/icons/deserts.svg"
    },
    {
      "id": 9,
      "category_name": "Соусы",
      "category_type": "sauce",
      "urlToIcon": "/icons/sous.svg"
    }
  ]

};

export default data