const newQuote = document.getElementById("new-quote");
const quoteHtml = document.getElementById("quote");
const author = document.getElementById("author");
const quoteText = document.getElementById("quote-text");
const quoteContainer = document.getElementById("quote-container");
const loader = document.getElementById("loader");
let quoteData = [];
const loading = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
};
const dataShow = () => {
  loader.hidden = true;
  quoteContainer.hidden = false;
};
// const perloader = () => {
//   const perload = document.getElementById("preloader");
//   window.addEventListener("load", () => {
//     perload.style.display = "none";
//     console.log("ho");
//   });
// };
const randomQuote = () => {
  loading();

  const quote = quoteData[Math.floor(Math.random() * quoteData.length)];

  quoteHtml.textContent = quote.text;

  if (!quote.author) {
    author.textContent = "Anonymous";
  } else {
    author.textContent = quote.author;
  }
  if (quote.text.lentyh > 50) {
    quoteHtml.classList.add("long-quote");
  } else {
    quoteHtml.classList.remove("long-quote");
  }
  dataShow();
};
newQuote.addEventListener("click", randomQuote);
loading();

async function quoteGenerator() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const respone = await fetch(apiUrl);
    quoteData = await respone.json();
    randomQuote();
  } catch (error) {
    console.log(error);
  }
}
quoteGenerator();
