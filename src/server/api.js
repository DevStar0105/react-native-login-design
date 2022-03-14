import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (!error.response) return false;
//     if (error.response.status === 401) {
//       localStorage.clear();
//       window.location.href = `/login`;
//     }
//     return error.response;
//   },
// );

const request = (tokenExternal) => {
  const baseURL = 'http://18.229.140.163:8080';
    
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenExternal}`,
      'Access-Control-Allow-Origin': '*',
    },
  };

  return {
    get: async (url, payload = {}) => await axios.get(baseURL + url, { ...payload, ...options }),
    post: async (url, payload) => await axios.post(baseURL + url, payload, options),
    put: async (url, payload) => await axios.put(baseURL + url, payload, options),
    delete: async (url, payload = {}) => await axios.delete(baseURL + url, { ...payload, ...options }),
  };
};

export const downloadRequest = (tokenExternal) => {
  const baseURL = 'http://18.229.140.163:8080';
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': `${tokenExternal}`,
      'Access-Control-Allow-Origin': '*',
      responseType: 'blob',
    },
    responseType: 'blob',
  };
  return async (url) => await axios.get(baseURL + url, options);
};

export default request;
