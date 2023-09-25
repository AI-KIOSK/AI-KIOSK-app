import { atom } from 'recoil';

const OptionList = atom({
  key: 'optionList',
  default: { sweetness: '', pump: 0, iceAmount: '', whippingAmount: '', shots: 0, whippings: 0 },
});

export { OptionList };
