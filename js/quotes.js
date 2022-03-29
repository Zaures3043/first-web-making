const quotes = [
{
        quote: "I was never less alone than when by myself -  ",
        author: "Edward Gibbon",
},
{
    quote: "The road to success and the road to failure are almost exactly the same  ",
    author: "",
},
{
    quote: "It is better to fail in originality than to succeed in imitation -   ",
    author: "Herman Melville",
},
{
    quote: "Success is walking from failure to failure with no loss of enthusiasm -   ",
    author: "Winston Churchill",
},
{
    quote: "All progress takes place outside the comfort zone -   ",
    author: "Michael John Bobak",
},
{
    quote: "Success usually comes to those who are too busy to be looking for it -   ",
    author: "Henry David Thoreau",
},
{
    quote: "The way to get started is to quit talking and begin doing -   ",
    author: "Walt Disney",
},
{
    quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful -   ",
    author: "Albert Schweitzer",
},
{
    quote: "Success seems to be connected with action. Successful people keep moving -    ",
    author: "Conrad Hilton",
},
{
    quote: "What we dwell on is who we become -  ",
    author: "Oprah Winfrey",
},
]

const quote = document.querySelector("#quote span:nth-child(1)");
const author = document.querySelector("#quote span:nth-child(2)");

const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;