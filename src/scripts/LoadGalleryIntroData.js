var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
  region: "sa-east-1"
});

console.log("Writing entries to Gallery Intro table.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var galleryintroData = 
  JSON.parse(fs.readFileSync('../components/data/gallery_intro.json', 'utf8'));

galleryintroData.forEach(function(galleryIntro) {
  var className = galleryIntro.class;
  if (className.trim() == "")
    className = "no_class";

  var params = {
    TableName: "GalleryIntro",
    Item: {
      "src": galleryIntro.src,
      "alt": galleryIntro.alt,
      "class": className
    }
  };

  dynamodb.put(params, function(err, data) {
    if (err)
      console.error("Unable to load data into table for gallery intro",
                    galleryIntro.src, ". Error: ", JSON.stringify(err, null, 2))
    else
      console.log("Added", galleryIntro.src, "to table.")
  });
});