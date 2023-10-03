import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { Category } from 'recoil/category/atom';
import { chosenMenuInfo } from 'recoil/menu/atom';
import { chosenMenuInfoSelector } from 'recoil/menu/selector';

const useMenu = () => {
  const category = useRecoilValue(Category);
  const resetSelectedMenu = useResetRecoilState(chosenMenuInfo);

  const [selectedMenu, selectMenu] = useRecoilState(chosenMenuInfoSelector);

  return { category, selectedMenu, selectMenu, resetSelectedMenu };
};

export default useMenu;
