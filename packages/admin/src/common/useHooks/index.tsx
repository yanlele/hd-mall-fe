import { useEffect } from 'react';
import { get } from 'lodash';

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
