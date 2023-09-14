import { atom } from 'recoil';

const Category = atom({
  key: 'category',
  default: 'coffee',
});

const Temperature = atom({
  key: 'temperature',
  default: 'hot',
});

const Recommendation = atom({
  key: 'recommendation',
  default: 'no',
});

export { Category, Temperature , Recommendation};
