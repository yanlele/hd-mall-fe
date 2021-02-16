import axios, { AxiosRequestConfig } from 'axios';
import { message } from 'antd';

export default function(options: AxiosRequestConfig) {
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
        //
        message.error({ content: data.message, key: data.code });

        if (data.code === 10002) {
          setTimeout(() => {
            // todo 需要跳转到登录页面
            window?.HistoryRouter?.push('/category');
          }, 3000);
        }

        return Promise.reject(data);
      }
      return Promise.resolve(data);
    }
    return Promise.reject(new Error('the response is not JSON'));
  });
}
