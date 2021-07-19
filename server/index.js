const create_persons = require("./traningFunctions");
const make_request = require("./lib/makeRequest");

// create_persons(() => {});
make_request(
  "POST",
  "https://api.luxand.cloud/photo/search",
  {
    photo:
      "https://res.cloudinary.com/dn5hzsnvs/image/upload/v1626679218/219256520_1080130949183851_7222184608222945612_n_1_mmyl9t.jpg",
  },
  {},
  function (body) {
    console.log(body);
  }
);
