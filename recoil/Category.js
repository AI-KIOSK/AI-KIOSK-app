import { atom } from 'recoil';

const Category = atom({
  key: 'category',
  default: 'coffee',
});

const Temperature = atom({
  key: 'temperature',
  default: 'hot',
});

export { Category, Temperature };
