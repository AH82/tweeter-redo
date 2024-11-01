/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

/**
 * @summary turns tweet data into a tweet DOM element.
 * @param {object} tweet - the tweet data object
 * @returns {string} - returns a string representing a tweet elemnt  
 */
const createTweetElement = function (tweet) {
  // code for creating the tweet element

}; 

/**
 * @summary inserts/appends the list of tweet DOM elemnts, 
 * @param {object[]} tweets - Array of objects representing tweets' data.
 * 
 * @description 
  * inserts/appends the list of tweet DOM elemnts, 
  * created by @see createTweetElement into {@link ../public/index.html}'s $section.tweet-container
  * no return --> Appends a DOM element 
 */
const renderTweets = function (tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
};