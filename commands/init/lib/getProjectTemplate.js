const request = require("@dada-fe-cli/request");

module.exports = function () {
  return request({
    url: "/project/template",
  });
};
