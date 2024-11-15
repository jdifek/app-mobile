import axiosWithAuth from "../api/axios.instance";

// Сервис для получения списка аудиокниг
export const audiobookService = {
  getAll: async () => {
    try {
      const response = await axiosWithAuth.get("/audiobook/all");
      return response.data; // возвращаем данные, полученные с сервера
    } catch (error) {
      console.error("Ошибка при получении аудиокниг:", error);
      throw error; // выбрасываем ошибку, если запрос не удался
    }
  },
};
