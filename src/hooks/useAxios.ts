import axios, { AxiosRequestHeaders } from 'axios';

const useAxios = (headers?: AxiosRequestHeaders) => {
  axios.defaults.baseURL = import.meta.env.VITE_PUBLIC_API_SERVER_URL;
  axios.defaults.headers.common['accept'] = 'application/json; charset=UTF-8';
  axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';

  if (headers) {
    for (const [key, value] of Object.entries(headers)) {
      axios.defaults.headers.common[key] = value;
    }
  }

  return axios;
};

export default useAxios;
