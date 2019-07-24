const http = require("http");
const request = require("request");

const hostname = "127.0.0.1";
const port = 8010;
const imgPort = 8011;
const apiServer = http
  .createServer((req, res) => {
    const url = "http://news-at.zhihu.com/api/4" + req.url;
    const options = {
      url: url
    };
    function callback(error, response, body) {
      if (!error && response.statusCode === 200) {
        res.setHeader("Content-Type", "text/plain;charset=UTF-8");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.end(body);
      }
    }
    request.get(options, callback);
  })
  .listen(port, hostname, () => {
    console.log("接口代理运行在" + hostname + ":" + port);
  });

const imgServer = http
  .createServer((req, res) => {
    var url = req.url.split("/img/")[1];
    console.log(url);
    var options = {
      url: url,
      encoding: null //需要设置，否则不显示图片
    };
    function callback(error, response, body) {
      if (!error && response.statusCode === 200) {
        const contentType = response.headers["content-type"];
        res.setHeader("Content-Type", contentType);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.end(body);
      }
    }
    request.get(options, callback);
  })
  .listen(imgPort, hostname, () => {
    console.log("图片接口代理运行在" + hostname + ":" + imgPort);
  });
