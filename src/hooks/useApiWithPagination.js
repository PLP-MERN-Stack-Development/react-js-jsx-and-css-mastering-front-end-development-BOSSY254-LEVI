import { useState, useEffect, useCallback } from 'react';

export const useApiWithPagination = (url, pageSize = 10) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchData = useCallback(async (pageNum = 1, search = '') => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch data');
      
      const allData = await response.json();
      
      // Simple client-side search
      let filteredData = allData;
      if (search) {
        filteredData = allData.filter(item => 
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.body.toLowerCase().includes(search.toLowerCase())
        );
      }
      
      // Simulate pagination
      const startIndex = (pageNum - 1) * pageSize;
      const paginatedData = filteredData.slice(0, startIndex + pageSize);
      
      setData(paginatedData);
      setHasMore(paginatedData.length < filteredData.length);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url, pageSize]);

  useEffect(() => {
    fetchData(1, searchQuery);
  }, [fetchData, searchQuery]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage(prev => prev + 1);
      fetchData(page + 1, searchQuery);
    }
  };

  const search = (query) => {
    setSearchQuery(query);
    setPage(1);
  };

  const refetch = () => {
    fetchData(page, searchQuery);
  };

  return {
    data,
    loading,
    error,
    hasMore,
    loadMore,
    search,
    searchQuery,
    refetch
  };
};