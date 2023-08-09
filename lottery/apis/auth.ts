import { API_URL } from "@env";
import { request } from "@utils/request";

export const authRequestApi = async (): Promise<{
  error?: string;
  data?: AuthTicketResponse;
  status: number;
}> => {
  try {
    const url = `${API_URL}/auth/request`;
    const options: RequestOptions<never> = {
      method: "post",
    };
    const response = await request<never, AuthTicketResponse>(url, options);

    const { data, status, error } = response;
    if (status !== 201 || !data) {
      return Promise.reject({
        error,
        status,
      });
    }
    return Promise.resolve({
      data,
      status,
    });
  } catch (e) {
    return Promise.reject({
      error: (e as ErrorEvent).message,
      status: 500,
    });
  }
};
