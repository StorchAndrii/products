import { useState, useCallback } from "react";
import axios, { AxiosResponse } from "axios";
import { RequestConfig, UseHttpReturn } from "@/interface/request.interface";

export const useHttp = <T, B>(): UseHttpReturn<T, B> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const request = useCallback(
    async (config: RequestConfig<B>): Promise<T | undefined> => {
      setLoading(true);
      const {
        url,
        method = "GET",
        body = null,
        headers = { "Content-Type": "application/json" },
      } = config;

      try {
        const response: AxiosResponse<T> = await axios({
          url,
          method,
          data: body,
          headers,
        });

        setError(null);
        setLoading(false);
        return response.data;
      } catch (error) {
        setLoading(false);
        if (axios.isAxiosError(error) && error.response) {
          setError(error.response.data.message || "Error occurred");
        } else {
          setError("Unknown error occurred");
        }
        return undefined;
      }
    },
    [],
  );

  const clearError = useCallback(() => setError(null), []);

  return { loading, request, error, clearError };
};
