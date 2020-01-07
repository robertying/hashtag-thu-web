import axios from "axios";

axios.defaults.baseURL = "https://api.thu.community/v1";

const fetcher = async (url: string, data: any) => {
  if (!data) {
    const response = await axios.get(url);
    return response.data;
  } else {
    const response = await axios.post(url, data);
    return response.data;
  }
};

export { fetcher };
