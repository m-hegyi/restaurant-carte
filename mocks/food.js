const food = {
  id: null,
  name: null,
  subcategories: [
    {
      id: null,
      name: null,
      price: 0,
    },
  ],
  ingredients: [],
};

export const makeFood = ({id, name, subcategories, ingredients, url = ''}) => {
  return Object.freeze({id, name, subcategories, ingredients, url});
};
