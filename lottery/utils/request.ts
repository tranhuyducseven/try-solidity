import axios, { AxiosError, AxiosResponse } from "axios";

type ErrorResponseType = {
  error: string;
  message: string;
  statusCode: number;
};

/**
 * @param url - url to request
 * @param options - options for request
 * @returns Promise<{response: T, status: number}>
 * T is the type of request data
 * K is the type of response data
 */
const request = <T, K>(
  url: string,
  options: RequestOptions<T>
): Promise<{
  error?: ErrorResponseType;
  data?: K;
  status: number;
}> => {
  const { method = "get", data } = options;
  const headers = {
    "Content-Type": "application/json",
  };

  return axios({
    method,
    url,
    data,
    headers: { ...headers, ...options.headers },
  })
    .then((res: AxiosResponse<K>) => {
      return Promise.resolve({ data: res.data, status: res.status });
    })
    .catch((err: AxiosError<ErrorResponseType>) => {
      return Promise.resolve({
        error: err.response?.data,
        status: err.response?.status || 404,
      });
    });
};

export { request };
