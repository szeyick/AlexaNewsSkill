/**
* The RequestProcessor.
*
* This module is responsible for handling incoming Alexa requests.
*
* Author - Sze Yick
* Last Updated - 09/07/2017
*/

var request = require('request');
var constants = require('./constants.js');

var requestProcessor = module.exports = {
  processRequest: function(callback) {
  request(
    { method: 'GET'
    , uri: 'https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey='
    }
    , function (error, response, body) {
      // body is the decompressed response body
      var jsonResponse = JSON.parse(body.toString());

      // JSON response, articles are contained in an array.
      var articles = jsonResponse.articles;
      console.log(articles[0].author);
      console.log(articles[0].title);

      var cardContent = articles[0].description;

      var imageObj = {
        smallImageUrl: articles[0].urlToImage,
        largeImageUrl: articles[0].urlToImage
      };

      var speechOutput = "I shall read you the news. " + cardContent;
      callback.emit(':tellWithCard', speechOutput, constants.SKILL_NAME, cardContent, imageObj);
    })
  }
}
