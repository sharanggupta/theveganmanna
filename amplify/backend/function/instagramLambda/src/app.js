/* Amplify Params - DO NOT EDIT
	AUTH_THEVEGANMANNAAUTH_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */ /*
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
const https = require("https");
const FormData = require("form-data");

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

/**********************
 * Example get method *
 **********************/

app.get("/auth", function (req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

app.get("/auth/*", function (req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

/****************************
 * Example post method *
 ****************************/

app.post("/auth", function (req, res) {
  let cognitoidentity = new AWS.CognitoIdentity();

  const { access_token, user_id } = req.body;

  let params = {
    IdentityId: null,
    IdentityPoolId: "eu-west-2:b24c8c4a-fd7d-4156-8105-f1f97b76f0a1",
    Logins: {
      Instragram: user_id,
    },
    TokenDuration: 86400, // Life span of your token in seconds. Maximum 24 hours.
  };

  cognitoidentity.getOpenIdTokenForDeveloperIdentity(
    params,
    function (err, data) {
      if (err) {
        res.json({ message: "error occured", err });
      } else {
        res.json({ message: "success", data });
      }
    }
  );
});

const post = (code) => {
  return new Promise((resolve, reject) => {
    const form = new FormData();
    form.append("client_id", "581301996194287");
    form.append("client_secret", "0ddcf245704d6fae9d77b2383b04dc4c");
    form.append("grant_type", "authorization_code");
    form.append("redirect_uri", "https://veganmanna.org/auth/instagram/");
    form.append("code", code);

    const options = {
      host: "api.instagram.com",
      path: "/oauth/access_token",
      method: "POST",
      headers: form.getHeaders(),
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

    // //finish the request
    form.pipe(req);
  });
};

app.post("/auth/token", async function (req, res) {
  const { code } = req.body;
  const data = await post(code);
  res.json({ data });
});

/****************************
 * Example put method *
 ****************************/

app.put("/auth", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.put("/auth/*", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example delete method *
 ****************************/

app.delete("/auth", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.delete("/auth/*", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
