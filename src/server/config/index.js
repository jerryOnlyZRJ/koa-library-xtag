import path from "path";

const config = {
  api: "http://192.168.64.2/yiiapi",
  staticResPath: path.join(__dirname, "../assets"),
  viewPath: path.join(__dirname, "../views"),
  port: process.env.NODE_ENV === "production" ? 80 : 3000
};

export default config;
