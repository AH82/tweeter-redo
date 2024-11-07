/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


/**
 * @summary escape function to avoid XSS while rendering.
 * @param {string} str - potentially unsafe string html
 * @returns {string} - safe string for use in html
 * 
 * @description 
 * helper function. 
 * uses vanilla JS DOM because @function createTweetElement 
 * uses string laterals to construct the html element (tweet).
 */
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


/**
 * @summary turns tweet data into a tweet DOM element.
 * @function createTweetElement
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
    ${escape(tweet.content.text)}
    </p>
    <footer>
    <div>
      ${timeago.format(tweet.created_at)}
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
 * @function renderTweets
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
    $('section.tweet-container').prepend(createTweetElement($tweet)));
};

$(document).ready(function(){

  /**
   * @summery Submits/Posts a new tweet
   * @async
   * @function
   * @this form (data)
   * @description New Tweet <form> POST request through AJAX, preventing default
   * "/tweet" endpoint takes a query string, hence @method serialize()
   */
  $("section.new-tweet form").on("submit", function (event) {
    event.preventDefault();
    
    const CHAR_LIMIT = 140;
    const $textareaValue = $("#tweet-text").val()

    // hide Tweet Error by default, 
    $(this).parent().find("p.error-msg").slideUp();

    // show error helper function
    const displayTweetError =  (errorMsg) => 
      $(this)
      .parent().find("p.error-msg").slideDown()
      .find("span").text(errorMsg);


    if (!$textareaValue) {
      displayTweetError("Tweet can not be empty, Please write something");
    } else if ($textareaValue.length > CHAR_LIMIT) { 
      displayTweetError(`Tweets can not exceed ${CHAR_LIMIT} characters, You typed ${$textareaValue.length}`);
    } else {
      $.ajax("/tweets", { 
        method: 'POST', 
        data: $(this).serialize()
      }).then(function() {
        /**
         * @summary seamlessly loads just-submitted Tweet. maybe not very DRY
         * @Previously 
          * used @function loadTweets(); 
          * inserting in its top ```$('section.tweet-container').empty();```
          * but it has noticable loading time by naked eye.
         */
        $.ajax("/tweets").then(
          function (tweets) {
            const newTweet = tweets.findLast(tweet => tweet.content.text === $textareaValue); //ensures last tweet if exact text value exists 
            $('section.tweet-container').prepend(createTweetElement(newTweet));

          }

        ) 
      });
    }
  });
  
  
  
  /**
   * @summary Reveals & toggles Form "section.new-tweet" through Nav 
   * This function is IIFE (Immediately Invoked Function Expression)
  */
  const toggleFormThroughNav = function () { // IIFE
    $("nav > div") // Nav => "Write a new tweet"
    .on("click", function () {
      $("section.new-tweet").slideToggle({
        duration: 1000,
        complete: function() { $(this).find("form textarea").focus() }
      });
    })
  }();

  
  /**
   * @async
   * @function loadTweets
    * responsible for fetching tweets from "/tweets",
    * loads/renders them using 
    * @borrows @function renderTweets
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