
const express = require('express')
const app = express()

var params = {
    Message: "This is from Backend", // MESSAGE_TEXT
    TopicArn: "arn:aws:sns:us-east-1:798948514593:e6156", //TOPIC_ARN
};
let sns = require('./middleware.js')
let test = sns(params);

//let test = sns();
console.log(test)


//
// app.exports = function (options) {
//     return function (req, res, next) {
//         //middleware functions goes here
//
//         run();
//         next()
//     }
// }