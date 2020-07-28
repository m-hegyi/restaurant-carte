import {makeFood} from './food';
import {makeCategory} from './category';

const stars = () => {
  const items = [];

  const names = [
    'Dual box 2 személyre',
    'Family box 4 személyre',
    'Finom crispy csirkefalatok',
    'Finom chili csirkeburger',
    'Finom crispy csirkeburger',
    'Finom fitt vega burger',
    'Finom mixed saláta',
    'Finom sajtos csirke wrap',
    'Finom sajtos golyócskák',
  ];

  const urls = [
    'https://falatozz.hu/kepek/new/055/55251/55251_dual-box-2-szemelyre_600x600.jpg',
    'https://falatozz.hu/kepek/new/055/55257/55257_family-box-4-szemelyre_600x600.jpg',
    'https://falatozz.hu/kepek/new/055/55260/55260_finom-crispy-csirkefalatok_600x600.jpg',
    'https://falatozz.hu/kepek/new/055/55256/55256_finom-chili-csirkeburger_600x600.jpg',
    'https://falatozz.hu/kepek/new/055/55254/55254_finom-crispy-csirkeburger_600x600.jpg',
    'https://falatozz.hu/kepek/new/055/55258/55258_finom-fitt-vega-burger_600x600.jpg',
    'https://falatozz.hu/kepek/new/055/55259/55259_finom-mixed-salata_600x600.jpg',
    'https://falatozz.hu/kepek/new/055/55250/55250_finom-sajtos-csirke-wrap_600x600.jpg',
    'https://falatozz.hu/kepek/new/054/54549/54549_finom-sajtos-golyocskak_600x600.jpg',
  ];

  const subcategories = [
    {id: Math.floor(Math.random() * 10001), name: null, price: 4960},
    {id: Math.floor(Math.random() * 10001), name: null, price: 9920},
    {id: Math.floor(Math.random() * 10001), name: null, price: 1190},
    {id: Math.floor(Math.random() * 10001), name: null, price: 1190},
    {id: Math.floor(Math.random() * 10001), name: null, price: 990},
    {id: Math.floor(Math.random() * 10001), name: null, price: 1190},
    {id: Math.floor(Math.random() * 10001), name: null, price: 490},
    {id: Math.floor(Math.random() * 10001), name: null, price: 990},
    {id: Math.floor(Math.random() * 10001), name: null, price: 890},
  ];

  const ingredients = [
    [
      '1 adag cheese csirkefalat',
      '1 adag cheese sertés',
      '1 adag crispy csirkefalat',
      '1 adag crispy sertésfalat',
      '1 adag cheese golyócska',
      '1 adag finom salátával',
      '2 nagy adag hasábburgonyával',
      '2 féle választható öntettel',
    ],
    [
      '1 adag cheese csirkefalat',
      '1 adag cheese sertésfalat',
      '1 adag crispy csirkefalat',
      '1 adag crispy sertésfalat',
      '4 adag cheese golyócska',
      '2 adag finom salátával',
      '4 nagy adag hasábburgonyával',
      '4 féle választható öntettel',
    ],
    ['20dkg', 'ropogós párizsi bundában sült csirkemell', 'köret nélkül'],
    [
      'buci',
      'csirkemell',
      'lollo rosso saláta',
      'paradicsom',
      'sajt',
      'csípős öntet kápiás buciban',
      'crispy bundás csirkemellel',
    ],
    [
      'buci',
      'csirkemell',
      'lollo rosso saláta',
      'paradicsom',
      'majonéz',
      'ketchup',
      'crispy bundás csirkemellel',
    ],
    [
      'buci',
      'gomolya sajt',
      'lollo rosso saláta',
      'paradicsom',
      'mézes-mustáros szósz',
      'tökmaglisztes buciban',
    ],
    ['saláta mix', 'koktélparadicsom', 'kígyóuborka', 'madársaláta', 'rukkola'],
    [
      'tortilla',
      'csirkemell',
      'jégsaláta',
      'paradicsom',
      'trappista sajt',
      'majonéz',
    ],
    ['12dkg', 'köret nélkül'],
  ];

  names.forEach((name, index) => {
    items.push(
      makeFood({
        id: index,
        name,
        subcategories: [subcategories[index]],
        ingredients: ingredients[index],
        url: urls[index],
      }),
    );
  });

  return items;
};

const makeCarte = () => {
  const categories = [];
  const restaurantName = 'Finom Fried Food Miskolc';

  const catNames = [
    'Étterem sztárjai',
    'Hamburger',
    'Frissensült',
    'Saláta',
    'Köret',
    'Üditő',
  ];

  const images = [
    'https://falatozz.hu/kepek/etelkategoriak/049/49526/200x/etterem-sztarjai.png',
    'https://falatozz.hu/kepek/etelkategoriak/045/45533/200x/hamburger.png',
    'https://falatozz.hu/kepek/etelkategoriak/045/45347/200x/frissensult.png',
    'https://falatozz.hu/kepek/etelkategoriak/045/45363/200x/salata.png',
    'https://falatozz.hu/kepek/etelkategoriak/045/45351/200x/koret.png',
    'https://falatozz.hu/kepek/etelkategoriak/045/45361/200x/udito.png',
  ];

  catNames.forEach((name, index) => {
    if (index === 0) {
      const starItems = stars();
      categories.push(
        makeCategory({id: index, name, items: starItems, url: images[index]}),
      );
    } else {
      categories.push(
        makeCategory({id: index, name, items: [], url: images[index]}),
      );
    }
  });

  return Object.freeze({categories, restaurantName});
};

export const carte = makeCarte();
