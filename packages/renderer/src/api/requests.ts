import axios from 'axios';
import { ElMessage } from 'element-plus';
import store from '../store/index';
import { API_URL } from '../core/config';
import router from '../router/router';
import local from '../core/data';
import { KEY_USER_DATA } from '../store/types';
import np from 'nprogress';

interface BasicResp<T> {
  data: T;
  code: number;
  msg: string;
}
interface ListResp<T> {
  list: T[];
  total: number;
}

const http = axios.create({
  baseURL: API_URL,
});

// request
http.interceptors.request.use(
  (config) => {
    if (store.state.userInfo?.token)
      config.headers.Authorization = `Bearer ${store.state.userInfo?.token}`;
    np.start();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// response
http.interceptors.response.use(
  (res) => {
    np.done();
    return new Promise((resolve, reject) => {
      const status = res.status || 0;
      const { code } = res.data;
      if (status === 403 || (code && code === 403)) {
        ElMessage.error('Insufficient permissions, please login first');
        local.delValue(KEY_USER_DATA);
        router.push({ name: 'Login' }).then();
        reject(res);
      }
      resolve(res);
    });
  },
  (error) => {
    np.done();
    return new Promise((resolve, reject) => {
      const status = error.response.status || 0;
      if (status === 403) {
        ElMessage.error('Insufficient permissions, please login first');
        local.delValue(KEY_USER_DATA);
        router.push({ name: 'Login' }).then();
      }
      reject(error);
    });
  },
);

const useHttp = () => {
  const get = async <T>(url: string, params = {}) => {
    return await http.get<T>(url, { params: params });
  };
  const post = async <T>(url: string, data = {}) => {
    return await http.post<T>(url, data);
  };
  const del = async <T>(url: string, params = {}) => {
    return await http.delete<T>(url, { params });
  };

  const put = async <T>(url: string, data = {}) => {
    return await http.put<T>(url, data);
  };
  return {
    get,
    post,
    del,
    put,
  };
};

export { ListResp, http, useHttp, BasicResp };
