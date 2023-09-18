import { atom } from 'recoil';

const ShoppingList = atom({
  key: 'shoppingList',
  default: [],
});

export { ShoppingList };
