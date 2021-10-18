import axios from "axios";

const get = async (url, options) => {
  try {
    const res = options 
      ? await axios.get(url, options) 
      : await axios.get(url);
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
}
export default {
  get
}