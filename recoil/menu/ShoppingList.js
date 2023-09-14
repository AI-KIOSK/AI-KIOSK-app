import { atom } from 'recoil';

const ShoppingList = atom({
  key: 'shoppingList',
  default: [{ id: '', name: '', category: '', temperature: '', img: 0, price: 0 }],
});

export { ShoppingList };
