const { v4: uuid } = require("uuid");
const { TOKEN } = require("../lib/env");
const make_request = require("../lib/makeRequest");

// This is your API token

// Defining the people we want to recognize later
var PEOPLE = [
  {
    name: "Yesufu Semira Alomo",
    id: uuid(),
    photo:
      "https://res.cloudinary.com/dn5hzsnvs/image/upload/v1626677587/218179055_217436200261126_5230528539605898929_n_hvxxf9.jpg",
  },
  {
    name: "Yesufu Semira Alomo",
    id: uuid(),
    photo:
      "https://res.cloudinary.com/dn5hzsnvs/image/upload/v1626677599/219538612_1505884249786677_460548559625187929_n_c1dwui.jpg",
  },
];

// This method is going to be used to send all the requests

// This function creates people and uploads their photos
function create_persons(callback) {
  if (PEOPLE.length == 0) return callback();

  var person = PEOPLE.shift();

  console.log("Creating person for " + person.name);
  make_request(
    "POST",
    "https://api.luxand.cloud/subject",
    { name: person.name },
    {},
    function (response) {
      // You can also upload file from local storage instead of using URL
      // make_request("POST", "https://api.luxand.cloud/subject/" + response.id, {}, {photo: "/path/to/image.jpg"}, function(body){
      make_request(
        "POST",
        "https://api.luxand.cloud/subject/" + response.id,
        { photo: person.photo },
        {},
        function (body) {
          create_persons(callback);
        }
      );
    }
  );
}

module.exports = create_persons;
