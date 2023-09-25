import { atom } from 'recoil';

const phoneNumber = atom({
  key: 'phoneNumber',
  default: -1,
});

const signUpRequest = atom({
  key: 'signUpRequest',
  default: {
    phoneNumber: '',
    gender: '',
  },
});

export { phoneNumber, signUpRequest };
