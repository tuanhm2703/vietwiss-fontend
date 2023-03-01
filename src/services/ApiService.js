import api from "./Axios";

export const getSlider = async () => {
  const response = await api.get("/slider");
  return response.data.data;
};
