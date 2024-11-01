/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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
return $tweet
}; 


/**
 * @summary inserts/appends the list of tweet DOM elemnts, 
 * @param {object[]} tweets - Array of objects representing tweets' data.
 * 
 * @description 
  * inserts/appends the list of tweet DOM elemnts, 
  * created by @see createTweetElement into {@link ../public/index.html}'s $section.tweet-container
  * no return --> Appends a DOM element 
  * @todo [x] loops through tweets
  * @todo [x] calls createTweetElement for each tweet
  * @todo [x] takes return value and appends it to the tweets container
 */
const renderTweets = function (tweets) {
  tweets.forEach($tweet => 
    $('section.tweet-container').append(createTweetElement($tweet)));
};


// Test / driver code (temporary). Eventually will get this from the server.
// temp test data from server/data-files/initial-tweets.json
let data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];


$(document).ready(function(){

  console.log("rendering tweets ....")
  renderTweets(data);

});