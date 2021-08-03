export const drinks = {
  americano: {
    id: '1',
    name: 'Американо',
    type: 'кофейный напиток',
    image: require('../../assets/images/drinks/americano.jpg'),
    price: 25,
    popular: true,
    structure: {
      coffee: 35,
      water: 30,
      temperature: 90,
      pressure: 9,
    },
    description:
      'Кофе американо – это традиционный эспрессо, минимум вдвое разбавленный водой.',
  },
  glace: {
    id: '2',
    name: 'Глясе',
    type: 'кофе с мороженым',
    image: require('../../assets/images/drinks/glasse.png'),
    price: 35,
    popular: false,
    structure: {
      milk: 45,
      coffee: 10,
      temperature: 25,
    },
    description:
      'Гляссе — популярный во всем мире кофейный коктейль с использованием мороженого. По виду он немного напоминает кофе по-венски или латте, разница в том, что напиток подается в охлажденном виде.',
  },
  espresso: {
    id: '3',
    name: 'Эспрессо',
    type: 'кофейный напиток',
    image: require('../../assets/images/drinks/espresso.png'),
    price: 20,
    popular: false,
    structure: {
      coffee: 30,
      water: 35,
      temperature: 70,
      pressure: 9,
    },
    description:
      'Эспрессо – особый способ приготовления кофе, который появился в середине XX века. Его родина — Италия. Слово «эспрессо» означает «быстро приготовлено для Вас»',
  },
  cappuccino: {
    id: '4',
    name: 'Капучино',
    type: 'кофейный напиток',
    image: require('../../assets/images/drinks/cappuccino.jpeg'),
    price: 26,
    popular: false,
    structure: {
      milk: 40,
      coffee: 25,
      water: 25,
      temperature: 95,
      pressure: 15,
    },
    description:
      'Итальянский эспрессо – это бархатистая плотная пенка с золотистым отливом, покрывающая всю поверхность кофе. Из Италии с любовью.',
  },
  latte: {
    id: '5',
    name: 'Латте',
    type: 'кофейный напиток',
    image: require('../../assets/images/drinks/latte.jpg'),
    price: 18,
    popular: false,
    structure: {
      milk: 120,
      coffee: 25,
      temperature: 60,
      pressure: 9,
    },
    description:
      'Латте - кофейный напиток родом из Италии, состоящий из молока и кофе эспрессо. Латте варится на основе молока, образуя в чашке или бокале трёхслойную смесь из молока, эспрессо и пены.',
  },
  mocha: {
    id: '6',
    name: 'Мокко',
    type: 'кофейный напиток',
    image: require('../../assets/images/drinks/mocha.jpg'),
    price: 22,
    popular: false,
    structure: {
      milk: 100,
      coffee: 35,
      temperature: 60,
      pressure: 10,
    },
    description:
      'Мокко — непосредственно напиток на основе эспрессо с добавлением молока и какао-порошка.',
  },
  viennese: {
    id: '7',
    name: 'По-венски',
    type: 'кофейный напиток',
    image: require('../../assets/images/drinks/viennese.jpg'),
    price: 28,
    popular: false,
    structure: {
      milk: 115,
      coffee: 15,
      water: 235,
      temperature: 60,
      pressure: 9,
    },
    description:
      'Кофе по-венски – это кофе с взбитыми сливками. В Австрии насчитывается около 50 способов приготовления кофе.',
  },
  freddo: {
    id: '8',
    name: 'Фредо',
    type: 'кофейный напиток',
    image: require('../../assets/images/drinks/fredo.jpg'),
    price: 30,
    popular: false,
    structure: {
      milk: 50,
      coffee: 20,
      temperature: 15,
    },
    description:
      'Кофе фредо больше всего похож на айс кофе, но без кубиков льда, и имеет меньший объем.',
  },
};
