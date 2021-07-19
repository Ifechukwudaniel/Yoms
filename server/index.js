const create_persons = require("./traningFunctions");
const make_request = require("./lib/makeRequest");

// create_persons(() => {});
make_request(
  "POST",
  "https://api.luxand.cloud/photo/search",
  {
    photo:
      "https://res.cloudinary.com/dn5hzsnvs/image/upload/v1626710894/202981799_541559883636989_2369537793761785373_n_x78uya.jpg",
  },
  {},
  function (body) {
    console.log(body);
  }
);
