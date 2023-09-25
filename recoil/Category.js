import { atom } from 'recoil';

const Category = atom({
  key: 'category',
  default: 1,
});

const Temperature = atom({
  key: 'temperature',
  default: 'HOT',
});

const ModalTemperature = atom({
  key: 'modalTemperature',
  default: 'HOT',
});

const Recommendation = atom({
  key: 'recommendation',
  default: 'no',
});

export { Category, Temperature, ModalTemperature, Recommendation };
