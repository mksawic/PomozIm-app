import React, {useState, createContext, useEffect} from 'react';
import camelize from 'camelize';
import {newsRequest} from './News.service';

export const NewsContext = createContext();

export const NewsContextProvider = ({children}) => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getNews = (p = 1) =>
    newsRequest(p)
      .then(response => {
        setCount(response.count);
        return camelize(response.results);
      })
      .then(response =>
        setNews(prevNews => (p !== 1 ? [...prevNews, ...response] : response))
      )
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getNews(page);
  }, [page]);

  return (
    <NewsContext.Provider
      value={{
        news,
        count,
        isLoading,
        error,
        page,
        setPage,
        getNews
      }}>
      {children}
    </NewsContext.Provider>
  );
};
