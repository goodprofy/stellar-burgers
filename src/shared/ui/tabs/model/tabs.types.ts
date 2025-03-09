import { type ReactNode } from 'react';

export interface Tab {
  id: string;
  title: string;
  content: ReactNode;
}

export interface TabsPrpps {
  tabs: Tab[];
  onTabClick: (tab: Tab) => void;
}
