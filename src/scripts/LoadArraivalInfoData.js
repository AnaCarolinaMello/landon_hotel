var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
  region: "sa-east-1"
});

console.log("Writing entries to arraivalInfo table.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var arraivalInfoData = 
  JSON.parse(fs.readFileSync('../components/data/arraival_info.json', 'utf8'));

  arraivalInfoData.forEach(function(arraivalInfo) {
  var params = {
    TableName: "ArravialInfo",
    Item: {
      "text": arraivalInfo.text,
      "strong": arraivalInfo.strong
    }
  };

  dynamodb.put(params, function(err, data) {
    if (err)
      console.error("Unable to load data into table for arraival info",
      arraivalInfo.text, ". Error: ", JSON.stringify(err, null, 2))
    else
      console.log("Added", arraivalInfo.text, "to table.")
  });
});