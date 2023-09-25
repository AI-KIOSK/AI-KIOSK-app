import { selector } from 'recoil';
import { menuWithOption } from 'recoil/order/atom';

import { chosenMenuInfo } from './atom';

const chosenMenuInfoSelector = selector({
  key: 'chosenMenuInfoSelector',
  get: ({ get }) => get(chosenMenuInfo),
  set: ({ set }, item) => {
    const { id, name, price, img } = item;

    set(menuWithOption, (prev) => ({ ...prev, id, menuName: name, price, img }));
    return set(chosenMenuInfo, item);
  },
});

export { chosenMenuInfoSelector };
