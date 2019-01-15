import path from "path";

let config = {}
const baseConfig = {
  api: "http://192.168.64.2/yiiapi",
  staticResPath: path.join(__dirname, "../assets"),
  viewPath: path.join(__dirname, "../views"),
};

if(process.env.NODE_ENV === "production" ){
  const prodConfig = {
    port: 80,
    swigCache: 'memory'
  }
  config = Object.assign(config, baseConfig, prodConfig)
}else {
  const devConfig = {
    port: 3000,
    swigCache: false
  }
  config = Object.assign(config, baseConfig, devConfig)
}

export default config
