import { useEffect, useState } from 'react';
import { get } from 'lodash';
import { message } from 'antd';

export const useTitleSet = (title: string, props: any) => {
  useEffect(() => {
    document.title = title;

    // 这个地方需要挂载一个 路由操控 到 window
    if (get(props, 'history')) window.HistoryRouter = get(props, 'history');

    return () => {
      // @ts-ignore
      window.HistoryRouter = null;
    };
  }, []);
};

export const useRequest = (request: Promise<any>, handleFunction?: Function) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();
  request
    .then(res => {
      const data = res.data;
      if (handleFunction) setResult(handleFunction(res));
      else setResult(data);
    })
    .catch(e => {
      message.error(e.message);
    })
    .finally(() => {
      setLoading(false);
    });

  return { result, loading };
};
