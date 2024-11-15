import axiosWithAuth from "./axios.instance";

export const fetchAudiobooks = async () => {
  try {
    const response = await axiosWithAuth.get('/audiobook/all');
    console.log('Аудиокниги получены:', response.data);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении аудиокниг:', error);
    throw error;
  }
};