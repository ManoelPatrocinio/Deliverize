import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";

const api = axios.create({
  baseURL: import.meta.env.VITE_URL_API || "https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/"
})

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null)
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    api.get(url, options)
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      })
  }, [])

  return { data, error, isFetching }
}