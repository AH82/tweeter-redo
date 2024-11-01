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
  let $tweet = `
  <article class="tweet">
  <header>
    <div>
      <img src="${tweet.user.avatars}" alt="" width="50" height="50">
      <div>
        ${tweet.user.name}
      </div>
    </div>
    <div>
    ${tweet.user.handle}
    </div>
  </header>
  <p>
    ${tweet.content.text}
    </p>
    <footer>
    <div>
      00 days ago 
      ${tweet.created_at}
    </div>
    <div>
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
  </footer>

</article>
`;

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
// TODO: Consider changing section.tweet-container into #tweet-container
// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
$('section.tweet-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
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
$(document).ready(function(){
  createTweetElement(tweetData);
});