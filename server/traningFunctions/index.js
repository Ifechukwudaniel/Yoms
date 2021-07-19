const { v4: uuid } = require("uuid");
const { TOKEN } = require("../lib/env");
const make_request = require("../lib/makeRequest");

// This is your API token

// Defining the people we want to recognize later
var PEOPLE = [
  {
    name: "Victor Aigbekaen",
    id: uuid(),
    email: "aigbekaenv@gmail.com",
    photo:
      "https://res.cloudinary.com/dn5hzsnvs/image/upload/v1626710284/199016123_216784013608642_1880002820296103463_n_f2qkjj.jpg",
  },
  {
    name: "Victor Aigbekaen",
    id: uuid(),
    email: "aigbekaenv@gmail.com",
    photo:
      "https://res.cloudinary.com/dn5hzsnvs/image/upload/v1626710285/203614925_526498415199763_3815887773369457424_n_arwvie.jpg",
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
