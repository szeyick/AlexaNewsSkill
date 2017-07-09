/**
 * The Index.js
 *
 * This file represents the entry point for the Amazon Alexa Skill responsible for providing a
 * mechanism to read the news. The news API is provided by https://newsapi.org.
 *
 * Author - Sze YIck
 * Last Updated - 09/07/2017
 */
'use strict'
var Alexa = require('alexa-sdk');
var constants = require('./constants.js');
var requestProcessor = require('./requestProcessor');

/**
* The entry point.
*/
exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context);
  alexa.APP_ID = constants.APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
}

/**
* Function handlers.
*/
var handlers = {
  'LaunchRequest': function () {

  },
  'ReadNewsIntent': function () {
    requestProcessor.processRequest(this);
  },
  'ShowNewsIntent': function () {
    var speechOutput = "I shall show you the news.";
    this.emit(':tellWithCard', speechOutput, constants.SKILL_NAME, speechOutput)
  },
  'ReadNewsFromIntent': function () {
    var newsSource = this.event.request.intent.slots.sources.value;
    var speechOutput = "I shall read you the news from " +  + newsSource;
    this.emit(':tellWithCard', speechOutput, constants.SKILL_NAME, speechOutput)
  },
  'ShowNewsFromIntent': function () {
    var newsSource = this.event.request.intent.slots.sources.value;
    var speechOutput = "I shall show you the news from " + newsSource;
    this.emit(':tellWithCard', speechOutput, constants.SKILL_NAME, speechOutput)
  }
}
