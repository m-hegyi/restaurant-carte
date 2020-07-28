const category = {
  id: 0,
  name: null,
  items: [],
};

export const makeCategory = ({id, name, items, url}) => {
  return Object.freeze({id, name, items, url});
};
