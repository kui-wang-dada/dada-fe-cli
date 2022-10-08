// const request = require("@dada-fe-cli/request");

module.exports = function () {
  // return request({
  //   url: "/project/template",
  // });
  return [
    {
      id: "1",
      name: "vue2标准模版",
      npmName: "@dada-fe-cli/template-vue2",
      version: "1.0.0",

      tag: ["project"],
      ignore: ["**/public/**"],
      installCommand: "yarn",
      startCommand: "yarn serve",
    },
  ];
};
