import axios, { AxiosRequestConfig } from 'axios';
import { message } from 'antd';

export default function<T = any>(options: AxiosRequestConfig) {
  const DefaultParams = {
    url: '',
    method: 'get',
    credentials: 'include',
  };
  const $options = Object.assign({}, DefaultParams, options);
  return axios($options).then(response => {
    const { headers, data } = response;
    const contentType = headers['content-type'];
    if (contentType && contentType.indexOf('application/json') !== -1) {
      if (data.code != 0) {
        message.error({ content: `${data.message}，请重新登录！`, key: data.code });
        return Promise.reject<T>(data);
      }
      return Promise.resolve<T>(data);
    }
    return Promise.reject(new Error('the response is not JSON'));
  });
}
