import client from '@/shared/api';
import UserDto from './const';

const service = {
  async getUsers() {
    const resource = '/users';
    const result = await client.get(resource);
    return result.data.map(user => new UserDto(user));
  },
  async addUser(data) {
    const resource = '/users';
    return await client.post(resource, data);
  },
  async updateUser(data) {
    const resource = '/users';
    return await client.put(resource, data);
  },
};

export default service;

