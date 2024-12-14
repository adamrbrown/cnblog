import { useEffect, useState } from 'react';

interface ActiveListOptions {
  width?: number;
}

type ActiveStatus = 'all' | 'favorite' | 'both';

function useActiveList({ width = 768 }: ActiveListOptions = {}) {
  const [activeList, setActiveList] = useState<ActiveStatus>(() =>
    document.body.clientWidth < width ? 'all' : 'both'
  );

  useEffect(() => {
    const handleViewportResize = (event: UIEvent) => {
      const target = event.target as Window;
      setActiveList(target.innerWidth < width ? 'all' : 'both');
    };

    window.addEventListener('resize', handleViewportResize);

    return () => {
      window.removeEventListener('resize', handleViewportResize);
    };
  }, [width]);

  const updateActiveList = (option: ActiveStatus) => {
    setActiveList(option);
  };

  return {
    activeList,
    updateActiveList,
  };
}

export { useActiveList };
