var request = require("request");
var fs = require("fs");

// This is your API token
var TOKEN = "6e4357443404411b9bc5774482863b7e"

// Defining the people we want to recognize later
var PEOPLE = [
        {
                "name": "Ifechukwu Daniel",
                "photo": "https://res.cloudinary.com/dn5hzsnvs/image/upload/v1626649913/IMG_20210719_000904_weztzt.jpg"
        },
        {
                "name": "Ifechukwu Daniel",
                "photo": "https://res.cloudinary.com/dn5hzsnvs/image/upload/v1626649913/IMG_20210719_000901_ewpx4w.jpg"
        },
        {
                "name": "Ifechukwu Daniel",
                "photo": "https://res.cloudinary.com/dn5hzsnvs/image/upload/v1626649914/IMG_20210719_000908_kpipze.jpg"
        },
        {
                "name": "Ifechukwu Daniel",
                "photo": "https://res.cloudinary.com/dn5hzsnvs/image/upload/v1626649914/IMG_20210719_000916_btgrrd.jpg"
        }
]

// This method is going to be used to send all the requests
function make_request(method, url, data, files = {}, callback){
	var data = JSON.parse(JSON.stringify(data))
	for (var i of Object.keys(files))
		data[i] = fs.createReadStream(files[i])

	request({
		method: method,
        	url: url,
        	headers: {
                	'token': TOKEN
        	},
        	formData: data
	}, function (error, response, body) {
		if (error) throw new Error(error);

		if (callback != undefined)
			callback(JSON.parse(body))
	});
}

// This function creates people and uploads their photos
function create_persons(callback){
	if (PEOPLE.length == 0)
		return callback()

	var person = PEOPLE.shift()
	
	console.log("Creating person for " + person.name)
	make_request("POST", "https://api.luxand.cloud/subject", {name: person.name}, {}, function(response){

		// You can also upload file from local storage instead of using URL
		// make_request("POST", "https://api.luxand.cloud/subject/" + response.id, {}, {photo: "/path/to/image.jpg"}, function(body){
		make_request("POST", "https://api.luxand.cloud/subject/" + response.id, {photo: person.photo}, {}, function(body){
			create_persons(callback)
		})
	})
}

	make_request("POST", "https://api.luxand.cloud/photo/search", {"photo": "https://res.cloudinary.com/dn5hzsnvs/image/upload/v1626650510/IMG_20210719_002017_bcrdas.jpg"}, {}, function(body){
		console.log(body)
	})	
