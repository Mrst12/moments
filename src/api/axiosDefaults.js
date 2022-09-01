import axios from "axios";

axios.defaults.baseURL = 'https://lisas-drf-api.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'https://lisas-moments.herokuapp.com';

export const axiosReq = axios.create();
export const axiosRes = axios.create();