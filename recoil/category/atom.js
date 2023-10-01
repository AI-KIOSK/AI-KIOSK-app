import { atom } from 'recoil';

const Category = atom({
  key: 'myCategory',
  default: '커피',
});

export { Category };
