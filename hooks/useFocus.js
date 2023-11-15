import { useRecoilState } from 'recoil';
import focusAtom from 'recoil/common/focus/atom';

export default function useFocus() {
  const [curFocus, setCurFocus] = useRecoilState(focusAtom);

  // const setCurFocusView = (view) => setCurFocus(view);

  return { curFocus, setCurFocus };
}
