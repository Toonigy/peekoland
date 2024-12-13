document.querySelector('.tweet-btn').addEventListener('click', function() {
  const tweetText = document.querySelector('.tweet-box textarea').value;
  if (tweetText.trim() !== "") {
    const tweetContainer = document.querySelector('.tweets');
    
    // Create new tweet element
    const newTweet = document.createElement('div');
    newTweet.classList.add('tweet');
    
    // Insert tweet content
    newTweet.innerHTML = `
      <p><strong>New User</strong> - Just now</p>
      <p>${tweetText}</p>
    `;
    
    // Append the new tweet to the tweet list
    tweetContainer.prepend(newTweet);
    
    // Clear the textarea
    document.querySelector('.tweet-box textarea').value = '';
  }
});
