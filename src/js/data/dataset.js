const data = {
  "dishes": [
    // Бургеры
    {
      "dish_id": 1,
      "dish_type": 1,
      "dish_name": "Мясная бомба",
      "dish_price": 689,
      "dish_description": "Супер мясное наслаждение! Большая рубленая котлета из свежего говяжьего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.",
      "dish_structure": "Пшеничная булочка, Котлета из говядины, Красный лук, Листья салата, Соус горчичный",
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
      "dish_description": "Сочная куриная котлета в хрустящей панировке, свежие овощи и нежный соус - идеальный перекус!",
      "dish_structure": "Пшеничная булочка, Куриная котлета, Помидор, Маринованный огурец, Соус Цезарь",
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
      "dish_description": "Для тех, кто выбирает растительную пищу!  Бургер с котлетой из нута, свежими овощами и пикантным соусом.",
      "dish_structure": "Булочка для бургера, Нутовая котлета, Авокадо, Ростки сои, Соус Тхина",
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
      "dish_description": "Двойная порция мяса для настоящих гурманов!  Две сочные котлеты, сыр чеддер и пикантный соус барбекю.",
      "dish_structure": "Булочка для бургера, Двойная говяжья котлета, Сыр чеддер, Маринованные огурчики, Соус Барбекю",
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
      "dish_description": "Классический чизбургер с сочной котлетой, расплавленным сыром и свежими овощами.",
      "dish_structure": "Булочка для бургера, Говяжья котлета, Сыр, Помидор, Лук, Кетчуп, Горчица",
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
      "dish_description": "Классический картофель фри, обжаренный до золотистой корочки.",
      "dish_structure": "Картофель, Растительное масло, Соль",
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
      "dish_description": "Нежные кусочки куриного филе в хрустящей панировке.",
      "dish_structure": "Куриное филе, Панировочные сухари, Специи",
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
      "dish_description": "Хрустящие треугольники под острой оболочкой. Не стандартное представление стандартных чипс!",
      "dish_structure": "Сыр моцарелла, Панировочные сухари, перец, соль",
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
      "dish_description": "Хрустящие кольца лука в золотистой панировке.",
      "dish_structure": "Лук, Панировочные сухари, Мука, Яйцо",
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
      "dish_description": "Сочные куриные крылья в пикантном соусе BBQ.",
      "dish_structure": "Куриные крылья, Соус BBQ, Специи",
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
      "dish_description": "Сочная сосиска в мягкой булочке с кетчупом и горчицей.",
      "dish_structure": "Булочка для хот-дога, Сосиска, Кетчуп, Горчица",
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
      "dish_description": "Хот-дог с горчицей, луком, сладким relish, укропом и помидором.",
      "dish_structure": "Булочка для хот-дога, Сосиска, Горчица, Лук, Relish, Укроп, Помидор",
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
      "dish_description": "Хот-дог с хрустящим беконом и расплавленным сыром.",
      "dish_structure": "Булочка для хот-дога, Сосиска, Бекон, Сыр, Лук фри",
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
      "dish_description": "Хот-дог с острым соусом чили и халапеньо.",
      "dish_structure": "Булочка для хот-дога, Сосиска, Соус чили, Халапеньо",
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
      "dish_description": "Хот-дог с датским соусом, хрустящим луком и маринованным огурцом.",
      "dish_structure": "Булочка для хот-дога, Сосиска, Датский соус, Хрустящий лук, Маринованный огурец",
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
      "dish_description": "Бургер, картофель фри и напиток на выбор.",
      "dish_structure": "Бургер, Картофель фри, Напиток",
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
      "dish_description": "Хот-дог, картофель по-деревенски и сок.",
      "dish_structure": "Хот-дог, Картофель по-деревенски, Сок",
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
      "dish_description": "Два бургера, большая картошка фри, наггетсы и два напитка.",
      "dish_structure": "Два бургера, Большая картошка фри, Наггетсы, Два напитка",
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
      "dish_description": "Детский бургер, маленькая картошка фри и молочный коктейль.",
      "dish_structure": "Детский бургер, Маленькая картошка фри, Молочный коктейль",
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
      "dish_description": "Пицца, салат Цезарь и два напитка.",
      "dish_structure": "Пицца, Салат Цезарь, Два напитка",
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
      "dish_description": "Сочное мясо, свежие овощи и пикантный соус в лаваше.",
      "dish_structure": "Лаваш, Курица, Капуста, Морковь, Огурец, Помидор, Соус",
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
      "dish_description": "Острая шаурма с халапеньо и соусом сальса.",
      "dish_structure": "Лаваш, Курица, Перец халапеньо, Кукуруза, Фасоль, Соус сальса",
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
      "dish_description": "Шаурма с овощами и фалафелем.",
      "dish_structure": "Лаваш, Фалафель, Капуста, Морковь, Огурец, Помидор, Соус",
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
      "dish_description": "Шаурма с сочной говядиной, маринованным луком и острым соусом.",
      "dish_structure": "Лаваш, Говядина, Маринованный лук, Капуста, Соус",
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
      "dish_description": "Шаурма с добавлением сыра моцарелла и чеддер.",
      "dish_structure": "Лаваш, Курица, Капуста, Морковь, Сыр Моцарелла, Сыр Чеддер, Соус",
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
      "dish_description": "Классическая пицца с колбасой пепперони.",
      "dish_structure": "Тесто, Томатный соус, Моцарелла, Пепперони",
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
      "dish_description": "Простая и вкусная пицца с томатами и моцареллой.",
      "dish_structure": "Тесто, Томатный соус, Моцарелла, Базилик",
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
      "dish_description": "Пицца с ветчиной и ананасами.",
      "dish_structure": "Тесто, Томатный соус, Моцарелла, Ветчина, Ананасы",
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
      "dish_description": "Пицца с четырьмя видами сыра.",
      "dish_structure": "Тесто, Томатный соус, Моцарелла, Дорблю, Пармезан, Чеддер",
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
      "dish_description": "Пицца с разными видами мяса.",
      "dish_structure": "Тесто, Томатный соус, Моцарелла, Пепперони, Ветчина, Курица",
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
      "dish_description": "Японская лапша удон с курицей и овощами в соевом соусе.",
      "dish_structure": "Лапша удон, Курица, Перец болгарский, Морковь, Лук, Соевый соус",
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
      "dish_description": "Гречневая лапша соба с креветками и овощами в терияки соусе.",
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
      "dish_description": "Рисовая лапша с тофу и овощами в кисло-сладком соусе.",
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
      "dish_description": "Стеклянная лапша фунчоза с овощами в остром соусе.",
      "dish_structure": "Фунчоза, Перец чили, Грибы шиитаке, Лук, Соевый соус",
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
      "dish_description": "Яичная лапша со свининой и овощами в устричном соусе.",
      "dish_structure": "Яичная лапша, Свинина, Лук, Морковь, Устричный соус",
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
      "dish_description": "Классический шоколадный торт с нежным кремом.",
      "dish_structure": "Мука, Какао, Сахар, Яйца, Сливочный крем",
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
      "dish_description": "Итальянский десерт с кофе и маскарпоне.",
      "dish_structure": "Печенье Савоярди, Кофе, Маскарпоне, Какао",
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
      "dish_description": "Нежный чизкейк с ягодным соусом.",
      "dish_structure": "Песочное тесто, Сыр Филадельфия, Ягоды, Сахар",
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
      "dish_description": "Шарик мороженого на выбор.",
      "dish_structure": "Молоко, Сливки, Сахар, Ароматизатор",
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
      "dish_description": "Свежий фруктовый салат с йогуртом.",
      "dish_structure": "Яблоки, Бананы, Апельсины, Киви, Йогурт",
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
      "dish_description": "Классический томатный кетчуп.",
      "dish_structure": "Томаты, Сахар, Уксус, Специи",
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
      "dish_description": "Классический майонез.",
      "dish_structure": "Яйца, Масло растительное, Уксус, Горчица",
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
      "dish_description": "Сладкий и копченый соус барбекю.",
      "dish_structure": "Томатная паста, Уксус, Сахар, Дым",
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
      "dish_description": "Классический соус для салата Цезарь.",
      "dish_structure": "Майонез, Анчоусы, Чеснок, Лимонный сок, Пармезан",
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
      "dish_description": "Острый соус с перцем чили.",
      "dish_structure": "Перец чили, Уксус, Сахар, Чеснок",
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