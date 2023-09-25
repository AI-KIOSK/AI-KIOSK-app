import { useRecoilState, useResetRecoilState } from 'recoil';
import { menuWithOption, orderRequest } from 'recoil/order/atom';

function useOrder() {
  const [request, setRequest] = useRecoilState(orderRequest);
  const [order, setOrder] = useRecoilState(menuWithOption);

  const resetRequest = useResetRecoilState(orderRequest);
  const resetOrder = useResetRecoilState(menuWithOption);

  const handleSelectMenu = (key, value) =>
    setOrder((prev) => ({
      ...prev,
      [key]: prev[key] === value ? '' : value,
    }));

  const handleQuantity = (quantity) =>
    setOrder((prev) => ({
      ...prev,
      orderQuantity: prev.orderQuantity + quantity === 0 ? 1 : prev.orderQuantity + quantity,
    }));

  const add = () =>
    setRequest((prev) => {
      const { orders } = prev;

      if (orders.length === 0) {
        return {
          ...prev,
          orders: [order],
          totalPrice: order.orderQuantity * order.price,
          quantity: order.orderQuantity,
        };
      }

      const findOrder = orders.find((item) => item.menuName === order.menuName);
      if (findOrder === undefined) {
        const newOrders = [...prev.orders, order];

        return {
          ...prev,
          orders: newOrders,
          totalPrice: prev.totalPrice + order.orderQuantity * order.price,
          quantity: newOrders.reduce((acc, cur) => acc + cur.orderQuantity, 0),
        };
      }

      let flag = true;
      for (const key in findOrder) {
        if (key === 'orderQuantity') continue;
        if (findOrder[key] !== order[key]) {
          flag = false;
          break;
        }
      }

      let newItem = null;
      /** 기존 메뉴와 옵션 다 똑같은 경우 */
      if (flag) {
        findOrder.orderQuantity += order.orderQuantity;

        const newOrders = prev.orders.map((item) =>
          item.menuName !== order.menuName
            ? { ...item }
            : { ...item, orderQuantity: item.orderQuantity + order.orderQuantity },
        );
        newItem = {
          ...prev,
          totalPrice: prev.totalPrice + order.orderQuantity * order.price,
          orders: newOrders,
          quantity: newOrders.reduce((acc, cur) => acc + cur.orderQuantity, 0),
        };
      } else {
        /** 기존과 옵션 다른 경우 */

        const newOrders = [...prev.orders, order];
        newItem = {
          ...prev,
          totalPrice: prev.totalPrice + order.orderQuantity * order.price,
          orders: newOrders,
          quantity: newOrders.reduce((acc, cur) => acc + cur.orderQuantity, 0),
        };
      }

      return newItem;
    });

  const deleteMenu = (itemId) => {
    const deleteItem = request.orders.find((item) => item.id === itemId);
    setRequest((prev) => ({
      ...prev,
      quantity: prev.quantity - deleteItem.orderQuantity,
      totalPrice: prev.totalPrice - deleteItem.price * deleteItem.orderQuantity,
      orders: prev.orders.filter((item) => item.id !== itemId),
    }));
  };

  return {
    order,
    request,
    add,
    handleSelectMenu,
    handleQuantity,
    deleteMenu,
    resetOrder,
    resetRequest,
  };
}

export { useOrder };
