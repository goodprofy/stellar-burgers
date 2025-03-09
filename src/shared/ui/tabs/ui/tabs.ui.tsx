import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from 'react';
import clsx from 'clsx';

import { debounce } from '@/shared/lib/utils';
import { Tab as YandexTab } from '@/shared/ui';

import { calculateThreshold, scrollIntoView } from '../lib/tabs.utils';
import { type Tab, type TabsPrpps } from '../model/tabs.types';

import styles from './tabs.module.css';

export function Tabs({ onTabClick, tabs }: TabsPrpps) {
  const [selectedTab, setSelectedTab] = useState<Tab['id']>();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<Tab['id'], HTMLDivElement | null>>({});
  const [_, startTransition] = useTransition();
  const isScrolling = useRef(false);

  useEffect(() => {
    const getRefs = () =>
      Object.values(tabRefs.current).map((element) => {
        return element;
      });

    const onInViewChange = (entries: IntersectionObserverEntry[]) => {
      if (isScrolling.current) {
        return;
      }

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const foundTabId = Object.entries(tabRefs.current)
            .map(([tabId, element]) => {
              if (element === entry.target) {
                return tabId;
              }

              return null;
            })
            .find(Boolean);

          if (foundTabId) {
            setSelectedTab(foundTabId);
          }
        }
      });
    };

    const debouncedOnInViewChange = debounce(onInViewChange, 16);

    const threshold = getRefs().map((element) =>
      calculateThreshold(element, scrollContainerRef.current),
    );

    const intersectionObserver = new IntersectionObserver(
      debouncedOnInViewChange,
      {
        threshold,
      },
    );

    const handleScroll = () => {
      getRefs().forEach((element) => {
        if (element) {
          intersectionObserver.observe(element);
        }
      });
    };

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener('scroll', handleScroll, {
        once: true,
      });
    }

    return () => {
      intersectionObserver.disconnect();

      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const renderTabs = useCallback(
    ({ id, title }: Tab) => {
      const handleTabClick = (tabId: Tab['id']) => {
        const foundTab = tabs.find(({ id }) => id === tabId);
        if (!foundTab) {
          return;
        }

        const targetElement = tabRefs.current[foundTab.id];
        if (targetElement) {
          scrollIntoView(targetElement);
        }

        startTransition(() => {
          onTabClick(foundTab);
          setSelectedTab(foundTab.id);
        });
      };

      const isSelectedTab = selectedTab
        ? selectedTab === id
        : tabs[0]?.id === id || false;

      return (
        <YandexTab
          key={id}
          value={id}
          active={isSelectedTab}
          onClick={handleTabClick}
        >
          {title}
        </YandexTab>
      );
    },
    [onTabClick, selectedTab, tabs],
  );
  const renderedTabs = useMemo(() => tabs.map(renderTabs), [renderTabs, tabs]);

  const renderContent = (tab: Tab) => {
    const { id, title, content } = tab;

    return (
      <div key={id} ref={(el) => (tabRefs.current[id] = el)}>
        <h2 className="text text_type_main-medium pb-6">{title}</h2>
        <div className={clsx(styles.list, 'pb-10')}>{content}</div>
      </div>
    );
  };

  const renderedContent = useMemo(() => tabs.map(renderContent), [tabs]);

  return (
    <div className={styles.container}>
      <nav className="flex pb-10">{renderedTabs}</nav>
      <div ref={scrollContainerRef} className={clsx(styles.scroll, 'scroll')}>
        {renderedContent}
      </div>
    </div>
  );
}
