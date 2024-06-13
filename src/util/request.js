import axios from 'axios';

const API_HOST = 'http://123.60.184.219:8060'

const CODE = {
  LOGIN_TIMEOUT: 1000,
  REQUEST_SUCCESS: 0,
  REQUEST_FOBID: 1001,
};

const instance = axios.create({
  baseURL: API_HOST,
  timeout: 3000,
  withCredentials: true,
});

// eslint-disable-next-line
// @ts-ignore
// axios的retry ts类型有问题
instance.interceptors.retry = 3;

/* instance.interceptors.request.use((config) => config); */
instance.interceptors.request.use((config) => {
  return config;
})

instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      const { data } = response;
      if (data.code === CODE.REQUEST_SUCCESS) {
        return data;
      }
      return response;
    }
  },
  (err) => {
    const { config } = err;

    if (!config || !config.retry) return Promise.reject(err);

    config.retryCount = config.retryCount || 0;

    if (config.retryCount >= config.retry) {
      return Promise.reject(err);
    }

    config.retryCount += 1;

    const backoff = new Promise((resolve) => {
      setTimeout(() => {
        resolve({});
      }, config.retryDelay || 1);
    });

    return backoff.then(() => instance(config));
  },
);

export default instance;
