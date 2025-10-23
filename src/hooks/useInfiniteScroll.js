import { useCallback } from 'react';

export const useInfiniteScroll = (loadMore, hasMore) => {
  const handleScroll = useCallback((e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    
    // Load more when 80% from bottom
    if (scrollTop + clientHeight >= scrollHeight * 0.8 && hasMore) {
      loadMore();
    }
  }, [loadMore, hasMore]);

  return { handleScroll };
};