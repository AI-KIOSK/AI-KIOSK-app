import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';

function useFetch(query, params) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useFocusEffect(
    useCallback(() => {
      console.log('fetch menus');
      async function fetch() {
        try {
          setIsLoading(true);
          const response = await query(params);
          setData(response.data.data);
          setIsError(false);
        } catch (err) {
          setError(err);
          setIsLoading(false);
          setIsError(true);
        }
      }
      fetch();
      setIsLoading(false);
    }, [params, query]),
  );

  return { data, isLoading, isError, error };
}

export { useFetch };
