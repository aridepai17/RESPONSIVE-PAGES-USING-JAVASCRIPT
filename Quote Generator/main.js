const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author: "Oprah Winfrey"
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author: "James Cameron"
    },
    {
        quote: "Life is 10% what happens to you and 90% how you react to it.",
        author: "Charles Swindoll"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
        author: "Albert Einstein"
    },
    {
        quote:"Be yourself; everyone else is already taken.",
        author:"Oscar Wilde"
    },
    {
        quote: "The real test is not whether you avoid this failure, because you won't. It is whether you let it go.",
        author: "Buddha"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston S. Churchill"
    },
    {
        quote:"Talent without working hard is nothing.",
        author:"Cristiano Ronaldo"
    },
    {
        quote:"The journey of a thousand miles begins with a single step.",
        author:"Lao Tzu"
    },
    {
        quote:"The greatest glory is not in never falling, but in rising every time we fall.",
        author:"Confucius"
    },
    {
        quote:"It is during our darkest moments that we must focus to see the light.",
        author:"Aristotle"
    }
];

function generatequote(){
    const randomindex = Math.floor(Math.random() * quotes.length);
    const randomquote = quotes[randomindex];

    const quoteelement = document.getElementById("quote");
    const authorelement = document.getElementById("author");
    quoteelement.textContent = randomquote.quote;
    authorelement.textContent = randomquote.author;
}

generatequote();

const generatequotebutton = document.getElementById("generatequote");
generatequotebutton.addEventListener("click", generatequote);

