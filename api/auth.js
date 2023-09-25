import { client } from './client';

const register = (credentials) => client.post('/api/v1/user', credentials);

export { register };
