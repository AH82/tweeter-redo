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
  console.log("rendering tweets ....")
  tweets.forEach($tweet => 
    $('section.tweet-container').append(createTweetElement($tweet)));
};

$(document).ready(function(){

  /**
   * @description New Tweet <form> POST request through AJAX, preventing default
   * "/tweet" endpoint takes a query string, hence @method serialize()
   */
  $("section.new-tweet form").on("submit", function (event) {
    event.preventDefault();
    $.ajax("/tweets", { 
      method: 'POST', 
      data: $(this).serialize()
    })
  });

  /**
   * @description 
    * responsible for fetching tweets from "/tweets",
    * loads/renders them using @function renderTweets
   */
  const loadTweets = function() {
    $.ajax("/tweets")
      .then(function(tweets) {
        renderTweets(tweets);
      })
      .then( () => console.log("tweets loaded successfully!"))
  };
  loadTweets(); 
});