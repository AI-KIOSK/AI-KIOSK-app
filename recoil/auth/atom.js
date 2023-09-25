import { atom } from 'recoil';

const phoneNumber = atom({
  key: 'phoneNumber1',
  default: '',
});

const signUpRequest = atom({
  key: 'signUpRequest',
  default: {
    phoneNumber: '',
    gender: '',
  },
});

const signUpResponse = atom({
  key: 'signUpResponse',
  default: null,
});

export { signUpResponse, phoneNumber, signUpRequest };
