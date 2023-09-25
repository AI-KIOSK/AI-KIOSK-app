import { useRecoilState } from 'recoil';
import { signUpRequest } from 'recoil/auth/atom';

function useSignUp() {
  const [request, setRequest] = useRecoilState(signUpRequest);

  const onChange = (key, value) =>
    setRequest((prev) => ({
      ...prev,
      [key]: value,
    }));

  return { request, onChange };
}

export { useSignUp };
