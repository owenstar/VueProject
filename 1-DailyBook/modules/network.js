import axios from "axios";

const Util = {
  imgPath: "http://127.0.0.1:8011/img/",
  apiPath: "http://127.0.0.1:8010"
};

Util.network = axios.create({
  baseURL: Util.apiPath
});

//添加响应拦截器
Util.network.interceptors.response.use(
  res => {
    console.log(res);
    return res.data;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

Util.getTodayTime = function() {
  const date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date.getTime();
};

export default Util;
