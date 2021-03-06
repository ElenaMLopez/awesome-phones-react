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

const deleteElement = async (url) => {
  try {
    const res = await axios.delete(url);
    return res
  } catch (error) {
    throw new Error(error.message);
  }
}
const addElement = async (url, body) => {
  try {
    const res = await axios.post(url, body);
    return res;    
  } catch (error) {
    throw new Error(error.message);
  }
}

export default {
  get,
  deleteElement,
  addElement
}