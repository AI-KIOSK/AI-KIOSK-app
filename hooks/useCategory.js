import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { Category } from 'recoil/category/atom';

export default function useCategory() {
  const [category, setCategory] = useRecoilState(Category);

  const onPressCategory = useCallback((category) => setCategory(category), [setCategory]);

  return { category, onPressCategory };
}
