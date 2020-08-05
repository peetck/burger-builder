import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-8c2be.firebaseio.com/",
});

export default instance;
