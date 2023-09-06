import { atom } from 'recoil';

const SignUp = atom({
  key: 'signup',
  default: false,
});

const SignUpCompleted = atom({
    key: 'signupCompleted',
    default: false,
})

export {SignUp, SignUpCompleted};
