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
var https = require("https");
var querystring = require("querystring");

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

const post = (ingredients) => {
  const appId = "2a2bdf58";
  const appKey = "0fbd8532f7d4d6436943c286a8bce9eb";
  const remoteUserId = "0";

  return new Promise((resolve, reject) => {
    const options = {
      host: "trackapi.nutritionix.com",
      path: "/v2/natural/nutrients",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-app-id": appId,
        "x-app-key": appKey,
        "x-remote-user-id": remoteUserId,
      },
    };

    //create the request object with the callback with the result
    const req = https.request(options, (res) => {
      res.setEncoding("utf8");
      const body = [];
      res.on("data", (chunk) => body.push(chunk));
      res.on("end", () => resolve(body.join("")));
    });

    // handle the possible errors
    req.on("error", (e) => {
      reject(e.message);
    });

    //do the request
    req.write(JSON.stringify({ query: ingredients }));

    //finish the request
    req.end();
  });
};

app.post("/nutrients", async function (req, res) {
  const { ingredients } = req.body;
  const data = await post(ingredients);
  res.json({ data });
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
