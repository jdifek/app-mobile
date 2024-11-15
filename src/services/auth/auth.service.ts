import axiosWithAuth from "../../api/axios.instance";
import { IAuthResponse } from "../../types/interfaces";
import { saveTokens } from "./auth.helper";

export const authService = {
  auth: async ({ id }: { id: number }) => {
    return (await axiosWithAuth.post<IAuthResponse>("/telegram-auth", { id }))
      .data;
  },
  refresh: async () => {
    const data = (await axiosWithAuth.post<IAuthResponse>("/refresh-token"))
      .data;
    if (data) saveTokens(data.access_token, data.refresh_token);
  },
};
