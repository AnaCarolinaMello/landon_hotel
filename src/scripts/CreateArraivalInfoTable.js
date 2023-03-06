var AWS = require("aws-sdk");

AWS.config.update({
  region: "sa-east-1"
});

var dynamodb = new AWS.DynamoDB();

var params = {
  TableName: "ArravialInfo",
  KeySchema: [
    // Partition Key
    { AttributeName: "text", KeyType: "HASH" },
    // Sort Keys
    { AttributeName: "strong", KeyType: "RANGE"}  
  ],
  AttributeDefinitions: [
    { AttributeName: "text", AttributeType: "S" },
    { AttributeName: "strong", AttributeType: "S" }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
};

dynamodb.createTable(params, function(err, data) {
  if (err)
    console.error("Unable to create table: ", JSON.stringify(err, null, 2))
  else
    console.log("Created table with description: ", JSON.stringify(data, null, 2))
});