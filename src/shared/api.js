import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

api.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const client = {
  async get(resource, params, handleError = true) {
    const config = {
      withCredentials: true,
      params,
      headers: {
      },
    };
    try {
      const result = await api.get(resource, config);
      return result;
    } catch (ex) {
      if (handleError) {
        showError(ex);
      }
      throw ex;
    }
  },
  async post(resource, data, params, handleError = true) {
    const config = {
      params,
      headers: {
      },
    };
    try {
      const result = await api.post(resource, data, config);
      return result;
    } catch (ex) {
      if (handleError) {
      }
      throw ex;
    }
    },
};

export default client;
