import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';

// TODO 로딩 상태 관리 다시 하기
function useFetch(query, params) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useFocusEffect(
    useCallback(() => {
      async function fetch() {
        try {
          const response = await query(params);
          setData(response.data.data);
          setIsLoading(false);
          setIsError(false);
        } catch (err) {
          setError(err);
          setIsLoading(false);
          setIsError(true);
        }
      }
      setIsLoading(true);
      fetch();
    }, [params, query]),
  );

  return { data, isLoading, isError, error };
}

export { useFetch };
