import { client } from './client';

const fetchMenus = () => client.get('/api/v1/menus');

const fetchPoints = (phone) =>
  client.get('api/v1/user', {
    params: {
      phone,
    },
  });
export { fetchMenus, fetchPoints };
