import axiosWithAuth from "../../api/axios.instance";

export const authService = {
  auth: async ({ email }: { email: string }) => {
    return await axiosWithAuth.post("/telegram-auth", { email });
  },
};
