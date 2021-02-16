declare module '*.less';

interface Window {
  HistoryRouter: {
    push: (path: string, state?: any) => void;
  };
}
