
// const express = require('express')
// const app = express()
const client = require('@aws-sdk/client-sns');
//import  { SNSClient } from "@aws-sdk/client-sns";
// Import required AWS SDK clients and commands for Node.js
//import {PublishCommand } from "@aws-sdk/client-sns";


// Set the AWS Region.
const REGION = "us-east-1"; //e.g. "us-east-1"
// Create SNS service object.
const snsClient = new client.SNSClient({ region: REGION });


// Set the parameters
// var params = {
//     Message: "This is from Backend", // MESSAGE_TEXT
//     TopicArn: "arn:aws:sns:us-east-1:798948514593:e6156", //TOPIC_ARN
// };

const run = async (params) => {
    try {
        const data = await snsClient.send(new client.PublishCommand(params));
        console.log("Success.",  data);
        return data; // For unit tests.
    } catch (err) {
        console.log("Error", err.stack);
    }
};
//run()
module.exports = run;
//
// app.exports = function (options) {
//     return function (req, res, next) {
//         //middleware functions goes here
//
//         run();
//         next()
//     }
// }