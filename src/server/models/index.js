import request from "request-promise";
import cheerio from "cheerio";

let indexModel = {
  getData: () => {
    return request("http://www.baidu.com").then(data => {
      const $ = cheerio.load(data);
      return $(".mnav").text();
    });
  }
};

export default indexModel;
