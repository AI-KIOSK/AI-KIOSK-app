import { atom } from 'recoil';

const orderRequest = atom({
  key: 'orderRequest',
  default: {
    quantity: 1,
    totalPrice: 0,
    orderType: '',
    orders: [],
  },
});

const orderResponse = atom({
  key: 'orderResponse',
  default: null,
});

const menuWithOption = atom({
  key: 'order',
  default: {
    id: -1,
    menuName: '',
    hotOrIced: '',
    orderQuantity: 1,
    sweetness: '',
    pump: 0,
    iceAmount: '',
    whippingAmount: '',
    shots: 0,
    whippings: 0,
    price: 0,
  },
});

export { orderRequest, menuWithOption, orderResponse };
