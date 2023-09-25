import { client } from './client';

const fetchMenus = () => client.get('/api/v1/menus');

export { fetchMenus };
