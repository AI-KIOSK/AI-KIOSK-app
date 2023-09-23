import { atom } from 'recoil';

const ShoppingList = atom({
  key: 'shoppingList',
  default: [],
});

const FinalOrder = atom({
  key: 'finalOrder',
  default: {
    phoneNumber: '',
    quantity: 0,
    totalPrice: 0,
    orderType: '',
    orders: [],
  },
});

export { ShoppingList, FinalOrder };
