import { atom } from 'recoil';

const Category = atom({
  key: 'category',
  default: 'coffee',
});

export { Category };
