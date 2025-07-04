/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

var express = require("express");
var bodyParser = require("body-parser");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

const AWS = require("aws-sdk");
const cognito = new AWS.CognitoIdentityServiceProvider({
  region: process.env.REGION,
});

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.post("/", async function (req, res) {
  const { usernames, userPoolId } = req.body;

  async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  try {
    await asyncForEach(usernames, async (username) => {
      const deleteParams = {
        Username: username,
        UserPoolId: userPoolId,
      };
      await cognito.adminDeleteUser(deleteParams).promise();
    });
  } catch (err) {
    res.json({ status: "Users not deleted", err, body: req.body });
  }

  res.json({ status: "Users deleted", body: req.body });
});

app.put("/", async function (req, res) {
  const { username, userPoolId } = req.body;

  try {
    const disableParams = {
      Username: username,
      UserPoolId: userPoolId,
    };
    await cognito.adminDisableUser(disableParams).promise();
  } catch (err) {
    res.json({ status: "User not disabled", err, body: req.body });
  }

  res.json({ status: "User disabled", body: req.body });
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
