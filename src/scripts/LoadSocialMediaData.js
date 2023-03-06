var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
  region: "sa-east-1"
});

console.log("Writing entries to Social Media table.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var socialMediaData = 
  JSON.parse(fs.readFileSync('../components/data/social_media.json', 'utf8'));

  socialMediaData.forEach(function(socialMedia) {
  var params = {
    TableName: "SocialMedia",
    Item: {
      "src": socialMedia.src,
      "href": socialMedia.href,
      "alt": socialMedia.alt
    }
  };

  dynamodb.put(params, function(err, data) {
    if (err)
      console.error("Unable to load data into table for menu links",
      socialMedia.text, ". Error: ", JSON.stringify(err, null, 2))
    else
      console.log("Added", socialMedia.text, "to table.")
  });
});