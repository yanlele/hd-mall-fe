import { ReactNode } from 'react';

export interface RenderComponent {
  title: string | ReactNode;
  component: ReactNode;
}

export interface CustomTabsProps {
  components: RenderComponent[];
}
