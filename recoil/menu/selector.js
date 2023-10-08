import { DefaultValue, selector } from 'recoil';
import { menuWithOption } from 'recoil/order/atom';

import { chosenMenuInfo } from './atom';

const chosenMenuInfoSelector = selector({
  key: 'chosenMenuInfoSelector',
  get: ({ get }) => get(chosenMenuInfo),
  set: ({ set, reset }, item) => {
    const { id, name, nameEng, price, img } = item;

    if (item instanceof DefaultValue) {
      reset(chosenMenuInfo);
      return;
    }

    set(menuWithOption, (prev) => ({ ...prev, id, menuName: name, nameEng, price, img }));
    return set(chosenMenuInfo, item);
  },
});

export { chosenMenuInfoSelector };
