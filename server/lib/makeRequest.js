const request = require("request");
const fs = require("fs");
const { TOKEN } = require("./env");

function make_request(method, url, data, files = {}, callback) {
  var data = JSON.parse(JSON.stringify(data));
  for (var i of Object.keys(files)) data[i] = fs.createReadStream(files[i]);

  request(
    {
      method: method,
      url: url,
      headers: { token: TOKEN },
      formData: data,
    },
    function (error, response, body) {
      if (error) throw new Error(error);
      if (callback != undefined) callback(JSON.parse(body));
    }
  );
}

module.exports = make_request;
