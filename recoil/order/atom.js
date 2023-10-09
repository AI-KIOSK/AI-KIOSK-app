import { atom } from 'recoil';
import { HotOrIce } from 'types/menu';

const orderRequest = atom({
  key: 'orderRequest',
  default: {
    quantity: 0,
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
    hotOrIced: HotOrIce.ICE,
    orderQuantity: 1,
    sweetness: '0%',
    pump: 0,
    iceAmount: '없음',
    whippingAmount: '없음',
    shots: 0,
    whippings: 0,
    price: 0,
    img: '',
  },
});

export { orderRequest, menuWithOption, orderResponse };
