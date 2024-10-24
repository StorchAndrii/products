export interface RequestConfig<B> {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: B;
  headers?: Record<string, string>;
}

export interface UseHttpReturn<T, B = null> {
  loading: boolean;
  request: (config: RequestConfig<B>) => Promise<T | undefined>;
  error: string | null;
  clearError: () => void;
}
