import { client } from './client';

const postOrders = (orders) => client.post('/api/v1/order', orders);

export { postOrders };
