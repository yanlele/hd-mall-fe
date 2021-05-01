import axios, { AxiosRequestConfig } from 'axios';
import { Config } from '@src/utils/interface';
import { message } from 'antd';

export default function<T = any>(options: AxiosRequestConfig, config?: Config) {
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
        if (config?.tipMessage) message.error({ content: data.message, key: data.code });
        return Promise.reject<T>(data);
      }
      return Promise.resolve<T>(data);
    }
    return Promise.reject(new Error('the response is not JSON'));
  });
}
