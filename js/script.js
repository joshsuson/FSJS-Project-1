/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: 'Get a friend, loser.',
    source: 'Dwight Shrute',
    citation: 'Customer Survey',
    season: 'Season 5',
    year: '2008'
  },
  {
    quote: "I'm about to do something very bold in this job that I've never done before...try",
    source: 'Jim Halpert',
    citation: 'Job Fair',
    season: 'Season 4',
    year: '2007'
  },
  {
    quote: 'I miss Dwight. Congratulations, universe. You win.',
    source: 'Jim Halpert',
    citation: 'The Return',
    season: 'Season 3',
    year: '2006'
  },
  {
    quote: "In the end, the greatest snowball isn't a snowball at all. It's fear. Merry Christmas.",
    source: 'Dwight Shrute',
    citation: 'Classy Christmas pt. 1',
    season: 'Season 7',
    year: '2010'
  },
  {
    quote: 'I knew exactly what to do. But in a much more real sense, I had no idea what to do.',
    source: 'Michael Scott',
    citation: 'Stress Relief',
    season: 'Season 5',
    year: '2008'
  }
];





/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let quote = quotes[Math.floor(Math.random() * quotes.length)];
  return quote;
}

function getColor() {
  let color = Math.floor(Math.random() * 256);
  return color.toString();
}



/***
 * `printQuote` function
***/
function printQuote() {
  let randomQuote = getRandomQuote();
  let quoteHTML = `
                  <p class = "quote">${randomQuote.quote}</p>
                  <p class = "source">${randomQuote.source}
                      <span class = "season">${randomQuote.season}:</span>
                      <span class = "citation">${randomQuote.citation}</span>
                      <span class = "year">${randomQuote.year}</span>
                  </p>
                      `;
  let quoteBox = document.getElementById('quote-box');
  quoteBox.innerHTML = quoteHTML;
  
  // Create Random Background
  let randomColor = `rgb(${getColor()}, ${getColor()}, ${getColor()})`;
  let body = document.getElementsByTagName('body');
  body[0].style.background = randomColor;
}
printQuote();
setInterval(printQuote, 7000);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);