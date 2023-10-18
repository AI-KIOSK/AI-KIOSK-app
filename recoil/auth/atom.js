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

const capturedImage = atom({
  key: 'capturedImage',
  default: {
    width: 0,
    height: 0,
    base64: '',
    uri: '',
  },
});

export { signUpResponse, phoneNumber, signUpRequest, capturedImage };
