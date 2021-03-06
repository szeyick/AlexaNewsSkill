# AlexaNewsSkill

This repository contains an Amazon Alexa Skill that processes voice requests to read the news. Presently the news articles provided are not entirely relevant to my interests or location. This Alexa Skill has been created to rectify that.

The purpose of this skill is to allow for it to be configurable so that additional news sources could be added without changing the code too much.

## Intents Schema

~~~
{
  "intents": [
    {
      "intent": "ReadNewsIntent"
    },
    {
      "intent": "ShowNewsIntent"
    },
    {
      "slots": [
        {
          "name": "source",
          "type": "NEWS_SOURCES"
        }
      ],
      "intent": "ReadNewsFromIntent"
    },
    {
      "slots": [
        {
          "name": "source",
          "type": "NEWS_SOURCES"
        }
      ],
      "intent": "ShowNewsFromIntent"
    },
    {
      "intent": "AMAZON.CancelIntent"
    }
  ]
}
~~~

## Utterances

To invoke the skill, it needs to be activated with these utterances. The skill is called "Sandra Sully" and the intents are particular functions that the skill is able to execute.

~~~
ReadNewsIntent to read the news
ShowNewsIntent to show me the news
ShowNewsIntent to show the news
ReadNewsFromIntent to read the news from {source}
ShowNewsFromIntent to show the news from {source} 
~~~

The **sources** in the current version will be 

* ABC Australia
* Tech Crunch
* ESPN

## Sources

Rather than scrape the web for news and to speed up the develop process a little, I've used the https://newsapi.org/ API.
