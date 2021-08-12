var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1> html is great </h1>", function(error) {
	if (error) {
		return console.log(error);
	} else {
		return console.log("congrats");
	}
});
var url = 'https://www.vets4pets.com/siteassets/dental-webheaders-dog---oct-20.jpg'
https.get(url , function(response){
response.pipe(fs.createWriteStream(__dirname + "/pic.jpg"))
});
