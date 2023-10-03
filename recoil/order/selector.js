import { selector } from 'recoil';

import { menuWithOption, orderRequest } from './atom';

const orderRequestSelector = selector({
  key: 'addMenuSelector',
  get: ({ get }) => get(orderRequest),
  set: ({ get, set }) => {
    const prevRequest = get(orderRequest);

    const { orders } = prevRequest;
    const order = get(menuWithOption);

    if (orders.length === 0) {
      orders.push(order);
      return set(orderRequest, prevRequest);
    }
  },
});

export { orderRequestSelector };
