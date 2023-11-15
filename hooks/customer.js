import { register } from 'api/auth';
import format from 'pretty-format';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { signUpRequest } from 'recoil/auth/atom';

function useSignUp() {
  const setRequest = useSetRecoilState(signUpRequest);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const [gender, setGender] = useState('');
  const [phoneNumberPrev, setPhoneNumberPrev] = useState('');
  const [phoneNumberNext, setPhoneNumberNext] = useState('');

  const onPressGender = (gender) => setGender(gender);

  const onPressPrevPhoneNumber = (phoneNumber) => setPhoneNumberPrev(phoneNumber);
  const onPressNextPhoneNumber = (phoneNumber) => setPhoneNumberNext(phoneNumber);

  const signup = async () => {
    const request = {
      gender,
      phoneNumber: phoneNumberPrev + phoneNumberNext,
    };

    setRequest(request);

    try {
      console.log(format(request));
      const response = await register(request);
      console.log(format(response));
      return response;
    } catch (err) {
      console.log(format(err));
      return err;
    }
  };

  const signupWithRequest = async (request) => {
    setRequest(request);

    try {
      console.log(format(request));
      const response = await register(request);
      console.log(format(response));
      return response;
    } catch (err) {
      console.log(format(err));
      return err;
    }
  };

  return {
    gender,
    phoneNumberPrev,
    phoneNumberNext,
    onPressPrevPhoneNumber,
    onPressNextPhoneNumber,
    onPressGender,
    signup,
    signupWithRequest,
    isSuccess,
    isError,
  };
}

export { useSignUp };
